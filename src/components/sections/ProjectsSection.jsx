import React from "react";
import { Github } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { PROJECTS, LOCAL_CLIENTS, PERSONAL_INFO } from "../../data/portfolioData";
import { SectionTag } from "../common/SectionTag";
import { StatusDot } from "../common/StatusDot";
import { ClientBadge } from "../common/ClientBadge";

export function ProjectsSection() {
  const clientColors = [C.pass, C.warn, C.fail, C.info, C.pass];

  return (
    <section
      id="projects"
      style={{
        padding: "80px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        scrollMarginTop: 64,
      }}
    >
      <SectionTag>// projects.log</SectionTag>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 36,
        }}
      >
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, margin: 0 }}>Projects & work</h2>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            textDecoration: "none",
            color: C.pass,
            fontSize: 13,
            fontWeight: 600,
            fontFamily: FONT_MONO,
          }}
        >
          <Github size={15} />
          Visit GitHub for all projects →
        </a>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 14,
          marginBottom: 56,
        }}
      >
        {PROJECTS.map((proj, i) => (
          <div
            key={i}
            className="row-card status-strip-pass"
            style={{ borderRadius: 8, padding: 22 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  color: C.pass,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <StatusDot color={C.pass} /> {proj.tag}
              </span>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{proj.title}</h3>
            <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.6, marginBottom: 16 }}>
              {proj.desc}
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {proj.tech.map((t, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 10.5,
                    background: C.surfaceAlt,
                    border: `1px solid ${C.border}`,
                    padding: "3px 8px",
                    borderRadius: 4,
                    color: C.textMuted,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Local & Freelance Network */}
      <div>
        <SectionTag>// local & freelance network</SectionTag>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          {LOCAL_CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="row-card"
              style={{
                borderRadius: 8,
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <ClientBadge initials={client.initials} color={clientColors[idx % clientColors.length]} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{client.name}</div>
                <div style={{ fontSize: 11.5, color: C.textFaint, marginTop: 2 }}>
                  {client.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
