'use client';
import Speaker from './Speaker';
import { Word, img } from '@/lib/data';
import { speak } from '@/lib/speak';
import { Gloss, PluralText } from './L';

export default function WordCard({ w }: { w: Word }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img(w)} alt={`${w.art} ${w.de}`} className="photo" loading="lazy" width={480} height={360} />
      <div className="space-y-1 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="de text-2xl font-semibold leading-tight" lang="de">
            <span className="text-accent">{w.art}</span> {w.de}
          </h3>
          <button onClick={() => speak(`${w.art} ${w.de}`)} aria-label={`${w.de}`} className="shrink-0 rounded-full border border-line px-3 py-1 text-sm hover:bg-paper"><Speaker /></button>
        </div>
        <p className="ar-title text-xl text-ink"><Gloss w={w} /></p>
        {w.plural !== '' && <p className="de text-sm text-muted" lang="de"><PluralText w={w} /></p>}
      </div>
    </article>
  );
}
