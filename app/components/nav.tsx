import Link from 'next/link';

export function Navbar() {
  return (
    <nav aria-label="Primary" className="flex gap-4 py-4 text-sm">
      <Link href="/" className="underline">
        Home
      </Link>
      <Link href="/projects" className="underline">
        Projects
      </Link>
    </nav>
  );
}
