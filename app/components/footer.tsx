import { getLastUpdated } from '../lib/last-updated';

export default function Footer() {
  const lastUpdated = getLastUpdated();
  return (
    <footer className="mt-16 border-t pt-6 text-xs text-neutral-500">
      <p>Last updated {lastUpdated}</p>
      <nav aria-label="Social links" className="mt-2 flex gap-4">
        <a
          href="https://github.com/ChristianCrivelli"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block underline"
        >
          GitHub
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href="https://www.linkedin.com/in/christian-crivelli-120391231/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block underline"
        >
          LinkedIn
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </nav>
    </footer>
  );
}
