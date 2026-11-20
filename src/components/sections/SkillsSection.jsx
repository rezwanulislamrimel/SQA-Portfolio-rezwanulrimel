import React, { useState } from "react";
import {
  CheckCircle,
  Code2,
  Cpu,
  Layers,
  Terminal,
  ShieldCheck,
  Smartphone,
  GitBranch,
  Bot,
  Sparkles,
} from "lucide-react";
import { C, FONT_SANS, FONT_HEAD, FONT_MONO } from "../../constants/theme";
import { SKILL_CATEGORIES } from "../../data/portfolioData";

const CATEGORY_ICONS = {
  "Testing": CheckCircle,
  "Automation": Cpu,
  "Performance & Security": ShieldCheck,
  "Mobile": Smartphone,
  "CI/CD & Tools": GitBranch,
  "Concepts": Layers,
  "Languages": Terminal,
  "Web Development": Code2,
  "🤖 AI Tools": Bot,
  "💻 AI Coding & Automation": Sparkles,
};

export function SkillsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="skills"
      style={{
        padding: "80px 48px",
        fontFamily: FONT_SANS,
        position: "relative",
      }}
    >
      {/* ── Section Header ── */}
      <div style={{ marginBottom: 44 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.22)",
            borderRadius: 100,
            padding: "5px 14px",
            marginBottom: 18,
          }}
        >
          <Code2 size={13} color={C.accent} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: C.accent,
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            ⚡ TECH STACK & TOOLS
          </span>
        </div>
        <h2
          style={{
            fontFamily: FONT_HEAD,
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "#fff",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Skills & <span style={{ color: C.accent }}>Expertise</span>
        </h2>
        <p
          style={{
            color: C.textMuted,
            fontSize: 15,
            marginTop: 10,
            maxWidth: 540,
            lineHeight: 1.65,
          }}
        >
          Quality assurance tooling, automation frameworks, and development technologies I utilize daily.
        </p>
      </div>

      {/* ── Skills Bento Grid (Pure Technical Arsenal) ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
        }}
        className="skills-grid"
      >
        {SKILL_CATEGORIES.map((cat, i) => {
          const Icon = CATEGORY_ICONS[cat.category] || Code2;
          const isHovered = hoveredIdx === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                position: "relative",
                background: isHovered
                  ? "linear-gradient(145deg, rgba(22, 22, 26, 0.95) 0%, rgba(12, 12, 14, 0.98) 100%)"
                  : "linear-gradient(145deg, rgba(16, 16, 18, 0.85) 0%, rgba(10, 10, 12, 0.9) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: `1px solid ${isHovered ? C.accent + "55" : C.border}`,
                borderRadius: 16,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                boxShadow: isHovered
                  ? `0 12px 30px -10px ${C.accent}22, 0 4px 16px rgba(0,0,0,0.5)`
                  : "0 4px 20px rgba(0, 0, 0, 0.25)",
                transition: "all 0.25s cubic-bezier(0.2, 0.7, 0.3, 1)",
              }}
            >
              <div>
                {/* Header with Icon and Title */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: cat.note ? 6 : 14,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: "rgba(34, 197, 94, 0.08)",
                      border: "1px solid rgba(34, 197, 94, 0.25)",
                      display: "grid",
                      placeItems: "center",
                      color: C.accent,
                    }}
                  >
                    <Icon size={18} color={C.accent} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: FONT_HEAD,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: 0,
                      }}
                    >
                      {cat.category}
                    </h3>
                  </div>
                </div>

                {cat.note && (
                  <p
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 12,
                      color: C.textFaint,
                      margin: "0 0 14px 0",
                      lineHeight: 1.5,
                    }}
                  >
                    {cat.note}
                  </p>
                )}

                {/* Skill Pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 12,
                        color: C.textMuted,
                        background: "rgba(255, 255, 255, 0.025)",
                        border: `1px solid ${C.border}`,
                        padding: "5px 12px",
                        borderRadius: 6,
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#FFFFFF";
                        e.currentTarget.style.borderColor = C.accent + "66";
                        e.currentTarget.style.background = "rgba(34, 197, 94, 0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = C.textMuted;
                        e.currentTarget.style.borderColor = C.border;
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.025)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 860px) {
          #skills { padding: 56px 18px !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default SkillsSection;
