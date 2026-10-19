import React, { useState } from "react";
import { C, FONT_MONO } from "../../constants/theme";
import { BLOG_POSTS } from "../../data/portfolioData";
import { SectionTag } from "../common/SectionTag";

export function BlogSection() {
  const [openPost, setOpenPost] = useState(null);

  return (
    <section
      id="blog"
      style={{
        padding: "80px 24px",
        maxWidth: 900,
        margin: "0 auto",
        scrollMarginTop: 64,
      }}
    >
      <SectionTag>// blog.log</SectionTag>
      <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: 8 }}>Notes on testing</h2>
      <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 36, maxWidth: 520, lineHeight: 1.6 }}>
        Short write-ups on manual testing, automation, and where AI tools actually fit into QA work.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {BLOG_POSTS.map((post) => {
          const isOpen = openPost === post.id;
          return (
            <div key={post.id} className="row-card" style={{ borderRadius: 8, overflow: "hidden" }}>
              <button
                onClick={() => setOpenPost(isOpen ? null : post.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  padding: 22,
                  color: C.textMain,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 11,
                      color: post.tagColor,
                      border: `1px solid ${post.tagColor}55`,
                      padding: "3px 9px",
                      borderRadius: 4,
                    }}
                  >
                    {post.tag}
                  </span>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 11.5, color: C.textFaint }}>
                    {post.date} · {post.readTime} read
                  </span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700 }}>{post.title}</h3>
                <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>
                  {post.excerpt}
                </p>
                <span style={{ fontSize: 12.5, color: post.tagColor, fontWeight: 600, marginTop: 4 }}>
                  {isOpen ? "Collapse ↑" : "Read post ↓"}
                </span>
              </button>

              {isOpen && (
                <div
                  className="blog-body-enter"
                  style={{ padding: "0 22px 26px", borderTop: `1px solid ${C.border}` }}
                >
                  <div style={{ paddingTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                    {post.body.map((para, k) => (
                      <p key={k} style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.75, margin: 0 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BlogSection;
