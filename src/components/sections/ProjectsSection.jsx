import React from "react";
import { Github, Star, GitFork, ExternalLink, Loader2, AlertTriangle } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { PROJECTS, LOCAL_CLIENTS, PERSONAL_INFO } from "../../data/portfolioData";
import { SectionTag } from "../common/SectionTag";
import { StatusDot } from "../common/StatusDot";
import { ClientBadge } from "../common/ClientBadge";
import { useGitHubRepos } from "../../hooks/useGitHubRepos";

const GITHUB_USER = "rezwanulislamrimel";

/* ── tiny helpers ── */
function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

/* ── skeleton loader card ── */
function SkeletonCard() {
  return (
    <div
      className="row-card"
      style={{
        borderRadius: 8,
        padding: 22,
        minHeight: 170,
        animation: "pulse 1.5s ease-in-out infinite",
      }}
    >
      <div
        style={{
          width: "40%",
          height: 12,
          background: C.surfaceAlt,
          borderRadius: 4,
          marginBottom: 14,
        }}
      />
      <div
        style={{
          width: "80%",
          height: 16,
          background: C.surfaceAlt,
          borderRadius: 4,
          marginBottom: 10,
        }}
      />
      <div
        style={{
          width: "100%",
          height: 12,
          background: C.surfaceAlt,
          borderRadius: 4,
          marginBottom: 6,
        }}
      />
      <div
        style={{
          width: "65%",
          height: 12,
          background: C.surfaceAlt,
          borderRadius: 4,
          marginBottom: 18,
        }}
      />
      <div style={{ display: "flex", gap: 6 }}>
        {[1, 2, 3].map((k) => (
          <div
            key={k}
            style={{
              width: 52,
              height: 18,
              background: C.surfaceAlt,
              borderRadius: 4,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── GitHub Repo Card ── */
function GitHubRepoCard({ repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="row-card"
        style={{
          borderRadius: 8,
          padding: 22,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderLeft: `3px solid ${repo.languageColor}`,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = `0 6px 20px rgba(0,0,0,0.3)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Top row: language + stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          {repo.language && (
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 11,
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: repo.languageColor,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: repo.languageColor,
                  display: "inline-block",
                }}
              />
              {repo.language}
            </span>
          )}

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {repo.stars > 0 && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  color: C.warn,
                }}
              >
                <Star size={12} /> {repo.stars}
              </span>
            )}
            {repo.forks > 0 && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  color: C.textFaint,
                }}
              >
                <GitFork size={12} /> {repo.forks}
              </span>
            )}
          </div>
        </div>

        {/* Repo name */}
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: C.textMain }}>
          {repo.name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: 13.5,
            color: C.textMuted,
            lineHeight: 1.6,
            marginBottom: 14,
            flex: 1,
          }}
        >
          {repo.description}
        </p>

        {/* Topics / tags */}
        {repo.topics.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
            {repo.topics.slice(0, 5).map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 10.5,
                  background: C.passDim,
                  border: `1px solid ${C.borderHi}`,
                  padding: "3px 8px",
                  borderRadius: 4,
                  color: C.pass,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Footer: updated + link */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 10.5,
              color: C.textFaint,
            }}
          >
            updated {timeAgo(repo.updatedAt)}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontFamily: FONT_MONO,
              fontSize: 10.5,
              color: C.pass,
            }}
          >
            <ExternalLink size={11} /> View on GitHub
          </span>
        </div>
      </div>
    </a>
  );
}

/* ══════════════════════════════════════════════════════════
   PROJECTS SECTION
══════════════════════════════════════════════════════════ */
export function ProjectsSection() {
  const clientColors = [C.pass, C.warn, C.fail, C.info, C.pass];
  const { repos, loading, error } = useGitHubRepos(8);

  return (
    <section
      id="projects"
      style={{
        padding: "80px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        scrollMarginTop: 64,
      }}
    >
      {/* ── Featured Projects (hardcoded) ── */}
      <SectionTag>// projects.log</SectionTag>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 36,
        }}
      >
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, margin: 0 }}>Projects & work</h2>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            textDecoration: "none",
            color: C.pass,
            fontSize: 13,
            fontWeight: 600,
            fontFamily: FONT_MONO,
          }}
        >
          <Github size={15} />
          Visit GitHub for all projects →
        </a>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 14,
          marginBottom: 56,
        }}
      >
        {PROJECTS.map((proj, i) => (
          <div
            key={i}
            className="row-card status-strip-pass"
            style={{ borderRadius: 8, padding: 22 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  color: C.pass,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <StatusDot color={C.pass} /> {proj.tag}
              </span>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{proj.title}</h3>
            <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.6, marginBottom: 16 }}>
              {proj.desc}
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {proj.tech.map((t, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 10.5,
                    background: C.surfaceAlt,
                    border: `1px solid ${C.border}`,
                    padding: "3px 8px",
                    borderRadius: 4,
                    color: C.textMuted,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── GitHub Repos (auto-fetched) ── */}
      <SectionTag>// github.auto_fetch()</SectionTag>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 28,
        }}
      >
        <div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, margin: 0 }}>
            <Github size={22} style={{ verticalAlign: "middle", marginRight: 10 }} />
            GitHub Repositories
          </h2>
          <p
            style={{
              fontSize: 13,
              color: C.textFaint,
              fontFamily: FONT_MONO,
              marginTop: 6,
            }}
          >
            auto-synced from github.com/{GITHUB_USER}
          </p>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 14,
            marginBottom: 56,
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((k) => (
            <SkeletonCard key={k} />
          ))}
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: C.failDim,
            border: `1px solid ${C.fail}`,
            borderRadius: 8,
            padding: "16px 20px",
            marginBottom: 56,
            fontFamily: FONT_MONO,
            fontSize: 13,
            color: C.fail,
          }}
        >
          <AlertTriangle size={18} />
          <span>{error}</span>
          <span style={{ color: C.textFaint, marginLeft: "auto" }}>
            Showing featured projects above ↑
          </span>
        </div>
      )}

      {/* Repos grid */}
      {!loading && !error && repos.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 14,
            marginBottom: 56,
          }}
        >
          {repos.map((repo) => (
            <GitHubRepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}

      {/* ── Local & Freelance Network ── */}
      <div>
        <SectionTag>// local & freelance network</SectionTag>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          {LOCAL_CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="row-card"
              style={{
                borderRadius: 8,
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <ClientBadge initials={client.initials} color={clientColors[idx % clientColors.length]} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{client.name}</div>
                <div style={{ fontSize: 11.5, color: C.textFaint, marginTop: 2 }}>
                  {client.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pulse animation for skeletons */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}

export default ProjectsSection;
