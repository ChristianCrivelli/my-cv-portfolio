import { getLastUpdated } from '../lib/last-updated';

export function Footer() {
  const lastUpdated = getLastUpdated();
  return (
    <footer className="mt-16 border-t pt-6 text-xs text-neutral-500">
      <p>Last updated {lastUpdated}</p>
    </footer>
  );
}