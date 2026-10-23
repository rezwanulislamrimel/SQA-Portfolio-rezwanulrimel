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
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Languages,
  FileText,
  MessageSquareMore,
} from "lucide-react";
import { C, FONT_MONO, FONT_SANS, FONT_HEAD } from "../constants/theme";
import { ALL_BLOG_POSTS, BLOG_CATEGORIES } from "../data/blogData";
import { ALL_INTERVIEW_QUESTIONS, INTERVIEW_CATEGORIES } from "../data/interviewData";
import { PERSONAL_INFO } from "../data/portfolioData";
import { BlogReaderModal } from "../components/common/BlogReaderModal";
import { SQABackground } from "../components/common/SQABackground";
import { Navbar } from "../components/layout/Navbar";

/* ─── Interview Q&A Accordion Card ────────────────────────────── */
function InterviewCard({ q, lang, idx }) {
  const [open, setOpen] = useState(false);

  const diffColors = {
    Beginner: { bg: "rgba(0, 245, 212, 0.1)", border: C.pass, text: C.pass },
    Intermediate: { bg: "rgba(56, 189, 248, 0.1)", border: C.warn, text: C.warn },
    Advanced: { bg: "rgba(255, 107, 107, 0.1)", border: C.fail, text: C.fail },
  };
  const dc = diffColors[q.difficulty] || diffColors.Beginner;

  return (
    <div
      style={{
        background: C.surface,
        backdropFilter: "blur(14px)",
        border: `1px solid ${open ? C.borderHi : C.border}`,
        borderLeft: `3px solid ${dc.border}`,
        borderRadius: 10,
        overflow: "hidden",
        transition: "border-color .18s ease, box-shadow .18s ease",
        boxShadow: open ? "0 8px 30px rgba(0, 0, 0, 0.35)" : "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Question Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          background: "transparent",
          border: 0,
          color: "#FFFFFF",
          padding: "20px 24px",
          cursor: "pointer",
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
        }}
      >
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 14,
            fontWeight: 800,
            color: C.pass,
            minWidth: 36,
            paddingTop: 2,
          }}
        >
          Q{idx + 1}
        </span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: FONT_HEAD,
              fontSize: 16,
              fontWeight: 700,
              lineHeight: 1.45,
              color: "#FFFFFF",
              marginBottom: lang === "both" && q.questionBn ? 4 : 0,
            }}
          >
            {lang === "bn" ? (q.questionBn || q.question) : q.question}
          </div>
          {lang === "both" && q.questionBn && (
            <div
              style={{
                fontSize: 14.5,
                color: C.warn,
                lineHeight: 1.5,
                fontWeight: 600,
              }}
            >
              {q.questionBn}
            </div>
          )}
          <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap", alignItems: "center" }}>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 10,
                fontWeight: 700,
                color: dc.text,
                background: dc.bg,
                border: `1px solid ${dc.border}44`,
                padding: "2px 8px",
                borderRadius: 4,
              }}
            >
              {q.difficulty}
            </span>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 10,
                color: C.textFaint,
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${C.border}`,
                padding: "2px 8px",
                borderRadius: 4,
              }}
            >
              {q.category}
            </span>
          </div>
        </div>
        <span style={{ color: C.pass, flexShrink: 0, paddingTop: 4 }}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {/* Answer Body */}
      {open && (
        <div
          style={{
            padding: "0 24px 24px 74px",
            borderTop: `1px solid ${C.border}`,
            animation: "fadeIn .2s ease",
          }}
        >
          {/* English Answer */}
          {(lang === "en" || lang === "both") && (
            <div style={{ marginTop: 18 }}>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 10.5,
                  fontWeight: 700,
                  color: C.pass,
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                🇬🇧 English Answer
              </div>
              <div
                style={{
                  fontSize: 14.5,
                  color: "#E2E8F0",
                  lineHeight: 1.75,
                  marginBottom: lang === "both" && q.answerBn ? 18 : 0,
                  paddingLeft: 14,
                  borderLeft: `3px solid ${C.pass}33`,
                }}
              >
                {q.answer}
              </div>
            </div>
          )}

          {/* Bangla Answer */}
          {(lang === "bn" || lang === "both") && q.answerBn && (
            <div style={{ marginTop: lang === "bn" ? 18 : 0 }}>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 10.5,
                  fontWeight: 700,
                  color: C.warn,
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                🇧🇩 বাংলা উত্তর
              </div>
              <div
                style={{
                  fontSize: 14.5,
                  color: "#D1D5DB",
                  lineHeight: 1.85,
                  paddingLeft: 14,
                  borderLeft: `3px solid ${C.warn}33`,
                }}
              >
                {q.answerBn}
              </div>
            </div>
          )}

          {/* Tags */}
          {q.tags && q.tags.length > 0 && (
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>
              {q.tags.map((t, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 10,
                    background: "rgba(255,255,255,0.04)",
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
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN BLOG & QA PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function BlogQAPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid-3");
  const [readingPost, setReadingPost] = useState(null);
  const [activeTab, setActiveTab] = useState("articles"); // "articles" | "interview"
  const [lang, setLang] = useState("both"); // "both" | "en" | "bn"
  const [interviewCat, setInterviewCat] = useState("All");
  const [interviewDiff, setInterviewDiff] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ─── Blog Filtering (Supports both English and Bengali query) ──── */
  const filteredPosts = ALL_BLOG_POSTS.filter((item) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      (item.titleBn && item.titleBn.toLowerCase().includes(q)) ||
      item.excerpt.toLowerCase().includes(q) ||
      (item.excerptBn && item.excerptBn.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(q)));
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  /* ─── Interview Filtering ────────────────────────────────── */
  const filteredQuestions = ALL_INTERVIEW_QUESTIONS.filter((q) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      q.question.toLowerCase().includes(term) ||
      (q.questionBn && q.questionBn.includes(term)) ||
      q.answer.toLowerCase().includes(term) ||
      (q.answerBn && q.answerBn.includes(term)) ||
      (q.tags && q.tags.some((t) => t.toLowerCase().includes(term)));
    const matchesCat = interviewCat === "All" || q.category === interviewCat;
    const matchesDiff = interviewDiff === "All" || q.difficulty === interviewDiff;
    return matchesSearch && matchesCat && matchesDiff;
  });

  const tabs = [
    { key: "articles", label: "Blog Articles (আর্টিকেলসমূহ)", icon: <FileText size={16} />, count: ALL_BLOG_POSTS.length },
    { key: "interview", label: "Interview Q&A (ইন্টারভিউ প্রশ্নোত্তর)", icon: <MessageSquareMore size={16} />, count: ALL_INTERVIEW_QUESTIONS.length },
  ];

  return (
    <div style={{ background: C.bg, color: C.textMain, fontFamily: FONT_SANS, minHeight: "100vh", position: "relative" }}>
      <SQABackground />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
        * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
        h1, h2, h3, h4 { font-family: ${FONT_HEAD}; color: #FFFFFF; }
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
        .cta-primary { transition: transform .15s ease, box-shadow .15s ease; }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0, 245, 212, 0.3); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* ─── Unified Portfolio Navbar ──────────────────────── */}
      <Navbar lang={lang} setLang={setLang} />

      {/* ─── Main Content ───────────────────────────────────── */}
      <main style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* ─── Hero ─────────────────────────────────────────── */}
        <div style={{ textAlign: "center", maxWidth: 840, margin: "0 auto 28px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
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
                color: C.warn,
                background: "rgba(56, 189, 248, 0.1)",
                border: `1px solid ${C.warn}44`,
                padding: "5px 12px",
                borderRadius: 20,
              }}
            >
              ❓ <strong>{ALL_INTERVIEW_QUESTIONS.length}</strong> Interview Q&A Bank
            </div>
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 12,
                color: C.info,
                background: "rgba(56, 189, 248, 0.08)",
                border: `1px solid ${C.border}`,
                padding: "5px 12px",
                borderRadius: 20,
              }}
            >
              🌐 English + বাংলা Bilingual Support
            </div>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.18,
              margin: "0 0 14px 0",
              color: "#FFFFFF",
              textShadow: "0 3px 15px rgba(0, 0, 0, 0.5)",
            }}
          >
            SQA Knowledge Base & Interview Master Guide
          </h1>

          <p style={{ color: "#E2E8F0", fontSize: 16, lineHeight: 1.7, margin: "0 auto 26px", maxWidth: 680 }}>
            Practical engineering insights, manual testing deep-dives, Playwright automation patterns, and complete SQA interview preparation in English & বাংলা — by Rezwanul Rimel.
          </p>

          {/* Search Bar */}
          <div style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
            <Search
              size={18}
              color={C.textMuted}
              style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)" }}
            />
            <input
              type="text"
              placeholder={activeTab === "articles"
                ? "Search articles in English or বাংলা (e.g. Playwright, SDLC, ব্ল্যাক বক্স, বাগ)..."
                : "Search questions in English or বাংলা (e.g. Black Box, Severity, STLC, বাগ)..."
              }
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

        {/* ─── Tab Switcher ─────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: 28,
            flexWrap: "wrap",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setSearchTerm("");
                setSelectedCategory("All");
                setInterviewCat("All");
                setInterviewDiff("All");
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 22px",
                borderRadius: 10,
                border: `1px solid ${activeTab === tab.key ? C.pass : C.border}`,
                background: activeTab === tab.key
                  ? "rgba(0, 245, 212, 0.14)"
                  : "rgba(28, 37, 65, 0.8)",
                color: activeTab === tab.key ? C.pass : C.textMuted,
                fontFamily: FONT_MONO,
                fontSize: 13.5,
                fontWeight: activeTab === tab.key ? 700 : 500,
                cursor: "pointer",
                transition: "all .18s ease",
              }}
            >
              {tab.icon}
              {tab.label}
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  fontWeight: 700,
                  background: activeTab === tab.key
                    ? "rgba(0, 245, 212, 0.22)"
                    : "rgba(255,255,255,0.06)",
                  padding: "2px 8px",
                  borderRadius: 10,
                }}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════
           TAB: BLOG ARTICLES
           ════════════════════════════════════════════════════ */}
        {activeTab === "articles" && (
          <>
            {/* Category Filter & View Controls */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 28,
                paddingBottom: 16,
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              {/* Category buttons */}
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

              {/* View mode toggle */}
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
                  {[
                    { mode: "grid-3", icon: <Grid3X3 size={16} />, title: "3-Column" },
                    { mode: "grid-2", icon: <LayoutGrid size={16} />, title: "2-Column" },
                    { mode: "list", icon: <List size={16} />, title: "List View" },
                  ].map((v) => (
                    <button
                      key={v.mode}
                      onClick={() => setViewMode(v.mode)}
                      title={v.title}
                      style={{
                        background: viewMode === v.mode ? C.pass : "transparent",
                        color: viewMode === v.mode ? "#0B132B" : C.textMuted,
                        border: 0,
                        borderRadius: 6,
                        width: 32,
                        height: 32,
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      {v.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts Display: List View */}
            {viewMode === "list" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="row-card"
                    style={{ padding: "24px 28px", borderRadius: 10, cursor: "pointer" }}
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

                    {/* Titles */}
                    <h2 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "0 0 6px 0", color: "#FFFFFF" }}>
                      {lang === "bn" ? (post.titleBn || post.title) : post.title}
                    </h2>
                    {lang === "both" && post.titleBn && (
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: "0 0 8px 0", color: C.warn }}>
                        {post.titleBn}
                      </h3>
                    )}

                    {/* Excerpt */}
                    <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6, margin: "0 0 14px 0" }}>
                      {lang === "bn" ? (post.excerptBn || post.excerpt) : post.excerpt}
                    </p>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {post.tags && post.tags.map((t, i) => (
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

                      {/* Title */}
                      <h3 style={{ fontSize: 17.5, fontWeight: 700, marginBottom: lang === "both" && post.titleBn ? 4 : 8, lineHeight: 1.35, color: "#FFFFFF" }}>
                        {lang === "bn" ? (post.titleBn || post.title) : post.title}
                      </h3>
                      {lang === "both" && post.titleBn && (
                        <h4 style={{ fontSize: 14.5, fontWeight: 600, color: C.warn, margin: "0 0 10px 0", lineHeight: 1.4 }}>
                          {post.titleBn}
                        </h4>
                      )}

                      {/* Excerpt */}
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
                        {lang === "bn" ? (post.excerptBn || post.excerpt) : post.excerpt}
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
                <div>Try searching with keywords like 'Playwright', 'K6', 'SDLC', 'ব্ল্যাক বক্স' or 'বাগ'.</div>
              </div>
            )}
          </>
        )}

        {/* ════════════════════════════════════════════════════
           TAB: INTERVIEW QUESTIONS
           ════════════════════════════════════════════════════ */}
        {activeTab === "interview" && (
          <>
            {/* Controls Bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 24,
                paddingBottom: 16,
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              {/* Category Filter */}
              <div style={{ display: "flex", gap: 8, overflowX: "auto", maxWidth: "100%", paddingBottom: 6, flexWrap: "wrap" }}>
                {INTERVIEW_CATEGORIES.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInterviewCat(cat)}
                    style={{
                      background: interviewCat === cat ? C.pass : "rgba(28, 37, 65, 0.8)",
                      color: interviewCat === cat ? "#0B132B" : C.textMuted,
                      border: `1px solid ${interviewCat === cat ? C.pass : C.border}`,
                      borderRadius: 8,
                      padding: "7px 14px",
                      fontSize: 12.5,
                      fontFamily: FONT_MONO,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      fontWeight: interviewCat === cat ? 700 : 500,
                      transition: "all 0.15s ease",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Right: Difficulty Filter & Count */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                {/* Difficulty Filter */}
                <div style={{ display: "flex", background: "rgba(28, 37, 65, 0.8)", border: `1px solid ${C.border}`, borderRadius: 8, padding: 3, gap: 4 }}>
                  {["All", "Beginner", "Intermediate", "Advanced"].map((d) => (
                    <button
                      key={d}
                      onClick={() => setInterviewDiff(d)}
                      style={{
                        background: interviewDiff === d ? C.warn : "transparent",
                        color: interviewDiff === d ? "#0B132B" : C.textMuted,
                        border: 0,
                        borderRadius: 6,
                        padding: "5px 10px",
                        fontSize: 11.5,
                        fontFamily: FONT_MONO,
                        cursor: "pointer",
                        fontWeight: interviewDiff === d ? 700 : 500,
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <span style={{ fontSize: 13, color: C.textFaint, fontFamily: FONT_MONO }}>
                  Showing <strong>{filteredQuestions.length}</strong> of {ALL_INTERVIEW_QUESTIONS.length}
                </span>
              </div>
            </div>

            {/* Questions List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filteredQuestions.map((q, idx) => (
                <InterviewCard key={q.id} q={q} lang={lang} idx={idx} />
              ))}
            </div>

            {/* Empty State */}
            {filteredQuestions.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 20px", color: C.textMuted, fontFamily: FONT_MONO }}>
                <HelpCircle size={40} color={C.textFaint} style={{ marginBottom: 14 }} />
                <div style={{ fontSize: 16, color: C.textMain, fontWeight: 700, marginBottom: 6 }}>
                  No questions found
                </div>
                <div>Try adjusting the category, difficulty, or search terms.</div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Reader Modal */}
      {readingPost && <BlogReaderModal post={readingPost} onClose={() => setReadingPost(null)} />}

      {/* ─── Footer ─────────────────────────────────────────── */}
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
