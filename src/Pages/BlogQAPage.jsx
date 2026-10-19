import { useState } from "react";
import { BookOpen, Search, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";

/* ═══════════════════════════════════════════
   DESIGN TOKENS (Matching with your Portfolio)
═══════════════════════════════════════════ */
const C = {
  bg:          "#0B132B",
  surface:     "#1C2541",
  surfaceAlt:  "#232C4D",
  border:      "rgba(244,245,247,0.08)",
  textMain:    "#F4F5F7",
  textMuted:   "#A9B1C6",
  pass:        "#00F5D4",
  passDim:     "rgba(0,245,212,0.12)",
  warn:        "#38BDF8",
};

const FONT_MONO = "'JetBrains Mono', 'Fira Code', monospace";
const FONT_SANS = "'Inter', -apple-system, sans-serif";
const FONT_HEAD = "'Space Grotesk', 'Inter', -apple-system, sans-serif";

export default function BlogQAPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sohoj ebong clean QA list (Interview / SQA concepts simplified)
  const qaList = [
    {
      id: 1,
      category: "SQA Basics",
      question: "What is the difference between QA and QC?",
      shortAnswer: "QA is process-oriented (prevention), while QC is product-oriented (detection).",
      detailedDesc: "Quality Assurance (QA) focuses on improving the software development process to prevent bugs before they happen. Quality Control (QC) involves verifying the actual product to find and fix defects after they are built.",
      readTime: "2 min read"
    },
    {
      id: 2,
      category: "API Testing",
      question: "Why do we use Postman for API Testing?",
      shortAnswer: "For sending requests, validating JSON responses, and automating collections.",
      detailedDesc: "Postman allows testers to interact with REST APIs seamlessly. It helps verify status codes (like 200 OK, 404 Not Found), inspect response headers, and run automated test scripts without writing heavy code.",
      readTime: "3 min read"
    },
    {
      id: 3,
      category: "Automation",
      question: "Playwright vs Selenium: Which one to choose?",
      shortAnswer: "Playwright is faster and modern; Selenium is older with a massive community.",
      detailedDesc: "Playwright supports auto-waiting out of the box and handles modern web apps very quickly with robust parallel execution. Selenium is widely established and supports a massive range of legacy browser grids.",
      readTime: "4 min read"
    },
    {
      id: 4,
      category: "Bug Life Cycle",
      question: "What are the common states of a Bug?",
      shortAnswer: "New -> Assigned -> Open -> Fixed -> Retested -> Closed.",
      detailedDesc: "When a tester finds a bug, it starts as 'New'. Once acknowledged by the developer, it moves to 'Open/In Progress'. After fixing and retesting, it is marked as 'Closed'.",
      readTime: "2 min read"
    }
  ];

  const categories = ["All", "SQA Basics", "API Testing", "Automation", "Bug Life Cycle"];

  const filteredData = qaList.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.shortAnswer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ background: C.bg, color: C.textMain, fontFamily: FONT_SANS, minHeight: "100vh", padding: "40px 16px", overflowX: "hidden" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontFamily: FONT_MONO, color: C.pass, fontSize: "13px", marginBottom: "8px" }}>
            // SQA KNOWLEDGE BASE & BLOG
          </div>
          <h1 style={{ fontFamily: FONT_HEAD, fontSize: "clamp(24px, 4vw, 32px)", fontWeight: "700", margin: "0 0 12px 0" }}>
            Interview & Testing Concepts Made Easy
          </h1>
          <p style={{ color: C.textMuted, fontSize: "14px", maxWidth: "550px", margin: "0 auto", lineHeight: "1.5" }}>
            Short, straight-to-the-point answers for essential software testing and automation topics.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ position: "relative", marginBottom: "20px" }}>
          <Search size={18} color={C.textMuted} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
          <input 
            type="text" 
            placeholder="Search questions (e.g., Postman, QA vs QC)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: "10px",
              padding: "12px 14px 12px 44px",
              color: C.textMain,
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box"
            }}
          />
        </div>

        {/* Category Filters */}
        <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "12px", marginBottom: "24px" }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? C.pass : C.surface,
                color: selectedCategory === cat ? C.bg : C.textMuted,
                border: `1px solid ${C.border}`,
                borderRadius: "8px",
                padding: "6px 14px",
                fontSize: "12px",
                fontFamily: FONT_MONO,
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontWeight: selectedCategory === cat ? "600" : "normal"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Feed */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div 
                key={item.id}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "12px",
                  padding: "20px",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11px", fontFamily: FONT_MONO, background: C.passDim, color: C.pass, padding: "3px 8px", borderRadius: "6px" }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: "11px", color: C.textMuted, fontFamily: FONT_MONO }}>{item.readTime}</span>
                </div>

                <h3 style={{ fontFamily: FONT_HEAD, fontSize: "16px", margin: "0 0 8px 0", color: C.textMain }}>
                  {item.question}
                </h3>

                <p style={{ fontSize: "14px", color: C.warn, margin: "0 0 10px 0", fontWeight: "500" }}>
                  👉 {item.shortAnswer}
                </p>

                <p style={{ fontSize: "13px", color: C.textMuted, margin: "0", lineHeight: "1.5", background: C.surfaceAlt, padding: "12px", borderRadius: "8px", borderLeft: `3px solid ${C.pass}` }}>
                  {item.detailedDesc}
                </p>
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center", padding: "40px", color: C.textMuted, fontFamily: FONT_MONO }}>
              No matching questions found! Try another keyword.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}