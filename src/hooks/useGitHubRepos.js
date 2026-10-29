import { useState, useEffect } from "react";

const GITHUB_USER = "rezwanulislamrimel";
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`;

/* Map GitHub language names to a short color token */
const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

/**
 * Fetch public repos, filter out forks & low-signal repos,
 * sort by stars → pushed date, and return the top N.
 */
export function useGitHubRepos(limit = 6) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error(
            res.status === 403
              ? "GitHub API rate limit reached. Please try again later."
              : `GitHub API error (${res.status})`
          );
        }

        const data = await res.json();

        if (cancelled) return;

        /* ---------- filter & rank ---------- */
        const filtered = data
          .filter((r) => !r.fork) // skip forks
          .filter((r) => !r.archived) // skip archived
          .filter((r) => r.description || r.stargazers_count > 0) // has desc or stars
          .map((r) => ({
            id: r.id,
            name: r.name,
            fullName: r.full_name,
            description: r.description || "No description provided.",
            language: r.language,
            languageColor: LANG_COLORS[r.language] || "#8b949e",
            stars: r.stargazers_count,
            forks: r.forks_count,
            url: r.html_url,
            homepage: r.homepage,
            updatedAt: r.pushed_at,
            topics: r.topics || [],
          }));

        /* Sort: starred repos first, then by most recently pushed */
        filtered.sort((a, b) => {
          if (b.stars !== a.stars) return b.stars - a.stars;
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });

        setRepos(filtered.slice(0, limit));
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { repos, loading, error };
}
