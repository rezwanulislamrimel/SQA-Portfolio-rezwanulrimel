import React, { useState } from "react";
import { X, Clock, Calendar, User, Check, Copy, ChevronRight, Languages } from "lucide-react";
import { C, FONT_MONO, FONT_SANS, FONT_HEAD } from "../../constants/theme";

// Helper to render bold **text** or inline `code`
function renderFormattedText(text) {
  if (!text) return "";
  const parts = text.split(/(\*\*.*?\*\*|__.*?__|`.*?`)/g);
  return parts.map((part, i) => {
    if ((part.startsWith("**") && part.endsWith("**")) || (part.startsWith("__") && part.endsWith("__"))) {
      return (
        <strong key={i} style={{ color: "#FFFFFF", fontWeight: 700 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          style={{
            background: "rgba(0, 245, 212, 0.12)",
            color: "#00F5D4",
            padding: "2px 6px",
            borderRadius: 4,
            fontFamily: FONT_MONO,
            fontSize: "0.9em",
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export function BlogReaderModal({ post, onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [modalLang, setModalLang] = useState("both"); // "both" | "en" | "bn"

  if (!post) return null;

  const handleCopyCode = (codeText, idx) => {
    navigator.clipboard.writeText(codeText);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const hasBengali = Boolean(
    post.titleBn ||
    post.excerptBn ||
    (post.content && post.content.some((b) => b.textBn || b.itemsBn))
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(11, 19, 43, 0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
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
          maxWidth: 840,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "32px 28px",
          position: "relative",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
          color: C.textMain,
          fontFamily: FONT_SANS,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar: Language Toggle + Close Button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18, gap: 12 }}>
          {/* Language Switcher */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: "rgba(11, 19, 43, 0.9)",
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: "3px 4px",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 5, padding: "0 8px", fontSize: 11.5, fontFamily: FONT_MONO, color: C.textFaint }}>
              <Languages size={13} color={C.pass} /> Language:
            </span>
            {[
              { key: "both", label: "🌐 Both" },
              { key: "en", label: "🇬🇧 English" },
              { key: "bn", label: "🇧🇩 বাংলা" },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setModalLang(opt.key)}
                style={{
                  background: modalLang === opt.key ? C.pass : "transparent",
                  color: modalLang === opt.key ? "#0B132B" : C.textMuted,
                  border: 0,
                  borderRadius: 6,
                  padding: "4px 10px",
                  fontSize: 11.5,
                  fontFamily: FONT_MONO,
                  fontWeight: modalLang === opt.key ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: `1px solid ${C.border}`,
              color: C.textMain,
              width: 34,
              height: 34,
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Category & Meta */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
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

        {/* Article Titles */}
        <div>
          {(modalLang === "en" || modalLang === "both") && (
            <h1
              style={{
                fontFamily: FONT_HEAD,
                fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                fontWeight: 800,
                lineHeight: 1.25,
                color: "#FFFFFF",
                marginBottom: modalLang === "both" && post.titleBn ? 8 : 16,
              }}
            >
              {post.title}
            </h1>
          )}

          {(modalLang === "bn" || (modalLang === "both" && post.titleBn)) && (
            <h2
              style={{
                fontFamily: FONT_HEAD,
                fontSize: modalLang === "bn" ? "clamp(1.6rem, 2.8vw, 2.2rem)" : "1.25rem",
                fontWeight: 700,
                lineHeight: 1.35,
                color: modalLang === "bn" ? "#FFFFFF" : C.warn,
                marginBottom: 16,
              }}
            >
              {post.titleBn || post.title}
            </h2>
          )}
        </div>

        {/* Tags */}
        {post.tags && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
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
            marginBottom: 28,
          }}
        >
          {(modalLang === "en" || modalLang === "both") && (
            <div style={{ fontSize: 14.5, color: "#E2E8F0", lineHeight: 1.65, fontStyle: "italic", marginBottom: modalLang === "both" && post.excerptBn ? 8 : 0 }}>
              "{post.excerpt}"
            </div>
          )}
          {(modalLang === "bn" || (modalLang === "both" && post.excerptBn)) && (
            <div style={{ fontSize: 14, color: "#93C5FD", lineHeight: 1.7, fontStyle: "italic" }}>
              "{post.excerptBn || post.excerpt}"
            </div>
          )}
        </div>

        {/* Article Body Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, color: C.textMuted, fontSize: 15, lineHeight: 1.75 }}>
          {post.content ? (
            post.content.map((block, idx) => {
              // Heading
              if (block.type === "heading") {
                return (
                  <div key={idx} style={{ marginTop: 14, marginBottom: 4 }}>
                    {(modalLang === "en" || modalLang === "both") && (
                      <h2 style={{ fontFamily: FONT_HEAD, fontSize: "1.35rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px 0" }}>
                        {renderFormattedText(block.text)}
                      </h2>
                    )}
                    {(modalLang === "bn" || (modalLang === "both" && block.textBn)) && (
                      <h3 style={{ fontFamily: FONT_HEAD, fontSize: modalLang === "bn" ? "1.35rem" : "1.1rem", fontWeight: 600, color: C.warn, margin: 0 }}>
                        {renderFormattedText(block.textBn || block.text)}
                      </h3>
                    )}
                  </div>
                );
              }

              // Subheading
              if (block.type === "subheading") {
                return (
                  <div key={idx} style={{ marginTop: 10, marginBottom: 2 }}>
                    {(modalLang === "en" || modalLang === "both") && (
                      <h3 style={{ fontFamily: FONT_HEAD, fontSize: "1.15rem", fontWeight: 600, color: "#E2E8F0", margin: "0 0 2px 0" }}>
                        {renderFormattedText(block.text)}
                      </h3>
                    )}
                    {(modalLang === "bn" || (modalLang === "both" && block.textBn)) && (
                      <h4 style={{ fontFamily: FONT_HEAD, fontSize: "1rem", fontWeight: 600, color: C.pass, margin: 0 }}>
                        {renderFormattedText(block.textBn || block.text)}
                      </h4>
                    )}
                  </div>
                );
              }

              // Code block
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

              // List
              if (block.type === "list") {
                return (
                  <div key={idx} style={{ margin: "4px 0" }}>
                    {(modalLang === "en" || modalLang === "both") && block.items && (
                      <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                        {block.items.map((item, li) => (
                          <li
                            key={li}
                            style={{
                              color: "#D1D5DB",
                              fontSize: 14.5,
                              lineHeight: 1.7,
                              marginBottom: 6,
                              position: "relative",
                              paddingLeft: 20,
                            }}
                          >
                            <ChevronRight size={13} color={C.pass} style={{ position: "absolute", left: 0, top: 5 }} />
                            {renderFormattedText(item)}
                          </li>
                        ))}
                      </ul>
                    )}
                    {(modalLang === "bn" || (modalLang === "both" && block.itemsBn)) && (
                      <ul style={{ margin: modalLang === "both" ? "6px 0 0" : 0, paddingLeft: 0, listStyle: "none" }}>
                        {(block.itemsBn || block.items).map((item, li) => (
                          <li
                            key={li}
                            style={{
                              color: "#93C5FD",
                              fontSize: 14,
                              lineHeight: 1.75,
                              marginBottom: 6,
                              position: "relative",
                              paddingLeft: 20,
                            }}
                          >
                            <ChevronRight size={13} color={C.warn} style={{ position: "absolute", left: 0, top: 5 }} />
                            {renderFormattedText(item)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              // Callout
              if (block.type === "callout") {
                return (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(56, 189, 248, 0.08)",
                      borderLeft: `4px solid ${C.info}`,
                      padding: "14px 18px",
                      borderRadius: "0 8px 8px 0",
                      fontSize: 14,
                      lineHeight: 1.65,
                    }}
                  >
                    {(modalLang === "en" || modalLang === "both") && (
                      <div style={{ color: "#E2E8F0", marginBottom: modalLang === "both" && block.textBn ? 6 : 0 }}>
                        💡 {renderFormattedText(block.text)}
                      </div>
                    )}
                    {(modalLang === "bn" || (modalLang === "both" && block.textBn)) && (
                      <div style={{ color: "#93C5FD" }}>
                        💡 {renderFormattedText(block.textBn || block.text)}
                      </div>
                    )}
                  </div>
                );
              }

              // Divider
              if (block.type === "divider") {
                return (
                  <hr
                    key={idx}
                    style={{
                      border: "none",
                      borderTop: `1px solid ${C.border}`,
                      margin: "12px 0",
                    }}
                  />
                );
              }

              // Default: Paragraph
              return (
                <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {(modalLang === "en" || modalLang === "both") && (
                    <p style={{ margin: 0, color: "#D1D5DB" }}>
                      {renderFormattedText(block.text)}
                    </p>
                  )}
                  {(modalLang === "bn" || (modalLang === "both" && block.textBn)) && (
                    <p style={{ margin: 0, color: "#93C5FD", borderLeft: modalLang === "both" ? `3px solid ${C.warn}44` : "none", paddingLeft: modalLang === "both" ? 12 : 0 }}>
                      {renderFormattedText(block.textBn || block.text)}
                    </p>
                  )}
                </div>
              );
            })
          ) : (
            post.body &&
            post.body.map((para, k) => (
              <p key={k} style={{ margin: 0, color: "#D1D5DB" }}>
                {renderFormattedText(para)}
              </p>
            ))
          )}
        </div>

        {/* Footer / Back Button */}
        <div style={{ marginTop: 36, paddingTop: 20, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
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
