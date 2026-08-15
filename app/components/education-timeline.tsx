import { education } from '../data/education';

function formatRange(start: string, end?: string) {
  const fmt = (d: string) =>
    new Date(`${d}-01`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return `${fmt(start)} — ${end ? fmt(end) : 'Present'}`;
}

export function EducationTimeline() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-medium">Education</h2>
      <div className="space-y-8">
        {education.map((entry, i) => (
          <div key={i} className="border-l-2 pl-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium">{entry.institution}</h3>
              <span className="text-sm text-neutral-500">
                {formatRange(entry.startDate, entry.endDate)}
              </span>
            </div>
            <p className="text-sm text-neutral-700">{entry.degree}</p>
            {entry.status === 'in-progress' && (
              <span className="mt-1 inline-block rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                In Progress
              </span>
            )}
            {entry.skills && entry.skills.length > 0 && (
              <p className="mt-2 text-xs text-neutral-500">
                Skills: {entry.skills.join(', ')}
              </p>
            )}
            {entry.relevantCoursework && entry.relevantCoursework.length > 0 && (
              <p className="mt-1 text-xs text-neutral-500">
                Relevant coursework: {entry.relevantCoursework.join(', ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}