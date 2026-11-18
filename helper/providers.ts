import {MODEL,MAX_OUTPUT_TOKENS} from './policy';
export interface ProviderEnv {AI:Ai}
export async function answerWithProvider(env:ProviderEnv,messages:{role:string;content:string}[]):Promise<unknown>{return env.AI.run(MODEL,{messages,max_completion_tokens:MAX_OUTPUT_TOKENS,temperature:0.2,chat_template_kwargs:{enable_thinking:false}} as any)}
