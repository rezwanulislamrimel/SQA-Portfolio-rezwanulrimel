import React from "react";
import { Briefcase, Building2, BookOpen, Code2 } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { EXPERIENCES } from "../../data/portfolioData";
import { SectionTag } from "../common/SectionTag";

export function ExperienceSection() {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "Building2":
        return <Building2 size={17} color={C.pass} />;
      case "Code2":
        return <Code2 size={17} color={C.pass} />;
      case "Briefcase":
        return <Briefcase size={17} color={C.pass} />;
      default:
        return <BookOpen size={17} color={C.pass} />;
    }
  };

  return (
    <section
      id="experience"
      style={{
        padding: "80px 24px",
        maxWidth: 900,
        margin: "0 auto",
        scrollMarginTop: 64,
      }}
    >
      <SectionTag>// experience.log</SectionTag>
      <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: 36 }}>Where I've worked</h2>

      <div style={{ position: "relative", paddingLeft: 24 }}>
        <div
          style={{
            position: "absolute",
            left: 3,
            top: 6,
            bottom: 6,
            width: 1,
            background: C.border,
          }}
        />
        {EXPERIENCES.map((exp, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              marginBottom: i === EXPERIENCES.length - 1 ? 0 : 36,
            }}
          >
            <span
              style={{
                position: "absolute",
                left: -24,
                top: 6,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: C.pass,
                boxShadow: `0 0 0 3px ${C.bg}, 0 0 0 4px ${C.border}`,
              }}
            />
            <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: C.passDim,
                  border: `1px solid ${C.pass}44`,
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  alignSelf: "flex-start",
                  marginTop: 2,
                }}
              >
                {renderIcon(exp.icon)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "4px 12px",
                  }}
                >
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{exp.role}</h3>
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 12,
                      color: C.textFaint,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div style={{ fontSize: 14, color: C.textMuted, marginTop: 2 }}>
                  {exp.company} · {exp.location}
                </div>
              </div>
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                padding: 0,
                margin: 0,
              }}
            >
              {exp.points.map((p, j) => (
                <li
                  key={j}
                  style={{
                    fontSize: 14,
                    color: C.textMuted,
                    display: "flex",
                    gap: 10,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: C.pass, fontFamily: FONT_MONO, flexShrink: 0 }}>›</span> {p}
                </li>
              ))}
            </ul>
            {exp.link && (
              <a
                href={exp.link.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 12,
                  textDecoration: "none",
                  color: C.pass,
                  fontSize: 12.5,
                  fontWeight: 600,
                  fontFamily: FONT_MONO,
                }}
              >
                {exp.link.label} →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
