import { answerWithProvider, type ProviderEnv } from './providers'
import { DurableObject, WorkerEntrypoint } from 'cloudflare:workers'
import { digest, extractAnswer, freshMeter, prepareMessages, reserve, type Meter } from './policy'

interface Env extends ProviderEnv {
  HELPER_LIMITS: DurableObjectNamespace<HelperLimits>
  HELPER_ENABLED?: string
}
const DAILY_MESSAGE = 'المساعد وصل لحده المجاني النهارده. جرّب بكرة، وتقدر تكمل دروسك وتدريباتك عادي.'
const RATE_MESSAGE = 'استنى دقيقة قبل السؤال الجاي عشان المساعد يفضل متاح لكل الطلبة.'
const UNAVAILABLE_MESSAGE = 'المساعد مش متاح دلوقتي. جرّب بعد شوية، وماتعتمدش على إجابة مش متأكد منها.'
function reply(message: string, status = 503, code = 'HELPER_UNAVAILABLE') {
  return Response.json({ error: message, message, code }, { status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': code === 'HELPER_RATE_LIMIT' ? '60' : String(Math.ceil((Date.parse(new Date().toISOString().slice(0, 10)) + 86400000 - Date.now()) / 1000)) } : {}) } })
}
export function freePlanEnabled(env: Env): boolean {
  // Deployment is approved only on the verified Workers Free plan. No API
  // token or billing-management permissions are present in this Worker.
  return env.HELPER_ENABLED === 'true'
}
export class HelperLimits extends DurableObject<Env> {
  async alarm(){await this.ctx.blockConcurrencyWhile(async()=>{const storage=this.ctx.storage;const meter=await storage.get<Meter>('meter');const today=new Date().toISOString().slice(0,10);if(meter?.day===today)await storage.setAlarm(Date.parse(today)+86400000);else await storage.deleteAll()})}
  async fetch(request: Request): Promise<Response> {
    if (!freePlanEnabled(this.env)) return reply(UNAVAILABLE_MESSAGE)
    const body = await request.json() as { messages: { role: string; content: string }[]; identity: string; ip: string }
    const now = Date.now(), day = new Date(now).toISOString().slice(0, 10)
    const decision = await this.ctx.storage.transaction(async storage => {
      const old = await storage.get<Meter>('meter')
      const meter = old?.day === day ? old : freshMeter(now)
      const user = await digest(meter.salt + ':' + body.identity), ip = await digest(meter.salt + ':' + body.ip)
      const result = reserve(meter, user, ip, now)
      if (result === 'ok') {await storage.put('meter', meter);await storage.setAlarm(Date.parse(day)+86400000)}
      return { result }
    })
    if (decision.result !== 'ok') return reply(decision.result === 'daily' ? DAILY_MESSAGE : RATE_MESSAGE, 429, decision.result === 'daily' ? 'HELPER_DAILY_LIMIT' : 'HELPER_RATE_LIMIT')
    // Requests remain reserved on abort/errors: an uncertain inference may have
    // consumed the shared account allocation. One primary attempt and one free
    // fallback share this reservation; no retry loop is allowed.
    try {
      let timer: ReturnType<typeof setTimeout> | undefined
      const inference = answerWithProvider(this.env, body.messages)
      let output: unknown
      try { output = await Promise.race([inference, new Promise<never>((_, reject) => { timer = setTimeout(() => reject(new Error('helper_timeout')), 25000) })]) }
      finally { if(timer!==undefined)clearTimeout(timer) }
      const text = extractAnswer(output)
      if (!text) return reply(UNAVAILABLE_MESSAGE)
      return Response.json({ text, provider: 'helper', model: 'learning-helper', isLocalFallback: false }, { headers: { 'Cache-Control': 'no-store' } })
    } catch (error) {
      // Inspect only to classify. Never log the prompt, response, IP or error.
      const code = error && typeof error === 'object' ? error as { status?: number; code?: number; message?: string } : {}
      if (code.status === 429 || code.code === 3036 || /3036|daily.*limit|neurons.*limit/i.test(code.message || '')) {
        await this.ctx.storage.transaction(async storage => {
          const meter = await storage.get<Meter>('meter')
          if (meter?.day === day) { meter.parked = true; await storage.put('meter', meter) }
        })
        return reply(DAILY_MESSAGE, 429, 'HELPER_DAILY_LIMIT')
      }
      return reply(UNAVAILABLE_MESSAGE)
    }
  }
}

// No public inference route. Only a same-account service binding can call ask().
export default class GermanHelper extends WorkerEntrypoint<Env> {
 async fetch():Promise<Response>{return new Response('Not found',{status:404})}
 async ask(input:unknown):Promise<{status:number;body:unknown;retryAfter:string|null}>{
  if(!input||typeof input!=='object')return {status:400,body:{code:'HELPER_INVALID_REQUEST'},retryAfter:null};
  const row=input as {payload:unknown;identity:unknown;ip:unknown};
  const messages=prepareMessages(row.payload);
  if(!messages||typeof row.identity!=='string'||row.identity.length>200||typeof row.ip!=='string'||!row.ip||row.ip.length>100)return {status:400,body:{code:'HELPER_INVALID_REQUEST'},retryAfter:null};
  if(!freePlanEnabled(this.env))return {status:503,body:{code:'HELPER_UNAVAILABLE'},retryAfter:null};
  const stub=this.env.HELPER_LIMITS.get(this.env.HELPER_LIMITS.idFromName('deutschy-global-v1'));
  const response=await stub.fetch(new Request('https://internal/reserve-and-answer',{method:'POST',body:JSON.stringify({messages,identity:row.identity,ip:row.ip})}));
  return {status:response.status,body:await response.json(),retryAfter:response.headers.get('Retry-After')};
 }
}
