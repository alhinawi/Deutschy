'use client';
import Speaker from './Speaker';
import { arTries } from '@/lib/arcount';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { words, topics, topicTitles, Word, img, sample, shuffle, glossOf, topicName } from '@/lib/data';
import { useLang, useT } from '@/lib/i18n';
import { useStore } from '@/lib/store';
import { speak } from '@/lib/speak';
import { stats, queue, grade, flashDecision } from '@/lib/srs';

const pool = (topic: string | null) => (topic ? words.filter((w) => w.topic === topic) : words);

export default function GameRunner({ game }: { game: string }) {
  const t = useT();
  const { lang } = useLang();
  const sp = useSearchParams();
  const [topic, setTopic] = useState<string | null>(sp.get('topic'));
  const [round, setRound] = useState(0);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/games/" className="text-sm text-muted hover:text-ink">← {t('الألعاب', 'Games')}</Link>
        <label className="block max-w-full text-sm text-muted">
          {t('الموضوع', 'Topic')}{' '}
          <select className="max-w-full rounded-lg border border-line bg-card px-2 py-1 text-ink" value={topic ?? ''} onChange={(e) => { setTopic(e.target.value || null); setRound((r) => r + 1); }}>
            <option value="">{t('كل الكلمات', 'All words')}</option>
            {topic&&!topics.some(tp=>tp.id===topic)&&<option value={topic}>{t("موضوع مش موجود","Unavailable topic")}</option>}
            {topics.map((tp) => <option key={tp.id} value={tp.id}>{topicTitles[tp.id]} · {topicName(tp.id, lang)}</option>)}
          </select>
        </label>
      </div>
      <Game key={`${game}-${topic}-${round}`} game={game} list={pool(topic)} again={() => setRound((r) => r + 1)} />
    </div>
  );
}

type Props = { game: string; list: Word[]; again: () => void };
function Game({ game, list, again }: Props) {
  const t=useT();
  if(!list.length)return <section role="status" className="rounded-2xl border border-line bg-card p-6"><h2 className="ar-title text-2xl">{t('مفيش كلمات للموضوع ده','No words for this topic')}</h2><p>{t('اختار موضوع من القائمة أو كل الكلمات. مفيش جولة أو نقط اتسجلت.','Choose a listed topic or All words. No round or points have been recorded.')}</p></section>;
  if (game === 'flashcards') return <Flash list={list} />;
  if (game === 'memory') return <Memory list={list} again={again} />;
  return <Rounds game={game} list={list} again={again} />;
}

function Photo({ w }: { w: Word }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={img(w)} alt="" className="photo rounded-2xl" width={480} height={360} />;
}

