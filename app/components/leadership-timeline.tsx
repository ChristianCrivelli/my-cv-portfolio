import { leadership } from '../data/leadership';

function formatRange(start: string, end?: string) {
  const fmt = (d: string) =>
    new Date(`${d}-01`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return `${fmt(start)} — ${end ? fmt(end) : 'Present'}`;
}

export function LeadershipTimeline() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-medium">Leadership</h2>
      <div className="space-y-8">
        {leadership.map((entry, i) => (
          <div key={i} className="border-l-2 pl-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium">
                {entry.role} · {entry.organization}
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
            {entry.url && (
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm underline"
              >
                {entry.organization} website
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
