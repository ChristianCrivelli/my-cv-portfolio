import { languages } from '../data/languages';

export function Languages() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-medium">Languages</h2>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="rounded border px-3 py-1.5 text-sm"
          >
            <span className="font-medium">{lang.name}</span>
            <span className="text-neutral-500"> — {lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}