function Flash({ list }: { list: Word[] }) {
  const t = useT();
  const { lang } = useLang();
  const { s, ready, award, setCard } = useStore();
  const [deck, setDeck] = useState<Word[] | null>(null);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [known, setKnown] = useState(0);
  const [retry, setRetry] = useState<Set<string>>(new Set());
  const answered = useRef(new Set<number>());
  if (!ready) return <p className="text-muted">…</p>;
  const st = stats(list, s.srs);
  if (deck === null) {
    const q = queue(list, s.srs);
    return (
      <div className="mx-auto max-w-md space-y-4 rounded-2xl border border-line bg-card p-6">
        <p className="ar-title text-2xl font-bold">{t('مراجعة متباعدة', 'Spaced repetition')}</p>
        <p className="text-muted">{t('أول إجابة على الكلمة هي اللي بتحدد الجدول والنقط. الغلط بيرجع مرة واحدة للتدريب في نفس الجولة، وبيفضل مستحق النهارده حتى لو عرفته في الإعادة.', 'The first answer sets the schedule and points. Each miss gets one practice retry this round and stays due today, even if the retry is correct.')}</p>
        <dl className="num grid grid-cols-2 gap-3 text-center" dir="ltr">
          <div className="rounded-xl bg-paper p-3"><dt className="text-xs text-muted">{t('مستحقة النهارده', 'Due today')}</dt><dd className="text-2xl font-bold">{st.due}</dd></div>
          <div className="rounded-xl bg-paper p-3"><dt className="text-xs text-muted">{t('جديدة', 'New')}</dt><dd className="text-2xl font-bold">{st.fresh}</dd></div>
          <div className="rounded-xl bg-paper p-3"><dt className="text-xs text-muted">{t('بتتعلمها', 'Learning')}</dt><dd className="text-2xl font-bold">{st.learning}</dd></div>
          <div className="rounded-xl bg-paper p-3"><dt className="text-xs text-muted">{t('صندوق 4 أو أعلى', 'Box 4 or higher')}</dt><dd className="text-2xl font-bold">{st.known}</dd></div>
        </dl>
        {q.length > 0 ? (
          <button onClick={() => setDeck(q)} className="w-full rounded-full bg-accent py-3 font-bold text-accent-ink">{t(`ابدأ (${q.length} كارت)`, `Start (${q.length} cards)`)}</button>
        ) : <p className="ar-title text-lg">{t('مفيش كروت مستحقة دلوقتي. ارجع بكرة.', 'No cards are due right now. Come back tomorrow.')}</p>}
      </div>
    );
  }
  if (i >= deck.length) return <Done title={t('خلصت الجلسة', 'Session finished')} line={t(`صح من أول مرة: ${known} من ${deck.length-retry.size}. إعادة التدريب ملهاش نقط ومش بتأجل المراجعة.`, `First-pass correct: ${known} of ${deck.length-retry.size}. Practice retries earn no points and do not postpone review.`)} xp={known * 2} />;
  const w = deck[i];
  const next = (ok: boolean) => {
    if (answered.current.has(i)) return;
    answered.current.add(i);
    const decision = flashDecision(retry.has(w.id), ok);
    if (decision.schedule) setCard(w.id, grade(s.srs[w.id], ok));
    if (decision.record) award(decision.xp, w.id, ok);
    if (decision.countKnown) setKnown((k) => k + 1);
    if (decision.requeue) { setRetry(new Set(retry).add(w.id)); setDeck([...deck, w]); }
    setFlip(false); setI(i + 1);
  };
  return (
    <div className="mx-auto max-w-md space-y-4">
      <p dir="ltr" className="num text-center text-sm text-muted">{i + 1} / {deck.length}</p>{retry.has(w.id)&&<p role="status" className="rounded-xl border border-line bg-card p-3 text-sm">{t('إعادة تدريب واحدة. الكلمة هتفضل مستحقة النهارده، من غير نقط إضافية.','One practice retry. This word stays due today, with no extra points.')}</p>}
      <button onClick={() => setFlip(!flip)} className="block w-full overflow-hidden rounded-2xl border border-line bg-card text-start">
        <Photo w={w} />
        <div className="p-5 text-center">
          {flip ? (
            <>
              <p className="de text-3xl font-semibold"><span className="text-accent">{w.art}</span> {w.de}</p>
              <p className="ar-title mt-1 text-2xl">{glossOf(w, lang)}</p>
            </>
          ) : <p className="text-muted">{t('اضغط عشان تشوف الكلمة', 'Tap to see the word')}</p>}
        </div>
      </button>
      {flip && (
        <div className="flex gap-3">
          <button aria-label={t('اسمع الكلمة', 'Hear the word')} onClick={() => speak(`${w.art} ${w.de}`)} className="min-h-11 min-w-11 rounded-full border border-line px-4 py-3"><Speaker /></button>
          <button onClick={() => next(false)} className="flex-1 rounded-full border border-line py-3 font-bold">{t('لسه', 'Not yet')}</button>
          <button onClick={() => next(true)} className="flex-1 rounded-full bg-accent py-3 font-bold text-accent-ink">{t('عرفتها', 'I knew it')}</button>
        </div>
      )}
    </div>
  );
}

