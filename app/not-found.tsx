import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-col items-start">
      <span className="font-mono text-xs text-neutral-400">
        SELECT * FROM pages WHERE path = &apos;current_url&apos;;
      </span>
      <h1 className="mb-4 mt-2 text-2xl font-semibold tracking-tighter">
        404 — 0 rows returned
      </h1>
      <p className="mb-6 text-neutral-600">
        This page doesn&apos;t exist — maybe it moved, or maybe it&apos;s a
        project idea that hasn&apos;t shipped yet.
      </p>
      <div className="flex gap-4 text-sm">
        <Link href="/" className="underline">
          ← Back home
        </Link>
        <Link href="/projects" className="underline">
          View projects
        </Link>
      </div>
    </section>
  );
}
