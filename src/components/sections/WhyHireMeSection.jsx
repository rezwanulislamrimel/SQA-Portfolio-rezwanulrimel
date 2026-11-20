import React from "react";
import {
  Target,
  Clock,
  MessageSquareText,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { C, FONT_SANS, FONT_HEAD, FONT_MONO } from "../../constants/theme";

const REASONS = [
  {
    icon: Target,
    title: "Detail-Obsessed Testing",
    description:
      "I don't just check happy paths — I dig into edge cases, boundary values, and the exact scenarios users will actually hit in production.",
    color: "#22c55e",
  },
  {
    icon: Clock,
    title: "Builder's Perspective",
    description:
      "5+ years of frontend & Shopify development means I test with a developer's understanding of how code actually breaks, not just how it should behave.",
    color: "#3b82f6",
  },
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    description:
      "Every bug report I write has exact repro steps, expected vs actual behavior, screenshots, and severity — your dev team won't waste time asking 'how to reproduce this?'",
    color: "#f59e0b",
  },
  {
    icon: TrendingUp,
    title: "End-to-End Coverage",
    description:
      "From manual exploratory testing through Playwright automation, API testing with Postman, to K6 performance tests — one person, full quality pipeline.",
    color: "#ec4899",
  },
];

export function WhyHireMeSection() {
  return (
    <section
      id="why-hire"
      style={{
        padding: "80px 48px",
        fontFamily: FONT_SANS,
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
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
          <Sparkles size={12} color={C.accent} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: C.accent,
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            🎯 WHY ME
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
          Why Hire <span style={{ color: C.accent }}>Me</span>
        </h2>
        <p
          style={{
            color: C.textMuted,
            fontSize: 15,
            marginTop: 10,
            maxWidth: 480,
            lineHeight: 1.65,
          }}
        >
          What sets me apart from other QA engineers at this experience level.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
        }}
        className="why-grid"
      >
        {REASONS.map((r, i) => {
          const Icon = r.icon;
          return (
            <div
              key={i}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: "28px 24px",
                transition: "border-color 0.2s ease, transform 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = r.color + "55";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `${r.color}14`,
                  border: `1px solid ${r.color}33`,
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 16,
                }}
              >
                <Icon size={20} color={r.color} />
              </div>
              <h3
                style={{
                  fontFamily: FONT_HEAD,
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 8px 0",
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  color: C.textMuted,
                  fontSize: 13.5,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {r.description}
              </p>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default WhyHireMeSection;