function Rounds({ game, list, again }: Props) {
  const t = useT();
  const { lang } = useLang();
  const N = Math.min(10, list.length);
  const qs = useMemo(() => sample(list, N).map((w) => ({ w, opts: shuffle([w, ...sample(words.filter((x) => x.id !== w.id), 3)]) })), [list, N]);
  const { award, addScore } = useStore();
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [typed, setTyped] = useState('');
  const saved=useRef(false);
  const locked=useRef(false);
  useEffect(()=>{if(i>=qs.length&&!saved.current&&qs.length){saved.current=true;addScore(game,score)}},[i,qs.length,game,score,addScore]);
  const next=()=>{setPicked(null);setTyped('');setI(i+1);locked.current=false};

  if (i >= qs.length) {
    return <Done title={t('خلصت الجولة', 'Round finished')} line={t(`${score} من ${qs.length} صح`, `${score} of ${qs.length} correct`)} xp={score * (game === 'spelling' ? 15 : 10)} again={again} />;
  }
  const { w, opts } = qs[i];
  const xp = game === 'spelling' ? 15 : 10;
  const advance = (ok: boolean) => { if(locked.current)return;locked.current=true;award(ok ? xp : 0, w.id, ok); if (ok) setScore((s) => s + 1); };
  const feedback=(ok:boolean)=><div role="status" className="space-y-3"><p>{ok?t('صح.','Correct.'):t('راجع الكلمة الصح.','Check the correct word.')}</p><p dir="ltr" lang="de" className="de break-words text-xl">{w.art} {w.de}</p><button type="button" onClick={next} className="w-full rounded-full bg-accent px-5 py-3 font-bold text-accent-ink">{i+1>=qs.length?t('النتيجة','Result'):t('التالي','Next')}</button></div>;

  if (game === 'spelling') {
    const correct = typed.normalize('NFC').trim().toLocaleLowerCase('de') === w.de.normalize('NFC').toLocaleLowerCase('de');
    const done = picked !== null;
    return (
      <Frame i={i} n={qs.length}>
        <Photo w={w} />
        <p className="ar-title text-center text-2xl">{glossOf(w, lang)}</p>
        <form onSubmit={(e) => { e.preventDefault(); if (done || locked.current || !typed.trim()) return; setPicked(typed); advance(correct); }} className="space-y-3">
          <input dir="ltr" lang="de" aria-label={t("اكتب الكلمة الألماني","Type the German noun")} maxLength={150} autoComplete="off" spellCheck={false} autoCapitalize="none" autoFocus value={typed} onChange={(e) => setTyped(e.target.value)} disabled={done} placeholder="…" className="de w-full rounded-xl border border-line bg-card px-4 py-3 text-center text-2xl outline-none focus:border-accent" />
          <p className="text-center text-xs text-muted">{t('اكتب الكلمة من غير der/die/das. هنا مش بنفرق الحرف الكبير والصغير؛ ä ö ü ß لازم صح. الاسم الألماني بيبدأ عادة بحرف كبير.', 'Type the word without der/die/das. Case is ignored in this practice; ä ö ü ß must match. German nouns normally start with a capital.')}</p>
          {done && feedback(correct)}
          <button disabled={done||!typed.trim()} className="w-full rounded-full bg-accent py-3 font-bold text-accent-ink disabled:opacity-50">{t('تأكيد', 'Check')}</button>
        </form>
      </Frame>
    );
  }

  if (game === 'article') {
    return (
      <Frame i={i} n={qs.length}>
        <Photo w={w} />
        <p className="de [overflow-wrap:anywhere] text-center text-4xl font-semibold" lang="de">{w.de}</p>
        <p className="ar-title text-center text-xl text-muted">{glossOf(w, lang)}</p>
        <div className="grid grid-cols-3 gap-3">
          {(['der', 'die', 'das'] as const).map((a) => (
            <Choice key={a} label={a} state={picked === null ? '' : a === w.art ? 'good' : picked === a ? 'bad' : ''} disabled={picked!==null} onClick={() => { if (picked || locked.current) return; setPicked(a); advance(a === w.art); }} />
          ))}
        </div>
        {picked!==null&&feedback(picked===w.art)}
      </Frame>
    );
  }

  // quiz: photo -> pick the German word
  return (
    <Frame i={i} n={qs.length}>
      <Photo w={w} />
      <p className="ar-title text-center text-xl text-muted">{t('إيه الكلمة الألماني للصورة دي؟', 'What is the German word for this picture?')}</p>
      <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
        {opts.map((o) => (
          <Choice key={o.id} label={`${o.art} ${o.de}`} state={picked === null ? '' : o.id === w.id ? 'good' : picked === o.id ? 'bad' : ''} disabled={picked!==null} onClick={() => { if (picked || locked.current) return; setPicked(o.id); advance(o.id === w.id); }} />
        ))}
      </div>
      {picked!==null&&feedback(picked===w.id)}
    </Frame>
  );
}

function Frame({ i, n, children }: { i: number; n: number; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-md space-y-4">
      <div className="h-1.5 overflow-hidden rounded-full bg-line"><div className="h-full bg-accent" style={{ width: `${(i / n) * 100}%` }} /></div>
      <p dir="ltr" className="num text-center text-sm text-muted">{i + 1} / {n}</p>
      {children}
    </div>
  );
}

function Choice({ label, state, onClick,disabled }: { disabled?:boolean; label: string; state: '' | 'good' | 'bad'; onClick: () => void }) {
  const c = state === 'good' ? 'border-good bg-good/15' : state === 'bad' ? 'border-bad bg-bad/15' : 'border-line bg-card hover:border-accent';
  return <button disabled={disabled} onClick={onClick} dir="ltr" className={`de min-w-0 [overflow-wrap:anywhere] rounded-xl border px-3 py-3 text-lg font-semibold ${c}`} lang="de">{label}</button>;
}

