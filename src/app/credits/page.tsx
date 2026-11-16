import { words } from '@/lib/data';

export const metadata = { title: 'حقوق الصور – Deutschy' };

export default function Credits() {
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">حقوق الصور</h1>
      <p className="text-muted">كل الصور من Wikimedia Commons. كل صورة ليها صفحتها الأصلية وترخيصها في الجدول.</p>
      <div className="overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full text-start text-sm" dir="ltr">
          <thead><tr className="border-b border-line text-left text-muted"><th className="p-3">Word</th><th className="p-3">File</th><th className="p-3">Author</th><th className="p-3">License</th></tr></thead>
          <tbody>
            {words.map((w) => (
              <tr key={w.id} className="border-b border-line last:border-0">
                <td className="p-3 de">{w.art} {w.de}</td>
                <td className="p-3"><a className="underline" href={w.photo.commons} target="_blank" rel="noreferrer">{w.photo.file}</a></td>
                <td className="p-3">{w.photo.author || '—'}</td>
                <td className="p-3">{w.photo.license}{'modified' in w.photo && <span className="block text-xs text-muted">Cropped; original linked.</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
