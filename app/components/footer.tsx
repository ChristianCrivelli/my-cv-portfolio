import { getLastUpdated } from '../lib/last-updated';

export default function Footer() {
  const lastUpdated = getLastUpdated();
  return (
    <footer className="mt-16 border-t pt-6 text-xs text-neutral-500">
      <p>Last updated {lastUpdated}</p>
      <a
        href="https://www.linkedin.com/in/christian-crivelli-120391231/"
        target="_blank"
        className="mt-2 inline-block underline"
      >
        LinkedIn
      </a>
    </footer>
  );
}