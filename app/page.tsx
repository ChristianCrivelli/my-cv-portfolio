import Link from 'next/link';
import { projects } from './data/projects';
import { ProjectCard } from './components/project-card';
import { SkillsRadar } from './components/skills-radar';
import { EducationTimeline } from './components/education-timeline';
import { GithubActivity } from './components/github-activity';
import { ExperienceTimeline } from './components/experience-timeline';
import { Languages } from './components/languages';

export default function Page() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section>
        <h1 className="text-3xl font-semibold">Christian Crivelli</h1>
        <p className="mt-2 text-neutral-600">
          Business Analytics Student | Systems Architect | Data for Good
        </p>
        <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
          ● Ready to work starting Summer 2027!
        </span>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-medium">Featured Projects</h2>
          <Link href="/projects" className="text-sm underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* GitHub Activity */}
      <GithubActivity username="ChristianCrivelli" />

      {/* Work Experience */}
      <ExperienceTimeline />

      {/* Education */}
      <EducationTimeline />

      {/* Skills */}
      <SkillsRadar />

      {/* Languages */}
      <Languages />
    </div>
  );
}