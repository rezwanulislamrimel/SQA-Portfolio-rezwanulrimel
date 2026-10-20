import React, { useState } from "react";
import { X, Clock, Calendar, User, Tag, Check, Copy } from "lucide-react";
import { C, FONT_MONO, FONT_SANS, FONT_HEAD } from "../../constants/theme";

export function BlogReaderModal({ post, onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!post) return null;

  const handleCopyCode = (codeText, idx) => {
    navigator.clipboard.writeText(codeText);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(11, 19, 43, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 16px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#161F38",
          border: `1px solid ${C.borderHi}`,
          borderRadius: 14,
          maxWidth: 820,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "32px 28px",
          position: "relative",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)",
          color: C.textMain,
          fontFamily: FONT_SANS,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "rgba(255, 255, 255, 0.08)",
            border: `1px solid ${C.border}`,
            color: C.textMain,
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
        >
          <X size={18} />
        </button>

        {/* Category & Meta */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              fontWeight: 700,
              color: post.tagColor || C.pass,
              background: "rgba(0, 245, 212, 0.12)",
              border: `1px solid ${post.tagColor || C.pass}44`,
              padding: "4px 10px",
              borderRadius: 6,
            }}
          >
            {post.category}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: C.textFaint, fontFamily: FONT_MONO }}>
            <Calendar size={13} /> {post.date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: C.textFaint, fontFamily: FONT_MONO }}>
            <Clock size={13} /> {post.readTime}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: C.textFaint, fontFamily: FONT_MONO }}>
            <User size={13} /> {post.author || "Rezwanul Rimel"}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: FONT_HEAD,
            fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
            fontWeight: 800,
            lineHeight: 1.25,
            color: "#FFFFFF",
            marginBottom: 16,
          }}
        >
          {post.title}
        </h1>

        {/* Tags */}
        {post.tags && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: `1px solid ${C.border}`,
                  padding: "2px 8px",
                  borderRadius: 4,
                  color: C.textMuted,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Excerpt callout */}
        <div
          style={{
            background: "rgba(0, 245, 212, 0.06)",
            borderLeft: `4px solid ${post.tagColor || C.pass}`,
            padding: "16px 20px",
            borderRadius: "0 8px 8px 0",
            fontSize: 15,
            color: "#E2E8F0",
            lineHeight: 1.65,
            marginBottom: 28,
            fontStyle: "italic",
          }}
        >
          "{post.excerpt}"
        </div>

        {/* Article Body Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, color: C.textMuted, fontSize: 15, lineHeight: 1.75 }}>
          {post.content ? (
            post.content.map((block, idx) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={idx}
                    style={{
                      fontFamily: FONT_HEAD,
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginTop: 18,
                      marginBottom: 6,
                    }}
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "code") {
                return (
                  <div
                    key={idx}
                    style={{
                      position: "relative",
                      background: "#0B101D",
                      border: `1px solid ${C.borderHi}`,
                      borderRadius: 8,
                      overflow: "hidden",
                      margin: "8px 0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 14px",
                        background: "rgba(255, 255, 255, 0.04)",
                        borderBottom: `1px solid ${C.border}`,
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        color: C.textFaint,
                      }}
                    >
                      <span>{block.language || "code"}</span>
                      <button
                        onClick={() => handleCopyCode(block.code, idx)}
                        style={{
                          background: "transparent",
                          border: 0,
                          color: copiedIndex === idx ? C.pass : C.textMuted,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 11,
                          fontFamily: FONT_MONO,
                        }}
                      >
                        {copiedIndex === idx ? <Check size={13} color={C.pass} /> : <Copy size={13} />}
                        {copiedIndex === idx ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <pre
                      style={{
                        margin: 0,
                        padding: "16px",
                        fontFamily: FONT_MONO,
                        fontSize: 12.5,
                        lineHeight: 1.6,
                        color: "#38BDF8",
                        overflowX: "auto",
                      }}
                    >
                      <code>{block.code}</code>
                    </pre>
                  </div>
                );
              }
              return (
                <p key={idx} style={{ margin: 0, color: "#D1D5DB" }}>
                  {block.text}
                </p>
              );
            })
          ) : (
            post.body &&
            post.body.map((para, k) => (
              <p key={k} style={{ margin: 0, color: "#D1D5DB" }}>
                {para}
              </p>
            ))
          )}
        </div>

        {/* Footer / Back Button */}
        <div style={{ marginTop: 36, paddingTop: 20, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 13, color: C.textFaint, fontFamily: FONT_MONO }}>
            Written by {post.author || "Rezwanul Rimel"} · SQA Engineer
          </div>
          <button
            onClick={onClose}
            className="cta-primary"
            style={{
              background: C.pass,
              color: "#0B132B",
              border: 0,
              borderRadius: 6,
              padding: "9px 18px",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Close Article ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogReaderModal;
