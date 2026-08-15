import { experience } from '../data/experience';

function formatRange(start: string, end?: string) {
  const fmt = (d: string) =>
    new Date(`${d}-01`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return `${fmt(start)} — ${end ? fmt(end) : 'Present'}`;
}

export function ExperienceTimeline() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-medium">Work Experience</h2>
      <div className="space-y-8">
        {experience.map((entry, i) => (
          <div key={i} className="border-l-2 pl-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium">
                {entry.role} · {entry.company}
              </h3>
              <span className="text-sm text-neutral-500">
                {formatRange(entry.startDate, entry.endDate)}
              </span>
            </div>
            {entry.location && (
              <p className="text-sm text-neutral-500">{entry.location}</p>
            )}
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              {entry.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}