import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { SKILL_CATEGORIES, CERTIFICATIONS, PERSONAL_INFO } from "../../data/portfolioData";
import { SectionTag } from "../common/SectionTag";
import { ClientBadge } from "../common/ClientBadge";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="grid-2"
      style={{
        padding: "80px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        gap: 48,
        scrollMarginTop: 64,
      }}
    >
      {/* Left: Skills Categories */}
      <div>
        <SectionTag>// skills.json</SectionTag>
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: 30 }}>What I work with</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={i}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: C.textMuted, marginBottom: cat.note ? 4 : 10 }}>
                {cat.category}
              </h4>
              {cat.note && (
                <p style={{ fontSize: 12, color: C.textFaint, lineHeight: 1.5, margin: "0 0 10px 0" }}>
                  {cat.note}
                </p>
              )}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: 12.5,
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      padding: "6px 12px",
                      borderRadius: 6,
                      color: C.textMain,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Education, Certifications, and Academy */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Education Card */}
        <div
          className="row-card"
          style={{ padding: 22, borderRadius: 8, display: "flex", gap: 14, alignItems: "center" }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: C.infoDim,
              border: `1px solid ${C.info}44`,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
              alignSelf: "center",
            }}
          >
            <GraduationCap size={19} color={C.info} />
          </div>
          <div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.info, marginBottom: 6 }}>
              education
            </div>
            <p style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
              {PERSONAL_INFO.education}
            </p>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="row-card" style={{ padding: 22, borderRadius: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: C.warnDim,
                border: `1px solid ${C.warn}44`,
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
                alignSelf: "center",
              }}
            >
              <Award size={16} color={C.warn} />
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.warn }}>certifications</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingBottom: i === CERTIFICATIONS.length - 1 ? 0 : 12,
                  borderBottom: i === CERTIFICATIONS.length - 1 ? "none" : `1px solid ${C.border}`,
                }}
              >
                <ClientBadge initials={cert.initials} color={C[cert.color]} />
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 700 }}>
                    {cert.name} <span style={{ fontWeight: 500, color: C.textMuted }}>— {cert.detail}</span>
                  </div>
                  <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.textFaint, marginTop: 2 }}>
                    {cert.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academy Founder Card */}
        <div
          className="row-card"
          style={{ padding: 22, borderRadius: 8, display: "flex", gap: 14, alignItems: "center" }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: C.passDim,
              border: `1px solid ${C.pass}44`,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
              alignSelf: "center",
            }}
          >
            <BookOpen size={19} color={C.pass} />
          </div>
          <div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.pass, marginBottom: 6 }}>
              founder · ICT Success Academy
            </div>
            <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>
              Teaching ICT courses for SSC, HSC/Inter, and Honors students, plus hands-on Basic Computer Training and web-development workshops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
