import React, { useState } from "react";
import { Bug, ShieldCheck, CheckCircle2, AlertTriangle, Play, RefreshCw, Terminal, Zap } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { SectionTag } from "../common/SectionTag";
import { StatusDot } from "../common/StatusDot";

export function BugDefenseSection() {
  const [simScenario, setSimScenario] = useState(0);
  const [simStep, setSimStep] = useState("idle"); // idle | scanning | defect | fixing | resolved

  const scenarios = [
    {
      title: "Checkout Double-Click Glitch",
      icon: "💳",
      edgeCase: "User impatiently clicks 'Place Order' 3 times during high network latency.",
      risk: "Duplicate credit card charge, double inventory deduction, unhappy customer.",
      repro: "Jira #QA-109 with HAR network archive, network throttling video, and payload dump.",
      solution: "Playwright POM test automated with 50 parallel requests. Mutex lock & frontend debounce verified.",
      result: "Double-charge prevented. $0 revenue lost.",
    },
    {
      title: "Token Expiration During Form Submit",
      icon: "🔑",
      edgeCase: "JWT token expires while user fills out a 20-field application form.",
      risk: "Form submission throws 401 Unauthenticated and wipes out all typed user inputs.",
      repro: "Simulated token expiry via Postman pre-request scripts and captured console state.",
      solution: "Silent refresh token interceptor verified. Seamless background re-auth with zero data loss.",
      result: "User experience preserved. 100% form completion rate.",
    },
    {
      title: "Mobile Viewport Button Overflow",
      icon: "📱",
      edgeCase: "On small screens (360px width), the 'Agree & Continue' CTA is pushed offscreen.",
      risk: "Mobile users are completely blocked from completing onboarding.",
      repro: "Cross-device browser matrix audit across iPhone SE, Galaxy Z, and iPad Mini.",
      solution: "Dynamic CSS sticky layout verified across all breakpoints in Playwright device emulation.",
      result: "Mobile conversion restored across all screen resolutions.",
    },
  ];

  const current = scenarios[simScenario];

  const runSimulation = () => {
    setSimStep("scanning");
    setTimeout(() => {
      setSimStep("defect");
      setTimeout(() => {
        setSimStep("fixing");
        setTimeout(() => {
          setSimStep("resolved");
        }, 1600);
      }, 1600);
    }, 1200);
  };

  const pillars = [
    {
      number: "01",
      title: "Shift-Left Requirements Review",
      desc: "I review SRS documentation and user stories before development begins, catching ambiguity and missing error states before code is even written.",
      benefit: "Saves 40% of rework engineering costs.",
    },
    {
      number: "02",
      title: "Exploratory & Edge-Case Hunting",
      desc: "Real users never follow the happy path. I rigorously test rapid clicks, bad data injections, slow 3G connections, and unexpected navigation.",
      benefit: "Guarantees resilience under chaotic user behavior.",
    },
    {
      number: "03",
      title: "Automated Regression Shield",
      desc: "Every fixed defect gets an automated Playwright or Postman regression test integrated into CI/CD pipelines, making sure bugs never re-occur.",
      benefit: "Zero regressions on future deployments.",
    },
    {
      number: "04",
      title: "Zero-Friction Developer Triage",
      desc: "No vague 'it doesn't work' tickets. Every Jira report includes exact reproduction steps, screen recording clips, console logs, and network payloads.",
      benefit: "Developers fix issues 3x faster with zero guesswork.",
    },
  ];

  return (
    <section
      id="bug-defense"
      style={{
        padding: "80px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        scrollMarginTop: 64,
      }}
    >
      <SectionTag>// client-trust.defect-prevention</SectionTag>

      <div style={{ maxWidth: 760, marginBottom: 44 }}>
        <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
          How I protect your software from costly bugs
        </h2>
        <p style={{ fontSize: 15.5, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>
          A single checkout glitch or broken flow damages customer trust and costs real revenue. Here is my 4-pillar quality defense system that ensures your product launches safely.
        </p>
      </div>

      {/* 4 Trust Pillars Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
          marginBottom: 48,
        }}
      >
        {pillars.map((item, idx) => (
          <div
            key={idx}
            className="row-card status-strip-pass"
            style={{
              padding: 24,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  color: C.pass,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                // {item.number}
              </div>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, marginBottom: 10, color: C.textMain }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.65, margin: "0 0 16px 0" }}>
                {item.desc}
              </p>
            </div>
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 11.5,
                color: C.info,
                background: "rgba(56, 189, 248, 0.08)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                padding: "6px 10px",
                borderRadius: 6,
              }}
            >
              ✓ {item.benefit}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Bug Hunter & Resolution Simulator */}
      <div
        className="row-card"
        style={{
          padding: 28,
          borderRadius: 12,
          border: `1px solid ${C.borderHi}`,
          background: "linear-gradient(180deg, #1C2541 0%, #151D33 100%)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14, marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "rgba(0, 245, 212, 0.12)",
                border: `1px solid ${C.pass}44`,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Bug size={18} color={C.pass} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Interactive Bug Triage Simulator</div>
              <div style={{ fontSize: 12.5, color: C.textFaint, fontFamily: FONT_MONO }}>
                See how I isolate, document, and verify real production edge cases
              </div>
            </div>
          </div>

          {/* Scenario Selector Pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {scenarios.map((sc, i) => (
              <button
                key={i}
                onClick={() => {
                  setSimScenario(i);
                  setSimStep("idle");
                }}
                style={{
                  border: `1px solid ${simScenario === i ? C.pass : C.border}`,
                  background: simScenario === i ? "rgba(0, 245, 212, 0.15)" : C.surfaceAlt,
                  color: simScenario === i ? C.pass : C.textMuted,
                  borderRadius: 6,
                  padding: "6px 12px",
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  cursor: "pointer",
                  fontWeight: simScenario === i ? 700 : 500,
                  transition: "all 0.15s ease",
                }}
              >
                {sc.icon} {sc.title}
              </button>
            ))}
          </div>
        </div>

        {/* Simulator Interactive Screen */}
        <div
          style={{
            background: "#0B101D",
            border: `1px solid ${C.border}`,
            borderRadius: 10,
            padding: 22,
            fontFamily: FONT_MONO,
          }}
        >
          {simStep === "idle" && (
            <div style={{ textAlign: "center", padding: "26px 14px" }}>
              <div style={{ fontSize: 14, color: C.textMain, fontWeight: 600, marginBottom: 8 }}>
                Scenario: {current.title}
              </div>
              <p style={{ fontSize: 13, color: C.textMuted, maxWidth: 540, margin: "0 auto 20px" }}>
                "{current.edgeCase}"
              </p>
              <button
                onClick={runSimulation}
                className="cta-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: C.pass,
                  color: "#0B132B",
                  border: 0,
                  borderRadius: 8,
                  padding: "11px 22px",
                  fontWeight: 700,
                  fontSize: 13.5,
                  cursor: "pointer",
                }}
              >
                <Play size={15} fill="#0B132B" />
                Run SQA Bug Hunt Simulation
              </button>
            </div>
          )}

          {simStep === "scanning" && (
            <div style={{ textAlign: "center", padding: "28px 14px" }}>
              <RefreshCw
                size={28}
                color={C.info}
                style={{ animation: "floatSlow1 2s linear infinite", marginBottom: 12 }}
              />
              <div style={{ color: C.info, fontSize: 13.5, fontWeight: 600 }}>
                [SCANNING] Exercising boundary states & parallel click streams...
              </div>
              <div style={{ color: C.textFaint, fontSize: 12, marginTop: 6 }}>
                Simulating network latency + concurrent user triggers
              </div>
            </div>
          )}

          {simStep === "defect" && (
            <div style={{ padding: "10px 4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.fail, fontWeight: 700, fontSize: 13.5, marginBottom: 10 }}>
                <AlertTriangle size={18} />
                DEFECT ISOLATED: {current.title}
              </div>
              <div style={{ background: "rgba(255, 107, 107, 0.08)", border: "1px solid rgba(255, 107, 107, 0.25)", borderRadius: 8, padding: 14, marginBottom: 12 }}>
                <div style={{ color: C.textMain, fontSize: 12.5, marginBottom: 6 }}>
                  <strong style={{ color: C.fail }}>Potential Risk:</strong> {current.risk}
                </div>
                <div style={{ color: C.textMuted, fontSize: 12 }}>
                  <strong style={{ color: C.info }}>Action Taken:</strong> {current.repro}
                </div>
              </div>
              <div style={{ color: C.textFaint, fontSize: 12 }}>
                ⏳ Sending reproducible ticket to engineering team...
              </div>
            </div>
          )}

          {simStep === "fixing" && (
            <div style={{ padding: "10px 4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.warn, fontWeight: 700, fontSize: 13.5, marginBottom: 10 }}>
                <Zap size={18} color={C.warn} />
                AUTOMATED REGRESSION SHIELD DEPLOYED
              </div>
              <div style={{ background: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.25)", borderRadius: 8, padding: 14, marginBottom: 12 }}>
                <div style={{ color: C.textMain, fontSize: 12.5, marginBottom: 6 }}>
                  <strong style={{ color: C.warn }}>Fix Verification:</strong> {current.solution}
                </div>
                <div style={{ color: C.pass, fontSize: 12 }}>
                  ✓ Playwright test added to CI/CD pipeline. Will run on every future push.
                </div>
              </div>
              <div style={{ color: C.textFaint, fontSize: 12 }}>
                ⏳ Final quality sign-off in progress...
              </div>
            </div>
          )}

          {simStep === "resolved" && (
            <div style={{ padding: "10px 4px", textAlign: "center" }}>
              <CheckCircle2 size={34} color={C.pass} style={{ marginBottom: 10 }} />
              <div style={{ color: C.pass, fontWeight: 800, fontSize: 16, marginBottom: 6 }}>
                ✓ DEFECT PERMANENTLY RESOLVED & VERIFIED
              </div>
              <div style={{ color: C.textMain, fontSize: 13.5, maxWidth: 480, margin: "0 auto 16px" }}>
                {current.result}
              </div>
              <button
                onClick={() => setSimStep("idle")}
                style={{
                  background: C.surfaceAlt,
                  color: C.textMain,
                  border: `1px solid ${C.borderHi}`,
                  borderRadius: 6,
                  padding: "8px 16px",
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  cursor: "pointer",
                }}
              >
                Reset & Try Another Scenario ↺
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BugDefenseSection;
