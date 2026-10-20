import React, { useState } from "react";
import { Github, Linkedin, Bug, ShieldCheck, Terminal, Zap, CheckCircle2 } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { PROFILE_IMG } from "../../assets/profileImage";
import { PERSONAL_INFO, STACK_ITEMS } from "../../data/portfolioData";
import { StatusDot } from "../common/StatusDot";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("tests"); // "tests" | "bughunter"

  const trustMetrics = [
    { label: "0 Prod Escapes", desc: "Zero critical bugs leaked on release", icon: ShieldCheck, color: C.pass },
    { label: "180+ Bugs Caught", desc: "Isolated before reaching production", icon: Bug, color: C.fail },
    { label: "99.8% Suite Fidelity", desc: "Automated POM Playwright & Postman", icon: CheckCircle2, color: C.info },
    { label: "< 24h Triage Turnaround", desc: "Video repro, logs & Jira steps", icon: Zap, color: C.warn },
  ];

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
              status: employed · unidevGO · Open for Quality Consulting
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
              color: "#FFFFFF",
              textShadow: "0 3px 18px rgba(0, 0, 0, 0.65)",
            }}
          >
            I hunt down bugs before your users ever see them.
          </h1>

          <p
            className="fade-up fade-up-3"
            style={{
              fontSize: 16.5,
              color: "#E2E8F0",
              lineHeight: 1.75,
              maxWidth: 520,
              marginBottom: 26,
              fontWeight: 450,
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
            }}
          >
            {PERSONAL_INFO.name} — {PERSONAL_INFO.title} in Dhaka. I protect digital products, e-commerce checkout flows, and web apps from costly downtime and edge-case defects with Playwright, Postman, and K6 automated test suites.
          </p>

          {/* Action CTAs */}
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
            style={{ display: "flex", gap: 18, fontSize: 13, color: C.textFaint, fontFamily: FONT_MONO, marginBottom: 32 }}
          >
            <span>{PERSONAL_INFO.location}</span>
            <span>{PERSONAL_INFO.phone}</span>
          </div>

          {/* Client Trust Metrics Strip */}
          <div
            className="fade-up fade-up-4"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              background: "rgba(28, 37, 65, 0.85)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              padding: 14,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            {trustMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      background: `${item.color}22`,
                      border: `1px solid ${item.color}55`,
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Icon size={14} color={item.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>{item.label}</div>
                    <div style={{ fontSize: 11.5, color: "#CBD5E1", lineHeight: 1.35 }}>{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Photo + Dual-Tab Interactive Terminal */}
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
                background: "rgba(11,19,43,0.85)",
                backdropFilter: "blur(8px)",
                padding: "6px 14px",
                borderRadius: 20,
                border: `1px solid ${C.border}`,
              }}
            >
              <StatusDot color={C.pass} />
              <span style={{ fontFamily: FONT_MONO, fontSize: 11.5, color: C.textMain, fontWeight: 600 }}>
                {PERSONAL_INFO.name} · Defect Hunter
              </span>
            </div>
          </div>

          {/* Interactive SQA Terminal Box */}
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
            {/* Terminal Tab Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderBottom: `1px solid ${C.border}`,
                background: C.surface,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F56" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27C93F" }} />
              </div>

              {/* Tabs */}
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  onClick={() => setActiveTab("tests")}
                  style={{
                    background: activeTab === "tests" ? "#0D1013" : "transparent",
                    border: `1px solid ${activeTab === "tests" ? C.borderHi : "transparent"}`,
                    color: activeTab === "tests" ? C.textMain : C.textFaint,
                    borderRadius: 6,
                    padding: "4px 10px",
                    fontSize: 11.5,
                    fontFamily: FONT_MONO,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Terminal size={12} color={activeTab === "tests" ? C.pass : C.textFaint} />
                  test-run.log
                </button>
                <button
                  onClick={() => setActiveTab("bughunter")}
                  style={{
                    background: activeTab === "bughunter" ? "#0D1013" : "transparent",
                    border: `1px solid ${activeTab === "bughunter" ? C.borderHi : "transparent"}`,
                    color: activeTab === "bughunter" ? C.textMain : C.textFaint,
                    borderRadius: 6,
                    padding: "4px 10px",
                    fontSize: 11.5,
                    fontFamily: FONT_MONO,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Bug size={12} color={activeTab === "bughunter" ? C.fail : C.textFaint} />
                  bug-hunter.live
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.fail, display: "inline-block" }} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            {activeTab === "tests" ? (
              <div style={{ padding: "18px 20px", fontSize: 12, lineHeight: 1.9 }}>
                <div style={{ color: C.textFaint }}>$ playwright test --project=all --reporter=html</div>
                <div>
                  <span style={{ color: C.pass }}>✓ PASS</span>{" "}
                  <span style={{ color: C.textMuted }}>[E2E] unidevGO production portal regression</span>
                </div>
                <div>
                  <span style={{ color: C.pass }}>✓ PASS</span>{" "}
                  <span style={{ color: C.textMuted }}>[API] Restful-Booker 24 CRUD test cases validated</span>
                </div>
                <div>
                  <span style={{ color: C.pass }}>✓ PASS</span>{" "}
                  <span style={{ color: C.textMuted }}>[LOAD] K6 performance suite (500 VUs / 0% failures)</span>
                </div>
                <div>
                  <span style={{ color: C.warn }}>⚠ RUNNING</span>{" "}
                  <span style={{ color: C.textMuted }}>[CI/CD] GitHub Actions automated branch deploy</span>
                </div>
                <div style={{ marginTop: 8, color: C.pass, fontWeight: 700 }}>
                  4 test suites passed, 0 failures, 1 running
                </div>
              </div>
            ) : (
              <div style={{ padding: "18px 20px", fontSize: 11.5, lineHeight: 1.85 }}>
                <div style={{ color: C.textFaint }}>$ intercept --stream live --watch-defects</div>
                <div>
                  <span style={{ color: C.fail }}>[10:14:02] 🐞 REPRODUCED:</span>{" "}
                  <span style={{ color: C.textMuted }}>Double-click payment race condition</span>
                </div>
                <div>
                  <span style={{ color: C.info }}>[10:14:04] 📝 JIRA #QA-184:</span>{" "}
                  <span style={{ color: C.textMuted }}>Attached video repro + HAR trace & logs</span>
                </div>
                <div>
                  <span style={{ color: C.warn }}>[10:14:15] ⚙️ PATCH APPLIED:</span>{" "}
                  <span style={{ color: C.textMuted }}>Debounce & atomic order lock added by dev</span>
                </div>
                <div>
                  <span style={{ color: C.pass }}>[10:14:22] 🛡️ RE-TEST VERIFIED:</span>{" "}
                  <span style={{ color: C.textMuted }}>100 rapid concurrent clicks · 0 duplicates</span>
                </div>
                <div style={{ marginTop: 6, color: C.pass, fontWeight: 700 }}>
                  ✓ STATUS: DEFECT CLOSED · PRODUCTION SAFE
                </div>
              </div>
            )}
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
