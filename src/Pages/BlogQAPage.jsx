import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BookOpen,
  ArrowLeft,
  Grid3X3,
  LayoutGrid,
  List,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Github,
  Linkedin,
  Tag,
  CheckCircle2,
} from "lucide-react";
import { C, FONT_MONO, FONT_SANS, FONT_HEAD } from "../constants/theme";
import { ALL_BLOG_POSTS, BLOG_CATEGORIES } from "../data/blogData";
import { PERSONAL_INFO } from "../data/portfolioData";
import { BlogReaderModal } from "../components/common/BlogReaderModal";
import { SQABackground } from "../components/common/SQABackground";

export default function BlogQAPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid-3"); // 'grid-3' | 'grid-2' | 'list'
  const [readingPost, setReadingPost] = useState(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = ALL_BLOG_POSTS.filter((item) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(q)));
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ background: C.bg, color: C.textMain, fontFamily: FONT_SANS, minHeight: "100vh", position: "relative" }}>
      {/* SQA Background Animation */}
      <SQABackground />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
        * {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
        }
        h1, h2, h3, h4 {
          font-family: ${FONT_HEAD};
          color: #FFFFFF;
        }
        .row-card {
          background: ${C.surface};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid ${C.border};
          border-left: 3px solid transparent;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          transition: border-color .18s ease, background .18s ease, transform .18s ease;
        }
        .row-card:hover {
          border-color: ${C.borderHi};
          background: ${C.surfaceAlt};
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
        }
        .status-strip-pass {
          border-left-color: ${C.pass};
        }
        .cta-primary {
          transition: transform .15s ease, box-shadow .15s ease;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 245, 212, 0.3);
        }
      `}</style>

      {/* Top Navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          background: "rgba(11, 19, 43, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: C.pass,
              textDecoration: "none",
              fontSize: 13.5,
              fontWeight: 700,
              fontFamily: FONT_MONO,
            }}
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: C.textMuted, display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: 13 }}
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: C.info, display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: 13, fontWeight: 600 }}
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 40px" }}>
          {/* Stats Bar */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 14, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 12,
                color: C.pass,
                background: "rgba(0, 245, 212, 0.1)",
                border: `1px solid ${C.pass}44`,
                padding: "5px 12px",
                borderRadius: 20,
              }}
            >
              📚 <strong>{ALL_BLOG_POSTS.length}</strong> Deep-Dive Guides
            </div>
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 12,
                color: C.info,
                background: "rgba(56, 189, 248, 0.1)",
                border: `1px solid ${C.info}44`,
                padding: "5px 12px",
                borderRadius: 20,
              }}
            >
              🎯 <strong>{BLOG_CATEGORIES.length - 1}</strong> Specialized Categories
            </div>
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 12,
                color: C.warn,
                background: "rgba(56, 189, 248, 0.08)",
                border: `1px solid ${C.border}`,
                padding: "5px 12px",
                borderRadius: 20,
              }}
            >
              🛡️ Zero Fluff · Production-Grade SQA
            </div>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.18,
              margin: "0 0 16px 0",
              color: "#FFFFFF",
              textShadow: "0 3px 15px rgba(0, 0, 0, 0.5)",
            }}
          >
            Software Testing & Automation Knowledge Base
          </h1>

          <p style={{ color: "#E2E8F0", fontSize: 16, lineHeight: 1.7, margin: "0 auto 28px", maxWidth: 660 }}>
            Practical engineering insights, automation architecture patterns, API testing frameworks, and battle-tested defect elimination techniques by Rezwanul Rimel.
          </p>

          {/* Search Bar */}
          <div style={{ position: "relative", maxWidth: 540, margin: "0 auto" }}>
            <Search
              size={18}
              color={C.textMuted}
              style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)" }}
            />
            <input
              type="text"
              placeholder="Search guides (e.g., Playwright, K6, Postman, SQL, Jira, Security)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(28, 37, 65, 0.9)",
                border: `1px solid ${C.border}`,
                borderRadius: 50,
                padding: "14px 20px 14px 50px",
                color: "#FFFFFF",
                fontSize: 14.5,
                outline: "none",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
        </div>

        {/* Filters and View Controls Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 32,
            paddingBottom: 16,
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", maxWidth: "100%", paddingBottom: 6 }}>
            {BLOG_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? C.pass : "rgba(28, 37, 65, 0.8)",
                  color: selectedCategory === cat ? "#0B132B" : C.textMuted,
                  border: `1px solid ${selectedCategory === cat ? C.pass : C.border}`,
                  borderRadius: 8,
                  padding: "7px 14px",
                  fontSize: 12.5,
                  fontFamily: FONT_MONO,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontWeight: selectedCategory === cat ? 700 : 500,
                  transition: "all 0.15s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count & View Mode Switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 13, color: C.textFaint, fontFamily: FONT_MONO }}>
              Showing <strong>{filteredPosts.length}</strong> of {ALL_BLOG_POSTS.length}
            </span>

            <div
              style={{
                display: "flex",
                background: "rgba(28, 37, 65, 0.8)",
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: 3,
                gap: 4,
              }}
            >
              <button
                onClick={() => setViewMode("grid-3")}
                title="3-Column Grid"
                style={{
                  background: viewMode === "grid-3" ? C.pass : "transparent",
                  color: viewMode === "grid-3" ? "#0B132B" : C.textMuted,
                  border: 0,
                  borderRadius: 6,
                  width: 32,
                  height: 32,
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                }}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode("grid-2")}
                title="2-Column Grid"
                style={{
                  background: viewMode === "grid-2" ? C.pass : "transparent",
                  color: viewMode === "grid-2" ? "#0B132B" : C.textMuted,
                  border: 0,
                  borderRadius: 6,
                  width: 32,
                  height: 32,
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                }}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                title="List View"
                style={{
                  background: viewMode === "list" ? C.pass : "transparent",
                  color: viewMode === "list" ? "#0B132B" : C.textMuted,
                  border: 0,
                  borderRadius: 6,
                  width: 32,
                  height: 32,
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                }}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Display */}
        {viewMode === "list" ? (
          /* List View */
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="row-card"
                style={{
                  padding: "24px 28px",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
                onClick={() => setReadingPost(post)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 11,
                      color: post.tagColor || C.pass,
                      border: `1px solid ${post.tagColor || C.pass}44`,
                      background: "rgba(0, 245, 212, 0.08)",
                      padding: "3px 9px",
                      borderRadius: 4,
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.textFaint }}>
                    {post.date} · {post.readTime}
                  </span>
                </div>

                <h2 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "0 0 8px 0", color: "#FFFFFF" }}>
                  {post.title}
                </h2>

                <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6, margin: "0 0 14px 0" }}>
                  {post.excerpt}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {post.tags &&
                      post.tags.map((t, i) => (
                        <span key={i} style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.textFaint }}>
                          #{t}
                        </span>
                      ))}
                  </div>
                  <span style={{ color: C.pass, fontSize: 13, fontWeight: 700, fontFamily: FONT_MONO, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Read Full Guide <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Grid View (2-col or 3-col) */
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                viewMode === "grid-2"
                  ? "repeat(auto-fit, minmax(420px, 1fr))"
                  : "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="row-card"
                style={{
                  padding: 24,
                  borderRadius: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={() => setReadingPost(post)}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, flexWrap: "wrap", gap: 6 }}>
                    <span
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 11,
                        color: post.tagColor || C.pass,
                        border: `1px solid ${post.tagColor || C.pass}44`,
                        background: "rgba(0, 245, 212, 0.08)",
                        padding: "3px 9px",
                        borderRadius: 4,
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 11.5, color: C.textFaint }}>
                      {post.date} · {post.readTime}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 17.5,
                      fontWeight: 700,
                      marginBottom: 10,
                      lineHeight: 1.35,
                      color: "#FFFFFF",
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 13.8,
                      color: C.textMuted,
                      lineHeight: 1.65,
                      margin: "0 0 16px 0",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  {post.tags && (
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                      {post.tags.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: 10.5,
                            background: "rgba(255, 255, 255, 0.04)",
                            border: `1px solid ${C.border}`,
                            padding: "2px 7px",
                            borderRadius: 4,
                            color: C.textFaint,
                          }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      color: post.tagColor || C.pass,
                      fontSize: 13,
                      fontWeight: 700,
                      fontFamily: FONT_MONO,
                    }}
                  >
                    Read full article <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: C.textMuted, fontFamily: FONT_MONO }}>
            <BookOpen size={40} color={C.textFaint} style={{ marginBottom: 14 }} />
            <div style={{ fontSize: 16, color: C.textMain, fontWeight: 700, marginBottom: 6 }}>
              No guides found for "{searchTerm}"
            </div>
            <div>Try searching with keywords like 'Playwright', 'K6', 'API', 'SQL', or 'Jira'.</div>
          </div>
        )}
      </main>

      {/* Reader Modal */}
      {readingPost && <BlogReaderModal post={readingPost} onClose={() => setReadingPost(null)} />}

      {/* Footer */}
      <footer
        style={{
          padding: "36px 24px",
          borderTop: `1px solid ${C.border}`,
          textAlign: "center",
          fontSize: 13,
          color: C.textFaint,
          background: "rgba(11, 19, 43, 0.95)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: 8, color: C.textMuted }}>
          Rezwanul Rimel — SQA Engineer & Automation Specialist
        </div>
        <div>&copy; 2026 Rezwanul Rimel. All rights reserved.</div>
      </footer>
    </div>
  );
}