function Memory({ list, again }: { list: Word[]; again: () => void }) {
  const t = useT();
  const pairs = useMemo(() => sample(list, Math.min(6, list.length)), [list]);
  const cards = useMemo(() => shuffle(pairs.flatMap((w) => [{ k: w.id + 'p', id: w.id, kind: 'p' as const, w }, { k: w.id + 'w', id: w.id, kind: 'w' as const, w }])), [pairs]);
  const { award, addScore } = useStore();
  const [open, setOpen] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [tries, setTries] = useState(0);
  const openKeys=useRef<string[]>([]);
  const matchedIds=useRef(new Set<string>());
  const saved=useRef(false);
  const finished = matched.length === pairs.length;
  const score = Math.max(0, pairs.length * 2 - Math.max(0, tries - pairs.length));
  useEffect(()=>{if(finished&&!saved.current&&pairs.length){saved.current=true;addScore('memory',score);award(pairs.length*10)}},[finished,pairs.length,score,addScore,award]);
  const tap = (c: (typeof cards)[number]) => {
    if(finished||openKeys.current.includes(c.k)||matchedIds.current.has(c.id)||openKeys.current.length===2)return;
    const nx=[...openKeys.current,c.k];openKeys.current=nx;setOpen(nx);
    if(nx.length===2)setTries(t=>t+1);
  };
  const pair=open.length===2?open.map(k=>cards.find(c=>c.k===k)!):null;
  const pairMatches=!!pair&&pair[0].id===pair[1].id;
  const continuePair=()=>{if(openKeys.current.length!==2)return;const keys=openKeys.current;openKeys.current=[];const [a,b]=keys.map(k=>cards.find(c=>c.k===k)!);if(a.id===b.id){matchedIds.current.add(a.id);setMatched([...matchedIds.current])}setOpen([])};
  if (finished) return <Done title={t('كملت اللعبة', 'Game finished')} line={t(`${arTries(tries)} · سكور ${score}`, `${tries} tries · score ${score}`)} xp={pairs.length * 10} again={again} />;
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <p className="num text-center text-sm text-muted">{t('المحاولات', 'Tries')}: {tries}</p>
      <p className="text-sm text-muted">{t('افتح كارتين وطابق الصورة بالكلمة. الزوج بيفضل ظاهر لحد ما تضغط كمل. المحاولات بتعد أزواج الكروت، مش عدد الضغطات.','Reveal two cards and match the photo to its word. The pair stays visible until Continue. Tries count card pairs, not taps.')}</p>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {cards.map((c) => {
          const show = open.includes(c.k) || matched.includes(c.id);
          return (
            <button key={c.k} aria-label={show?`${c.kind==='p'?t('صورة','Photo'):t('كلمة','Word')}: ${c.w.art} ${c.w.de}${matched.includes(c.id)?' '+t('متطابق','matched'):''}`:t(`كارت مقفول ${cards.indexOf(c)+1}`,`Hidden card ${cards.indexOf(c)+1}`)} aria-pressed={show} disabled={matched.includes(c.id)||open.includes(c.k)||open.length===2} onClick={() => tap(c)} className={`flex min-h-28 items-center justify-center overflow-hidden rounded-xl border ${matched.includes(c.id) ? 'border-good' : 'border-line'} ${show ? 'bg-card' : 'bg-accent'}`}>
              {show ? (c.kind === 'p' ? <Photo w={c.w} /> : <span dir="ltr" lang="de" className="de min-w-0 [overflow-wrap:anywhere] p-2 text-center text-base font-semibold">{c.w.art} {c.w.de}</span>) : <span className="de text-2xl text-accent-ink">?</span>}
            </button>
          );
        })}
      </div>
      {pair&&<div role="status" className="space-y-3 rounded-xl border border-line bg-card p-4"><p>{pairMatches?t('الزوج متطابق.','The pair matches.'):t('مش نفس الكلمة. بص عليهم قبل ما تكمل.','Not a match. Compare the cards before continuing.')}</p><button onClick={continuePair} className="w-full rounded-full bg-accent px-5 py-3 font-bold text-accent-ink">{t('كمل','Continue')}</button></div>}
    </div>
  );
}

function Done({ title, line, xp, again }: { title: string; line: string; xp: number; again?: () => void }) {
  const t = useT();
  return (
    <div className="mx-auto max-w-md space-y-4 rounded-2xl border border-line bg-card p-8 text-center">
      <h2 className="ar-title text-3xl font-bold">{title}</h2>
      <p className="num text-xl">{line}</p>
      <p className="num font-bold text-accent">+{xp} XP</p>
      <div className="flex justify-center gap-3">
        {again && <button onClick={again} className="rounded-full bg-accent px-5 py-2.5 font-bold text-accent-ink">{t('جولة تانية', 'Play again')}</button>}
        <Link href="/games/" className="rounded-full border border-line px-5 py-2.5 font-bold">{t('الألعاب', 'Games')}</Link>
      </div>
    </div>
  );
}
