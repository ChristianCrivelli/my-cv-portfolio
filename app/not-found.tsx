import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-col items-start">
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        404 — Page Not Found
      </h1>
      <p className="mb-6 text-neutral-600">
        This page doesn&apos;t exist — maybe it moved, or maybe it&apos;s a
        project idea that hasn&apos;t been built yet.
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