import React, { useState } from "react";
import {
  ClipboardList,
  Bot,
  Network,
  Gauge,
  ShieldAlert,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Layers,
  ChevronRight,
  DollarSign,
  Clock,
  Zap,
} from "lucide-react";
import { C, FONT_SANS, FONT_HEAD, FONT_MONO } from "../../constants/theme";

const SERVICES = [
  {
    id: "manual",
    icon: ClipboardList,
    title: "Manual Testing",
    subtitle: "Thorough human-driven quality checks",
    description:
      "End-to-end manual testing covering functional, regression, smoke, sanity, and exploratory testing to catch edge-case bugs before they reach production.",
    capabilities: [
      "Test case design & execution",
      "Exploratory & session-based testing",
      "Regression & smoke test suites",
      "Cross-browser compatibility testing",
      "Defect reporting & lifecycle management",
      "UAT coordination & sign-off",
    ],
    tech: ["Jira", "TestRail", "Confluence", "Zephyr", "Excel"],
    deliverables: "Test plans, test cases, bug reports, traceability matrix",
    pricing: {
      hourly: "$12",
      project: "From $150",
      timeline: "3–7 days",
    },
    color: "#22c55e",
  },
  {
    id: "automation",
    icon: Bot,
    title: "Test Automation",
    subtitle: "Playwright · Selenium · CI/CD",
    description:
      "Build scalable, maintainable automation frameworks using Playwright and Selenium with Page Object Model patterns, integrated into CI/CD pipelines for continuous feedback.",
    capabilities: [
      "Playwright end-to-end automation",
      "Selenium WebDriver scripts",
      "Page Object Model (POM) architecture",
      "Data-driven & keyword-driven testing",
      "GitHub Actions CI/CD integration",
      "HTML & Allure test reporting",
    ],
    tech: ["Playwright", "Selenium", "Python", "GitHub Actions", "Allure"],
    deliverables: "Automation framework, CI pipeline config, test reports",
    pricing: {
      hourly: "$18",
      project: "From $300",
      timeline: "1–2 weeks",
    },
    color: "#3b82f6",
  },
  {
    id: "api",
    icon: Network,
    title: "API Testing",
    subtitle: "Postman · Newman · REST & GraphQL",
    description:
      "Comprehensive API validation — from contract testing and schema validation to negative testing and data-flow verification across REST and GraphQL endpoints.",
    capabilities: [
      "REST & GraphQL API validation",
      "Postman collection authoring",
      "Newman CLI & CI integration",
      "Schema & contract testing",
      "Authentication flow testing (OAuth, JWT)",
      "Response time & payload validation",
    ],
    tech: ["Postman", "Newman", "REST Assured", "Swagger", "cURL"],
    deliverables: "Postman collections, Newman reports, API test coverage docs",
    pricing: {
      hourly: "$15",
      project: "From $200",
      timeline: "3–5 days",
    },
    color: "#f59e0b",
  },
  {
    id: "performance",
    icon: Gauge,
    title: "Performance Testing",
    subtitle: "K6 · JMeter · Load & Stress",
    description:
      "Identify performance bottlenecks through load, stress, spike, and endurance tests. Deliver clear metrics on throughput, latency, and error rates under realistic conditions.",
    capabilities: [
      "Load & stress test scripting (K6)",
      "JMeter test plan design",
      "Throughput & latency benchmarking",
      "Spike & soak (endurance) testing",
      "Performance baseline establishment",
      "Grafana / InfluxDB reporting",
    ],
    tech: ["K6", "JMeter", "Grafana", "InfluxDB", "Locust"],
    deliverables: "Performance test scripts, benchmark reports, recommendations",
    pricing: {
      hourly: "$20",
      project: "From $350",
      timeline: "1–2 weeks",
    },
    color: "#ec4899",
  },
  {
    id: "security",
    icon: ShieldAlert,
    title: "Security Testing",
    subtitle: "OWASP ZAP · Vulnerability Scanning",
    description:
      "Surface OWASP Top 10 vulnerabilities through automated scanning and manual probing — ensuring applications are hardened against injection, XSS, CSRF, and broken auth.",
    capabilities: [
      "OWASP Top 10 vulnerability scanning",
      "ZAP automated & manual scanning",
      "SQL injection & XSS probing",
      "Authentication & session management checks",
      "Security test report writing",
      "Remediation verification testing",
    ],
    tech: ["OWASP ZAP", "Burp Suite", "Nmap", "SQLMap", "Nikto"],
    deliverables: "Vulnerability reports, risk ratings, remediation guides",
    pricing: {
      hourly: "$22",
      project: "From $400",
      timeline: "1–2 weeks",
    },
    color: "#ef4444",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Testing",
    subtitle: "Appium · Android & iOS",
    description:
      "Native and hybrid mobile app testing on real devices and emulators using Appium — covering gestures, orientation, network conditions, and device-specific behaviors.",
    capabilities: [
      "Appium iOS & Android automation",
      "Real device & emulator testing",
      "Gesture & touch interaction testing",
      "Network throttling & offline scenarios",
      "App performance profiling",
      "Cross-device compatibility checks",
    ],
    tech: ["Appium", "Android Studio", "XCUITest", "BrowserStack", "Xcode"],
    deliverables: "Mobile test scripts, device matrix reports, compatibility docs",
    pricing: {
      hourly: "$20",
      project: "From $350",
      timeline: "1–2 weeks",
    },
    color: "#8b5cf6",
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState("manual");
  const active = SERVICES.find((s) => s.id === activeId) || SERVICES[0];
  const ActiveIcon = active.icon;

  return (
    <section
      id="services"
      style={{
        padding: "80px 48px",
        fontFamily: FONT_SANS,
        position: "relative",
      }}
    >
      {/* ── Header ── */}
      <div style={{ marginBottom: 48 }}>
        {/* Eyebrow */}
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
          <Layers size={12} color={C.accent} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: C.accent,
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            🛠️ SERVICES
          </span>
        </div>

        {/* Two-tone heading */}
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
          What I{" "}
          <span style={{ color: C.accent }}>Offer</span>
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
          End-to-end quality assurance services — from exploratory testing to
          full automation pipelines. Transparent pricing, no hidden fees.
        </p>
      </div>

      {/* ── Split Layout ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 24,
          alignItems: "start",
        }}
        className="services-grid"
      >
        {/* Left — service list */}
        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "14px 18px",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 11,
                color: C.textFaint,
                letterSpacing: "0.08em",
              }}
            >
              // select a service
            </span>
          </div>
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            const isActive = svc.id === activeId;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveId(svc.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  width: "100%",
                  textAlign: "left",
                  border: 0,
                  borderBottom: `1px solid ${C.border}`,
                  background: isActive
                    ? `rgba(34,197,94,0.07)`
                    : "transparent",
                  borderLeft: isActive
                    ? `3px solid ${svc.color}`
                    : "3px solid transparent",
                  padding: "15px 18px",
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                }}
              >
                {/* icon bubble */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: isActive
                      ? `${svc.color}18`
                      : "rgba(255,255,255,0.03)",
                    border: `1px solid ${isActive ? svc.color + "44" : C.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.18s ease",
                  }}
                >
                  <Icon
                    size={18}
                    color={isActive ? svc.color : C.textFaint}
                    style={{ transition: "color 0.18s ease" }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: isActive ? "#fff" : C.textMuted,
                      transition: "color 0.18s ease",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {svc.title}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11.5,
                        color: C.textFaint,
                        fontFamily: FONT_MONO,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {svc.subtitle}
                    </span>
                    {/* price tag in list */}
                    <span
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: isActive ? svc.color : C.textFaint,
                        fontFamily: FONT_MONO,
                        whiteSpace: "nowrap",
                        marginLeft: "auto",
                        flexShrink: 0,
                      }}
                    >
                      {svc.pricing.hourly}/hr
                    </span>
                  </div>
                </div>

                <ChevronRight
                  size={15}
                  color={isActive ? svc.color : C.textFaint}
                  style={{
                    flexShrink: 0,
                    transform: isActive ? "translateX(2px)" : "none",
                    transition: "all 0.18s ease",
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Right — detail panel */}
        <div
          key={active.id}
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            overflow: "hidden",
            animation: "fadeUp 0.28s cubic-bezier(.2,.7,.3,1) both",
          }}
        >
          {/* panel header */}
          <div
            style={{
              padding: "24px 28px 20px",
              borderBottom: `1px solid ${C.border}`,
              background: `linear-gradient(135deg, ${active.color}08 0%, transparent 70%)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${active.color}18`,
                  border: `1px solid ${active.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ActiveIcon size={24} color={active.color} />
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: FONT_HEAD,
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {active.title}
                </h3>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11.5,
                    color: active.color,
                    display: "block",
                    marginTop: 3,
                  }}
                >
                  {active.subtitle}
                </span>
              </div>
            </div>
            <p
              style={{
                color: C.textMuted,
                fontSize: 13.5,
                lineHeight: 1.65,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              {active.description}
            </p>
          </div>

          {/* ── Pricing Card ── */}
          <div
            style={{
              margin: "20px 28px 0",
              background: `linear-gradient(135deg, ${active.color}0a 0%, rgba(255,255,255,0.02) 100%)`,
              border: `1px solid ${active.color}30`,
              borderRadius: 12,
              padding: "18px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 14,
              }}
            >
              <DollarSign size={13} color={active.color} />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  color: active.color,
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                }}
              >
                PRICING
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 12,
              }}
              className="pricing-grid"
            >
              {/* Hourly */}
              <div
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: "12px 14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: C.textFaint,
                    fontFamily: FONT_MONO,
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  HOURLY
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    fontFamily: FONT_HEAD,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {active.pricing.hourly}
                </div>
                <div
                  style={{
                    fontSize: 10.5,
                    color: C.textFaint,
                    marginTop: 3,
                  }}
                >
                  per hour
                </div>
              </div>

              {/* Project */}
              <div
                style={{
                  background: `${active.color}0a`,
                  border: `1px solid ${active.color}30`,
                  borderRadius: 10,
                  padding: "12px 14px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -8,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: active.color,
                    color: "#050505",
                    fontSize: 9,
                    fontWeight: 800,
                    fontFamily: FONT_MONO,
                    padding: "2px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.06em",
                  }}
                >
                  POPULAR
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: C.textFaint,
                    fontFamily: FONT_MONO,
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  PROJECT
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    fontFamily: FONT_HEAD,
                    color: active.color,
                    lineHeight: 1,
                  }}
                >
                  {active.pricing.project.replace("From ", "")}
                </div>
                <div
                  style={{
                    fontSize: 10.5,
                    color: C.textFaint,
                    marginTop: 3,
                  }}
                >
                  starting from
                </div>
              </div>

              {/* Timeline */}
              <div
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: "12px 14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: C.textFaint,
                    fontFamily: FONT_MONO,
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  TIMELINE
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    fontFamily: FONT_HEAD,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {active.pricing.timeline}
                </div>
                <div
                  style={{
                    fontSize: 10.5,
                    color: C.textFaint,
                    marginTop: 3,
                  }}
                >
                  avg. delivery
                </div>
              </div>
            </div>
          </div>

          {/* capabilities */}
          <div style={{ padding: "22px 28px" }}>
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 11,
                color: C.textFaint,
                letterSpacing: "0.1em",
                marginBottom: 14,
              }}
            >
              // capabilities
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px 16px",
              }}
              className="caps-grid"
            >
              {active.capabilities.map((cap, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                  }}
                >
                  <CheckCircle2
                    size={14}
                    color={active.color}
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <span
                    style={{
                      fontSize: 12.5,
                      color: C.textMuted,
                      lineHeight: 1.5,
                    }}
                  >
                    {cap}
                  </span>
                </div>
              ))}
            </div>

            {/* tech stack */}
            <div style={{ marginTop: 22 }}>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  color: C.textFaint,
                  letterSpacing: "0.1em",
                  marginBottom: 10,
                }}
              >
                // tech stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {active.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: `${active.color}12`,
                      border: `1px solid ${active.color}30`,
                      color: active.color,
                      borderRadius: 6,
                      padding: "4px 10px",
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* deliverables */}
            <div
              style={{
                marginTop: 20,
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: "12px 16px",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <ArrowRight
                size={14}
                color={active.color}
                style={{ flexShrink: 0, marginTop: 2 }}
              />
              <div>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 10.5,
                    color: C.textFaint,
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: 3,
                  }}
                >
                  DELIVERABLES
                </span>
                <span
                  style={{ fontSize: 12.5, color: C.textMuted, lineHeight: 1.5 }}
                >
                  {active.deliverables}
                </span>
              </div>
            </div>

            {/* Get a quote CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="cta-primary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginTop: 20,
                padding: "12px 0",
                borderRadius: 10,
                background: active.color,
                color: "#050505",
                textDecoration: "none",
                fontSize: 13.5,
                fontWeight: 700,
                fontFamily: FONT_SANS,
                border: 0,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <Zap size={15} strokeWidth={2.5} />
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 860px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .caps-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default ServicesSection;
