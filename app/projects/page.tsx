import { projects } from '../data/projects';
import { ProjectCard } from '../components/project-card';

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold">Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}