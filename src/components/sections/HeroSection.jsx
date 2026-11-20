import React from "react";
import { Github, Linkedin, ArrowUpRight, Send, Sparkles } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { PERSONAL_INFO, STACK_ITEMS } from "../../data/portfolioData";

const techPills = ["Playwright", "Postman", "K6", "Jira"];
const floatingBadges = [
  { label: "Selenium", x: "-30px", y: "20%", delay: "0s" },
  { label: "GitHub Actions", x: "calc(100% - 10px)", y: "15%", delay: "0.5s" },
  { label: "SQL", x: "calc(100% + 5px)", y: "65%", delay: "1s" },
  { label: "Jira", x: "-40px", y: "70%", delay: "1.5s" },
  { label: "JMeter", x: "50%", y: "-15px", delay: "2s" },
];

const codeLines = [
  { text: "interface", cls: "kw" }, { text: " SQAEngineer ", cls: "type" }, { text: "{", cls: "br" },
  { text: '  name: ', cls: "prop" }, { text: '"Rezwanul Rimel"', cls: "str" }, { text: ";", cls: "pn" },
  { text: '  role: ', cls: "prop" }, { text: '"Quality Assurance"', cls: "str" }, { text: ";", cls: "pn" },
  { text: '  tools: ', cls: "prop" }, { text: '["Playwright", "Postman", "K6"]', cls: "str" }, { text: ";", cls: "pn" },
  { text: '  motto: ', cls: "prop" }, { text: '"Zero bugs in production"', cls: "str" }, { text: ";", cls: "pn" },
  { text: "}", cls: "br" },
  { text: "", cls: "" },
  { text: "const ", cls: "kw" }, { text: "engineer", cls: "var" }, { text: ": SQAEngineer = {", cls: "type" },
  { text: "  ...profile,", cls: "prop" },
  { text: '  passionLevel: ', cls: "prop" }, { text: '"∞"', cls: "str" },
  { text: "};", cls: "br" },
];

export function HeroSection() {
  return (
    <>
      <div
        id="home"
        className="hero-grid"
        style={{
          padding: "80px 24px 40px",
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.95fr",
          alignItems: "center",
          gap: 48,
          scrollMarginTop: 20,
        }}
      >
        {/* Left: Text Content */}
        <div>
          {/* Eyebrow Badge */}
          <div className="fade-up fade-up-1" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: C.accentDim,
            border: `1px solid ${C.borderHi}`,
            borderRadius: 20,
            padding: "6px 14px",
            fontSize: 11,
            fontFamily: FONT_MONO,
            color: C.accent,
            marginBottom: 20,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            fontWeight: 600,
          }}>
            <Sparkles size={13} /> Ready to Deliver Quality
          </div>

          <h1 className="fade-up fade-up-2" style={{
            fontSize: "clamp(2rem, 3.8vw, 3rem)",
            lineHeight: 1.12,
            fontWeight: 800,
            letterSpacing: "-0.5px",
            marginBottom: 20,
          }}>
            Ensuring Quality in{" "}
            <span style={{ color: C.accent }}>Every Release</span>
          </h1>

          <p className="fade-up fade-up-3" style={{
            fontSize: 15.5,
            color: C.textMuted,
            lineHeight: 1.75,
            maxWidth: 480,
            marginBottom: 24,
          }}>
            Passionate SQA Engineer crafting robust, regression-free, and high-performance digital products with modern testing tools and automation frameworks.
          </p>

          {/* Tech Stack Pills */}
          <div className="fade-up fade-up-3" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            {techPills.map((t) => (
              <span key={t} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 14px",
                borderRadius: 8,
                background: C.surfaceAlt,
                border: `1px solid ${C.border}`,
                fontSize: 12.5,
                fontFamily: FONT_MONO,
                color: C.textMuted,
                fontWeight: 500,
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="fade-up fade-up-4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="cta-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                borderRadius: 10,
                background: C.accent,
                color: "#050505",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Explore My Work <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                borderRadius: 10,
                border: `1px solid ${C.border}`,
                background: "transparent",
                color: C.textMain,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                transition: "all 0.2s ease",
              }}
            >
              <Send size={15} /> Get in Touch
            </a>
          </div>
        </div>

        {/* Right: VS Code Mockup */}
        <div className="fade-up fade-up-2" style={{ position: "relative" }}>
          {/* Green ambient glow */}
          <div style={{
            position: "absolute",
            width: "70%",
            height: "70%",
            top: "15%",
            left: "15%",
            background: `radial-gradient(circle, ${C.accent}15 0%, transparent 70%)`,
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: 0,
          }} />

          {/* Floating tech badges */}
          {floatingBadges.map((b, i) => (
            <span key={i} className="float-badge" style={{
              position: "absolute",
              left: b.x,
              top: b.y,
              padding: "4px 10px",
              borderRadius: 6,
              background: C.surfaceAlt,
              border: `1px solid ${C.border}`,
              fontSize: 10.5,
              fontFamily: FONT_MONO,
              color: C.textFaint,
              zIndex: 2,
              animation: `floatDrift 6s ease-in-out ${b.delay} infinite`,
              whiteSpace: "nowrap",
            }}>
              {b.label}
            </span>
          ))}

          {/* Code Window */}
          <div style={{
            position: "relative",
            zIndex: 1,
            background: "#0c0c0c",
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}>
            {/* Title bar */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              borderBottom: `1px solid ${C.border}`,
              background: "rgba(22, 22, 22, 0.9)",
            }}>
              <div style={{ display: "flex", gap: 7 }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F56" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#27C93F" }} />
              </div>
              <div style={{
                padding: "4px 14px",
                borderRadius: 6,
                background: "#0c0c0c",
                border: `1px solid ${C.borderHi}`,
                fontSize: 11.5,
                fontFamily: FONT_MONO,
                color: C.textMuted,
              }}>
                SQAEngineer.tsx
              </div>
              <div style={{ width: 50 }} />
            </div>

            {/* Code content */}
            <div style={{
              padding: "18px 20px",
              fontFamily: FONT_MONO,
              fontSize: 12.5,
              lineHeight: 1.85,
              overflowX: "auto",
            }}>
              {codeLines.map((line, i) => (
                <div key={i}>
                  {Array.isArray(line) ? line : (
                    <span style={{
                      color: line.cls === "kw" ? "#c678dd" :
                             line.cls === "type" ? "#e5c07b" :
                             line.cls === "str" ? C.accent :
                             line.cls === "prop" ? "#61afef" :
                             line.cls === "var" ? "#e06c75" :
                             line.cls === "br" ? C.textFaint :
                             C.textMuted,
                    }}>{line.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stack Strip */}
      <div style={{
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: "16px 24px",
        overflow: "hidden",
      }}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px 22px",
          justifyContent: "center",
          fontFamily: FONT_MONO,
          fontSize: 11.5,
          color: C.textFaint,
        }}>
          {STACK_ITEMS.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>

      <style>{`
        .float-badge {
          pointer-events: none;
        }
        @media (max-width: 860px) {
          .float-badge { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default HeroSection;
