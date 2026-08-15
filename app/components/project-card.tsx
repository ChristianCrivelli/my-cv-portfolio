import Link from 'next/link';
import { Project } from '../data/projects';

const statusStyles: Record<Project['status'], string> = {
  live: 'bg-green-100 text-green-800',
  'in-progress': 'bg-amber-100 text-amber-800',
  archived: 'bg-neutral-100 text-neutral-500',
};

const statusLabel: Record<Project['status'], string> = {
  live: 'Live',
  'in-progress': 'In Progress',
  archived: 'Archived',
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block rounded-lg border p-4 transition hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{project.title}</h3>
        <span className={`rounded px-2 py-0.5 text-xs ${statusStyles[project.status]}`}>
          {statusLabel[project.status]}
        </span>
      </div>
      <p className="mt-2 text-sm text-neutral-600">{project.oneLiner}</p>
      <div className="mt-3 flex gap-3 text-sm">
        {project.liveUrl && <span className="underline">Live demo</span>}
        {project.repoUrl && <span className="underline">Code</span>}
      </div>
    </Link>
  );
}