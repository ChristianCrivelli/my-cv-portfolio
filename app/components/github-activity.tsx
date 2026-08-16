export function GithubActivity({ username }: { username: string }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-medium">GitHub Activity</h2>
      <img
        src={`https://ghchart.rshah.org/${username}`}
        alt={`${username}'s GitHub contribution graph`}
        className="w-full rounded border"
      />
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        className="mt-2 inline-block text-sm underline"
      >
        View full profile →
      </a>
    </section>
  );
}