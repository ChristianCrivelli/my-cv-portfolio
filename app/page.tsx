import Link from 'next/link';
import { projects } from './data/projects';
import { ProjectCard } from './components/project-card';
import { SkillsRadar } from './components/skills-radar';
import { EducationTimeline } from './components/education-timeline';
import { GithubActivity } from './components/github-activity';
import { ExperienceTimeline } from './components/experience-timeline';
import { LeadershipTimeline } from './components/leadership-timeline';
import { JourneyMap } from './components/journey-map-loader';
import { Languages } from './components/languages';
import { getAvailabilityBadge } from './lib/availability';

export default function Page() {
  const featured = projects.filter((p) => p.featured);
  const badge = getAvailabilityBadge();

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section>
        <h1 className="text-3xl font-semibold">Christian Crivelli</h1>
        <p className="mt-2 text-neutral-600">
          Business Analytics Student | Systems Architect | Data for Good
        </p>
        <span
          className={`mt-3 inline-block rounded-full px-3 py-1 text-sm ${badge.className}`}
        >
          ● {badge.label}
        </span>
        <p className="mt-4 max-w-2xl text-neutral-700">
          I&apos;m a Portugal-born Italo-Brazilian, currently completing a Master&apos;s in
          Business Intelligence &amp; Smart Services at Maastricht University
          after a Bachelor&apos;s in Business Analytics. I like working where
          data meets real-world problems — civic governance, public health,
          sports, and beyond — and outside of coursework I sit on the board
          of Mukti Sanctuary, an animal rescue non-profit in Lisbon.
          I&apos;m looking for opportunities to grow my skills while
          discovering new places, and hopefully make a positive contribution
          along the way.
        </p>
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

      {/* Leadership */}
      <LeadershipTimeline />

      {/* Education */}
      <EducationTimeline />

      {/* Skills */}
      <SkillsRadar />

      {/* Languages */}
      <Languages />

      {/* Journey Map */}
      <JourneyMap />
    </div>
  );
}