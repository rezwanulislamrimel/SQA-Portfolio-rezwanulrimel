import React, { useState } from "react";
import { Github, Star, GitFork, ExternalLink, Loader2, AlertTriangle, X, Target, Wrench, TrendingUp, ChevronRight } from "lucide-react";
import { C, FONT_MONO, FONT_HEAD } from "../../constants/theme";
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
  const [caseStudy, setCaseStudy] = useState(null);

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
            style={{ borderRadius: 8, padding: 22, display: "flex", flexDirection: "column" }}
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
            <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
              {proj.desc}
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: proj.caseStudy ? 14 : 0 }}>
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
            {proj.caseStudy && (
              <button
                onClick={() => setCaseStudy(proj)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "transparent",
                  border: 0,
                  color: C.accent,
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: FONT_MONO,
                  cursor: "pointer",
                  padding: 0,
                  transition: "gap 0.15s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = "10px"; }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = "6px"; }}
              >
                View Case Study <ChevronRight size={13} />
              </button>
            )}
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

      {/* ── Case Study Modal ── */}
      {caseStudy && (
        <>
          <div
            onClick={() => setCaseStudy(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(6px)",
              zIndex: 999,
            }}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(560px, 92vw)",
              maxHeight: "85vh",
              overflowY: "auto",
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              zIndex: 1000,
              animation: "fadeUp 0.25s cubic-bezier(.2,.7,.3,1) both",
            }}
          >
            {/* Modal header */}
            <div
              style={{
                padding: "22px 24px 18px",
                borderBottom: `1px solid ${C.border}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 10.5,
                    color: C.accent,
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  📋 CASE STUDY
                </span>
                <h3
                  style={{
                    fontFamily: FONT_HEAD,
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {caseStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setCaseStudy(null)}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  background: "transparent",
                  color: C.textMuted,
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal body */}
            <div style={{ padding: "22px 24px 28px" }}>
              {[
                {
                  icon: Target,
                  label: "THE PROBLEM",
                  color: "#ef4444",
                  text: caseStudy.caseStudy.problem,
                },
                {
                  icon: Wrench,
                  label: "APPROACH",
                  color: "#3b82f6",
                  text: caseStudy.caseStudy.approach,
                },
                {
                  icon: TrendingUp,
                  label: "RESULTS",
                  color: "#22c55e",
                  text: caseStudy.caseStudy.results,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} style={{ marginBottom: idx < 2 ? 22 : 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: `${item.color}14`,
                          border: `1px solid ${item.color}33`,
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <Icon size={14} color={item.color} />
                      </div>
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 11,
                          color: item.color,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <p
                      style={{
                        color: C.textMuted,
                        fontSize: 13.5,
                        lineHeight: 1.7,
                        margin: 0,
                        paddingLeft: 38,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}

              {/* Tech used */}
              <div
                style={{
                  marginTop: 22,
                  paddingLeft: 38,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                {caseStudy.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 11,
                      background: `${C.accent}12`,
                      border: `1px solid ${C.accent}30`,
                      color: C.accent,
                      padding: "3px 10px",
                      borderRadius: 5,
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ProjectsSection;
