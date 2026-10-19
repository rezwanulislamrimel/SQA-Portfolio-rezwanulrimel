import React from "react";
import { Github, Linkedin } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { PROFILE_IMG } from "../../assets/profileImage";
import { PERSONAL_INFO, STACK_ITEMS } from "../../data/portfolioData";
import { StatusDot } from "../common/StatusDot";

export function HeroSection() {
  return (
    <>
      {/* ── HERO ── */}
      <div
        id="home"
        className="hero-grid"
        style={{
          padding: "80px 24px 60px",
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          alignItems: "center",
          gap: 48,
        }}
      >
        <div>
          <div
            className="fade-up fade-up-1"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}
          >
            <StatusDot color={C.pass} />
            <span style={{ fontFamily: FONT_MONO, fontSize: 12.5, color: C.textMuted }}>
              status: employed · unidevGO
            </span>
          </div>

          <h1
            className="fade-up fade-up-2"
            style={{
              fontSize: "clamp(2.3rem,4.4vw,3.6rem)",
              lineHeight: 1.12,
              fontWeight: 800,
              letterSpacing: "-0.5px",
              marginBottom: 20,
            }}
          >
            I find the bugs before your users do.
          </h1>

          <p
            className="fade-up fade-up-3"
            style={{
              fontSize: 16,
              color: C.textMuted,
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 30,
            }}
          >
            {PERSONAL_INFO.name} — {PERSONAL_INFO.title} in Dhaka. Manual and automated testing across web, mobile, and API layers, with Playwright, K6, and Postman doing the heavy lifting — and I build the websites I test, too, with React and the MERN stack.
          </p>

          <div
            className="fade-up fade-up-4"
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}
          >
            <a
              href={PERSONAL_INFO.cvLink}
              download
              className="cta-primary"
              style={{
                textDecoration: "none",
                background: C.pass,
                color: "#0B132B",
                padding: "13px 24px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Download CV
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              style={{
                border: `1px solid ${C.border}`,
                cursor: "pointer",
                background: "transparent",
                color: C.textMain,
                textDecoration: "none",
                padding: "13px 18px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                border: `1px solid ${C.border}`,
                cursor: "pointer",
                background: "transparent",
                color: C.textMain,
                textDecoration: "none",
                padding: "13px 18px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>

          <div
            className="fade-up fade-up-4"
            style={{ display: "flex", gap: 18, fontSize: 13, color: C.textFaint, fontFamily: FONT_MONO }}
          >
            <span>{PERSONAL_INFO.location}</span>
            <span>{PERSONAL_INFO.phone}</span>
          </div>
        </div>

        {/* Photo + terminal stack */}
        <div className="fade-up fade-up-2" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="hero-photo-frame float-photo" style={{ borderRadius: 16, overflow: "hidden", background: C.surface }}>
            <img
              src={PROFILE_IMG}
              alt={PERSONAL_INFO.name}
              style={{ width: "100%", height: 260, objectFit: "cover", display: "block", filter: "saturate(1.03) contrast(1.02)" }}
            />
            <div
              style={{
                position: "absolute",
                left: 14,
                bottom: 14,
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(11,19,43,0.75)",
                backdropFilter: "blur(6px)",
                padding: "6px 12px",
                borderRadius: 20,
                border: `1px solid ${C.border}`,
              }}
            >
              <StatusDot color={C.pass} />
              <span style={{ fontFamily: FONT_MONO, fontSize: 11.5, color: C.textMain, fontWeight: 600 }}>
                {PERSONAL_INFO.name}
              </span>
            </div>
          </div>

          <div
            style={{
              background: "#0D1013",
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: 0,
              fontFamily: FONT_MONO,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                borderBottom: `1px solid ${C.border}`,
                background: C.surface,
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F56" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27C93F" }} />
              <span style={{ marginLeft: 8, fontSize: 12, color: C.textFaint }}>test-run.log</span>
            </div>
            <div style={{ padding: 20, fontSize: 12, lineHeight: 2 }}>
              <div style={{ color: C.textFaint }}>$ run --suite regression --env prod</div>
              <div>
                <span style={{ color: C.pass }}>✓ PASS</span>{" "}
                <span style={{ color: C.textMuted }}>Jnr SQA Engineer · unidevGO</span>
              </div>
              <div>
                <span style={{ color: C.pass }}>✓ PASS</span>{" "}
                <span style={{ color: C.textMuted }}>Founder · ICT Success Academy</span>
              </div>
              <div>
                <span style={{ color: C.pass }}>✓ PASS</span>{" "}
                <span style={{ color: C.textMuted }}>Playwright · POM structure</span>
              </div>
              <div>
                <span style={{ color: C.warn }}>⚠ RUNNING</span>{" "}
                <span style={{ color: C.textMuted }}>CI/CD · Actions, Jenkins</span>
              </div>
              <div style={{ marginTop: 8, color: C.textFaint }}>4 passed, 1 running, 0 failed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stack Strip */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          padding: "16px 24px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 22px",
            justifyContent: "center",
            fontFamily: FONT_MONO,
            fontSize: 11.5,
            color: C.textFaint,
          }}
        >
          {STACK_ITEMS.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
