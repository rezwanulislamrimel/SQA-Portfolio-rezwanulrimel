import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, BookOpen, ArrowRight, Tag } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { ALL_BLOG_POSTS, BLOG_CATEGORIES } from "../../data/blogData";
import { SectionTag } from "../common/SectionTag";
import { BlogReaderModal } from "../common/BlogReaderModal";

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [readingPost, setReadingPost] = useState(null);

  const filteredPosts = ALL_BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="blog"
      style={{
        padding: "80px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        scrollMarginTop: 64,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14, marginBottom: 28 }}>
        <div>
          <SectionTag>// blog.articles</SectionTag>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)", fontWeight: 800, margin: "0 0 10px 0", color: "#FFFFFF" }}>
            Software Quality & Automation Insights
          </h2>
          <p style={{ fontSize: 15, color: C.textMuted, maxWidth: 580, margin: 0, lineHeight: 1.6 }}>
            Practical write-ups on Playwright automation frameworks, Postman API testing in CI/CD, K6 stress testing, and zero-defect QA methodologies.
          </p>
        </div>

        <Link
          to="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: C.pass,
            textDecoration: "none",
            fontSize: 13.5,
            fontWeight: 700,
            fontFamily: FONT_MONO,
            padding: "8px 16px",
            borderRadius: 6,
            background: "rgba(0, 245, 212, 0.08)",
            border: `1px solid ${C.pass}44`,
            transition: "all 0.15s ease",
          }}
        >
          View Full Knowledge Base ({ALL_BLOG_POSTS.length} Articles) <ArrowRight size={15} />
        </Link>
      </div>

      {/* Search & Filter Bar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
        {/* Search */}
        <div style={{ position: "relative", maxWidth: 460 }}>
          <Search size={16} color={C.textFaint} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
          <input
            type="text"
            placeholder="Search articles by keyword, tool (e.g. Playwright, K6, Jira)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "11px 14px 11px 40px",
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              background: C.surface,
              color: "#FFFFFF",
              fontSize: 13.5,
              outline: "none",
            }}
          />
        </div>

        {/* Categories */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {BLOG_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? C.pass : C.surface,
                color: selectedCategory === cat ? "#0B132B" : C.textMuted,
                border: `1px solid ${selectedCategory === cat ? C.pass : C.border}`,
                borderRadius: 6,
                padding: "6px 12px",
                fontSize: 12,
                fontFamily: FONT_MONO,
                cursor: "pointer",
                fontWeight: selectedCategory === cat ? 700 : 500,
                transition: "all 0.15s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 18,
        }}
      >
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="row-card"
            style={{
              borderRadius: 10,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
            onClick={() => setReadingPost(post)}
          >
            <div>
              {/* Category & Date */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
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

              {/* Title */}
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  marginBottom: 10,
                  lineHeight: 1.35,
                  color: "#FFFFFF",
                }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p
                style={{
                  fontSize: 13.5,
                  color: C.textMuted,
                  lineHeight: 1.6,
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
              {/* Tags */}
              {post.tags && (
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 14 }}>
                  {post.tags.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 10.5,
                        background: "rgba(255, 255, 255, 0.04)",
                        border: `1px solid ${C.border}`,
                        padding: "2px 6px",
                        borderRadius: 4,
                        color: C.textFaint,
                      }}
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Button */}
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

      {filteredPosts.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px", color: C.textMuted, fontFamily: FONT_MONO }}>
          No articles found matching "{searchQuery}". Try searching for 'Playwright', 'API', or 'Performance'.
        </div>
      )}

      {/* Reader Modal */}
      {readingPost && <BlogReaderModal post={readingPost} onClose={() => setReadingPost(null)} />}
    </section>
  );
}

export default BlogSection;
