import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { C, FONT_SANS, FONT_HEAD, FONT_MONO } from "../constants/theme";
import {
  PERSONAL_INFO,
  EXPERIENCES,
  SKILL_CATEGORIES,
  CERTIFICATIONS,
} from "../data/portfolioData";

export default function ResumePage() {
  return (
    <div
      style={{
        fontFamily: FONT_SANS,
        color: C.textMain,
        background: C.bg,
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; }
        body { background: ${C.bg}; color: ${C.textMain}; }
        @media print {
          body { background: #fff !important; color: #111 !important; }
          .no-print { display: none !important; }
          .resume-container { max-width: 100% !important; padding: 0 !important; }
        }
        @media (max-width: 720px) {
          .resume-skills-grid { grid-template-columns: 1fr !important; }
          .resume-header-info { flex-direction: column !important; gap: 10px !important; }
        }
      `}</style>

      {/* Top Bar */}
      <header
        className="no-print"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(5,5,5,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${C.border}`,
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: C.textMuted,
            textDecoration: "none",
            fontSize: 13.5,
            fontWeight: 600,
          }}
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => window.print()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              background: "transparent",
              color: C.textMuted,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Print
          </button>
          <a
            href={PERSONAL_INFO.cvLink}
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 8,
              background: C.accent,
              color: "#050505",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            <Download size={14} /> Download PDF
          </a>
        </div>
      </header>

      {/* Resume Content */}
      <div
        className="resume-container"
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: "48px 32px 80px",
        }}
      >
        {/* ── Header ── */}
        <div style={{ marginBottom: 36 }}>
          <h1
            style={{
              fontFamily: FONT_HEAD,
              fontSize: 32,
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 6px 0",
            }}
          >
            {PERSONAL_INFO.name}
          </h1>
          <p
            style={{
              fontFamily: FONT_MONO,
              fontSize: 15,
              color: C.accent,
              fontWeight: 600,
              margin: "0 0 16px 0",
            }}
          >
            {PERSONAL_INFO.title}
          </p>
          <div
            className="resume-header-info"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              fontSize: 13,
              color: C.textMuted,
            }}
          >
            {[
              { icon: MapPin, text: PERSONAL_INFO.location },
              { icon: Mail, text: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
              { icon: Phone, text: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
              { icon: Github, text: "GitHub", href: PERSONAL_INFO.github },
              { icon: Linkedin, text: "LinkedIn", href: PERSONAL_INFO.linkedin },
            ].map((item, i) => {
              const Icon = item.icon;
              const Tag = item.href ? "a" : "span";
              return (
                <Tag
                  key={i}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: item.href ? C.accent : C.textMuted,
                    textDecoration: "none",
                  }}
                >
                  <Icon size={14} />
                  {item.text}
                </Tag>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: C.border, marginBottom: 32 }} />

        {/* ── Professional Summary ── */}
        <div style={{ marginBottom: 36 }}>
          <h2
            style={{
              fontFamily: FONT_HEAD,
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 12px 0",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Briefcase size={16} color={C.accent} />
            Professional Summary
          </h2>
          <p
            style={{
              color: C.textMuted,
              fontSize: 14,
              lineHeight: 1.75,
            }}
          >
            Detail-oriented SQA Engineer with 1+ years of professional experience in manual testing, 
            test automation (Playwright, Selenium), API testing (Postman/Newman), and performance testing (K6, JMeter). 
            Built on a foundation of 5+ years in frontend development and e-commerce, bringing a developer's 
            perspective to quality assurance. Experienced in Agile/Scrum workflows, CI/CD pipeline integration, 
            and comprehensive bug reporting with Jira.
          </p>
        </div>

        {/* ── Experience ── */}
        <div style={{ marginBottom: 36 }}>
          <h2
            style={{
              fontFamily: FONT_HEAD,
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 20px 0",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Briefcase size={16} color={C.accent} />
            Work Experience
          </h2>
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              style={{
                marginBottom: 28,
                paddingLeft: 20,
                borderLeft: `2px solid ${exp.status === "active" ? C.accent : C.border}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: C.accent,
                      margin: "2px 0 0",
                      fontWeight: 600,
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
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
              <p
                style={{
                  fontSize: 12,
                  color: C.textFaint,
                  margin: "4px 0 10px",
                }}
              >
                {exp.location}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 16,
                  listStyle: "none",
                }}
              >
                {exp.points.slice(0, 4).map((pt, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 13,
                      color: C.textMuted,
                      lineHeight: 1.65,
                      marginBottom: 5,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <CheckCircle2
                      size={12}
                      color={C.accent}
                      style={{ flexShrink: 0, marginTop: 4 }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Skills ── */}
        <div style={{ marginBottom: 36 }}>
          <h2
            style={{
              fontFamily: FONT_HEAD,
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 20px 0",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Code2 size={16} color={C.accent} />
            Technical Skills
          </h2>
          <div
            className="resume-skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}
          >
            {SKILL_CATEGORIES.filter(
              (s) => !s.category.includes("AI")
            ).map((cat, i) => (
              <div
                key={i}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    color: C.accent,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    marginBottom: 8,
                  }}
                >
                  {cat.category}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 5,
                  }}
                >
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: 12,
                        color: C.textMuted,
                        background: "rgba(255,255,255,0.03)",
                        border: `1px solid ${C.border}`,
                        borderRadius: 5,
                        padding: "3px 8px",
                        fontFamily: FONT_MONO,
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

        {/* ── Education & Certifications ── */}
        <div style={{ marginBottom: 36 }}>
          <h2
            style={{
              fontFamily: FONT_HEAD,
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 20px 0",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <GraduationCap size={16} color={C.accent} />
            Education
          </h2>
          <div
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              padding: "16px 20px",
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>
              {PERSONAL_INFO.education}
            </div>
          </div>

          <h2
            style={{
              fontFamily: FONT_HEAD,
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 16px 0",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Award size={16} color={C.accent} />
            Certifications
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>
                    {cert.name}
                  </span>
                  <span style={{ color: C.textFaint, fontSize: 13, marginLeft: 10 }}>
                    — {cert.detail}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    color: C.textFaint,
                  }}
                >
                  {cert.meta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
