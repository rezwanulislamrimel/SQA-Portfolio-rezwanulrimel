import React, { useState } from "react";
import { GraduationCap, Award, CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { C, FONT_SANS, FONT_HEAD, FONT_MONO } from "../../constants/theme";
import { PERSONAL_INFO, CERTIFICATIONS } from "../../data/portfolioData";

const EDUCATION_AND_CERTS = [
  {
    type: "degree",
    name: "B.Sc. in Computer Science & Engineering",
    institution: "AIICT (Asian Institute of Information Technology)",
    detail: "Core foundations in Software Engineering, Algorithms, Database Systems & Object-Oriented Design.",
    meta: "Graduated · 2020",
    badgeText: "ACADEMIC DEGREE",
    initials: "B.Sc",
    color: "#22c55e", // emerald
    icon: GraduationCap,
    highlights: ["Algorithms & Data Structures", "Database & SQL", "Software Lifecycle"],
  },
  {
    type: "cert",
    name: "Ostad",
    institution: "Ostad Learning Platform",
    detail: "Intensive 6-Month hands-on program in Manual Testing, Selenium, Playwright, API Testing & Bug Triage.",
    meta: "6-Month Specialization",
    badgeText: "SQA & AUTOMATION",
    initials: "OS",
    color: "#f59e0b", // warm amber
    icon: Award,
    highlights: ["Playwright & Selenium", "Postman & Newman", "Jira & TestRail"],
  },
  {
    type: "cert",
    name: "Programming Hero",
    institution: "Programming Hero Community",
    detail: "Comprehensive web development covering modern JavaScript, React, DOM architecture & full-stack workflows.",
    meta: "Batch: Lucky 7",
    badgeText: "WEB ENGINEERING",
    initials: "PH",
    color: "#3b82f6", // blue
    icon: Award,
    highlights: ["JavaScript (ES6+)", "React.js Ecosystem", "API Integration"],
  },
  {
    type: "cert",
    name: "Codeman BD",
    institution: "Codeman BD Institute",
    detail: "Full Stack Development & e-commerce architecture, giving deep developer insight into software construction.",
    meta: "Batch 189",
    badgeText: "FULL STACK",
    initials: "CB",
    color: "#a855f7", // purple
    icon: Award,
    highlights: ["Frontend Systems", "E-Commerce QA", "Cross-Browser Dev"],
  },
];

export function CertificationsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="certifications"
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
          <GraduationCap size={13} color={C.accent} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: C.accent,
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            📜 ACADEMIC & CERTIFICATIONS
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
          Education & <span style={{ color: C.accent }}>Certifications</span>
        </h2>
        <p
          style={{
            color: C.textMuted,
            fontSize: 15,
            marginTop: 10,
            maxWidth: 560,
            lineHeight: 1.65,
          }}
        >
          Formal Bachelor of Science degree in CSE combined with industry-standard SQA and web engineering specializations.
        </p>
      </div>

      {/* ── 4-Card Bento Grid (Degree + Certs) ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
        }}
        className="cert-grid"
      >
        {EDUCATION_AND_CERTS.map((item, i) => {
          const Icon = item.icon;
          const isHovered = hoveredIdx === i;
          const isDegree = item.type === "degree";

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
                border: `1px solid ${isHovered ? item.color + "77" : isDegree ? item.color + "44" : C.border}`,
                borderTop: `3px solid ${item.color}`,
                borderRadius: 18,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                boxShadow: isHovered
                  ? `0 14px 34px -10px ${item.color}30, 0 4px 16px rgba(0,0,0,0.5)`
                  : "0 4px 20px rgba(0, 0, 0, 0.25)",
                transition: "all 0.25s cubic-bezier(0.2, 0.7, 0.3, 1)",
              }}
            >
              {/* Subtle top ambient corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${item.color}${isHovered ? "25" : "12"} 0%, transparent 70%)`,
                  pointerEvents: "none",
                  transition: "all 0.3s ease",
                }}
              />

              {/* Card Header: Icon & Badge */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}35`,
                      display: "grid",
                      placeItems: "center",
                      color: item.color,
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <Icon size={22} color={item.color} />
                  </div>

                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: item.color,
                      background: `${item.color}14`,
                      border: `1px solid ${item.color}33`,
                      padding: "4px 10px",
                      borderRadius: 6,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: item.color,
                      }}
                    />
                    {item.badgeText}
                  </span>
                </div>

                {/* Title & Institution */}
                <h3
                  style={{
                    fontFamily: FONT_HEAD,
                    fontSize: 17,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    margin: "0 0 6px 0",
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </h3>
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 12,
                    color: item.color,
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  {item.institution}
                </div>

                <p
                  style={{
                    fontSize: 13.5,
                    color: C.textMuted,
                    lineHeight: 1.6,
                    margin: "0 0 16px 0",
                  }}
                >
                  {item.detail}
                </p>

                {/* Micro highlight pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                  {item.highlights.map((h, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: 10.5,
                        color: C.textFaint,
                        background: "rgba(255, 255, 255, 0.03)",
                        border: `1px solid ${C.border}`,
                        padding: "3px 8px",
                        borderRadius: 5,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Timeline / Meta */}
              <div
                style={{
                  paddingTop: 12,
                  borderTop: `1px solid ${C.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11.5,
                    color: C.textFaint,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <BookOpen size={13} color={item.color} />
                  {item.meta}
                </span>

                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    color: isDegree ? C.accent : item.color,
                    fontWeight: 700,
                  }}
                >
                  Verified ✓
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 860px) {
          #certifications { padding: 56px 18px !important; }
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default CertificationsSection;
