import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { C, FONT_SANS, FONT_HEAD, FONT_MONO } from "../../constants/theme";
import { CERTIFICATIONS } from "../../data/portfolioData";

const CERT_COLORS = {
  warn: "#f59e0b",
  info: "#3b82f6",
  pass: "#22c55e",
};

export function CertificationsSection() {
  return (
    <section
      id="certifications"
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
          <Award size={12} color={C.accent} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: C.accent,
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            📜 CERTIFICATIONS
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
          Education & <span style={{ color: C.accent }}>Certifications</span>
        </h2>
      </div>

      {/* Cert Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
        }}
        className="cert-grid"
      >
        {CERTIFICATIONS.map((cert, i) => {
          const color = CERT_COLORS[cert.color] || C.accent;
          return (
            <div
              key={i}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderTop: `3px solid ${color}`,
                borderRadius: 16,
                padding: "28px 24px",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Badge icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${color}14`,
                  border: `1px solid ${color}33`,
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 18,
                  fontFamily: FONT_MONO,
                  fontSize: 16,
                  fontWeight: 800,
                  color: color,
                }}
              >
                {cert.initials}
              </div>

              <h3
                style={{
                  fontFamily: FONT_HEAD,
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 6px 0",
                }}
              >
                {cert.name}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: C.textMuted,
                  margin: "0 0 8px 0",
                  lineHeight: 1.5,
                }}
              >
                {cert.detail}
              </p>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  color: color,
                  background: `${color}14`,
                  border: `1px solid ${color}30`,
                  borderRadius: 6,
                  padding: "3px 10px",
                  display: "inline-block",
                }}
              >
                {cert.meta}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default CertificationsSection;
