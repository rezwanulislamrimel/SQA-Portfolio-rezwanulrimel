import React, { useState } from "react";
import { Briefcase, Building2, BookOpen, Code2, ChevronDown, ExternalLink } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { EXPERIENCES } from "../../data/portfolioData";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (i) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "Building2": return <Building2 size={17} color={C.accent} />;
      case "Code2": return <Code2 size={17} color={C.accent} />;
      case "Briefcase": return <Briefcase size={17} color={C.accent} />;
      default: return <BookOpen size={17} color={C.accent} />;
    }
  };

  return (
    <section id="experience" style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto", scrollMarginTop: 64 }}>
      {/* Eyebrow */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: C.accentDim, border: `1px solid ${C.borderHi}`,
        borderRadius: 20, padding: "5px 14px", fontSize: 11, fontFamily: FONT_MONO,
        color: C.accent, marginBottom: 16, textTransform: "uppercase",
        letterSpacing: 1.5, fontWeight: 600,
      }}>
        🚀 JOURNEY
      </div>
      <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: 36 }}>
        Experience & <span style={{ color: C.accent }}>Education</span>
      </h2>

      <div style={{ position: "relative", paddingLeft: 24 }}>
        <div style={{
          position: "absolute", left: 3, top: 6, bottom: 6, width: 2,
          background: `linear-gradient(180deg, ${C.accent}66, ${C.border})`,
        }} />
        {EXPERIENCES.map((exp, i) => (
          <div key={i} style={{ position: "relative", marginBottom: i === EXPERIENCES.length - 1 ? 0 : 36 }}>
            <span style={{
              position: "absolute", left: -24, top: 6, width: 10, height: 10,
              borderRadius: "50%", background: C.accent,
              boxShadow: `0 0 0 3px ${C.bg}, 0 0 0 4px ${C.border}, 0 0 8px ${C.accent}44`,
            }} />
            <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9,
                background: C.accentDim, border: `1px solid ${C.accent}44`,
                display: "grid", placeItems: "center", flexShrink: 0, marginTop: 2,
              }}>
                {renderIcon(exp.icon)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px 12px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{exp.role}</h3>
                  <span style={{
                    fontFamily: FONT_MONO, fontSize: 11, color: exp.status === "active" ? C.accent : C.textFaint,
                    background: exp.status === "active" ? C.accentDim : "transparent",
                    padding: "2px 8px", borderRadius: 4,
                    border: exp.status === "active" ? `1px solid ${C.accent}44` : "none",
                  }}>
                    {exp.period}
                  </span>
                </div>
                <div style={{ fontSize: 14, color: C.textMuted, marginTop: 2 }}>
                  {exp.company} · {exp.location}
                </div>
              </div>
            </div>

            {/* Expandable achievements */}
            <button onClick={() => toggleExpand(i)} style={{
              display: "flex", alignItems: "center", gap: 6, border: 0, background: "transparent",
              color: C.accent, fontFamily: FONT_MONO, fontSize: 12, cursor: "pointer",
              marginBottom: expanded[i] ? 10 : 0, fontWeight: 600,
            }}>
              {expanded[i] ? "Hide" : "Show"} achievements
              <ChevronDown size={14} style={{
                transform: expanded[i] ? "rotate(180deg)" : "none",
                transition: "transform 0.2s ease",
              }} />
            </button>

            {expanded[i] && (
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, padding: 0, margin: 0, animation: "fadeUp 0.3s ease both" }}>
                {exp.points.map((p, j) => (
                  <li key={j} style={{ fontSize: 14, color: C.textMuted, display: "flex", gap: 10, lineHeight: 1.6 }}>
                    <span style={{ color: C.accent, fontFamily: FONT_MONO, flexShrink: 0 }}>›</span> {p}
                  </li>
                ))}
              </ul>
            )}

            {/* Links (single or array) */}
            {exp.link && (
              <a href={exp.link.url} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12,
                textDecoration: "none", color: C.accent, fontSize: 12.5, fontWeight: 600, fontFamily: FONT_MONO,
              }}>
                <ExternalLink size={12} /> {exp.link.label}
              </a>
            )}
            {exp.links && exp.links.map((lnk, li) => (
              <a key={li} href={lnk.url} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, marginRight: 14,
                textDecoration: "none", color: C.accent, fontSize: 12.5, fontWeight: 600, fontFamily: FONT_MONO,
              }}>
                <ExternalLink size={12} /> {lnk.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
