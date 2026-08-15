import { execSync } from 'child_process';

export function getLastUpdated(): string {
  try {
    const isoDate = execSync('git log -1 --format=%cI').toString().trim();
    return new Date(isoDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    // Fallback for environments without git history (e.g. some CI contexts)
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}