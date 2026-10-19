import React, { useState } from "react";
import { C, FONT_MONO } from "../../constants/theme";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { SectionTag } from "../common/SectionTag";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 24px",
        maxWidth: 680,
        margin: "0 auto",
        scrollMarginTop: 64,
      }}
    >
      <SectionTag>// contact.log</SectionTag>
      <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: 36 }}>Get in touch</h2>

      {/* Contact Info Grid */}
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginBottom: 28,
        }}
      >
        <div className="row-card" style={{ padding: 18, borderRadius: 8 }}>
          <div style={{ fontSize: 11.5, color: C.textFaint, marginBottom: 4 }}>Email</div>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            style={{ color: C.pass, fontWeight: 600, fontSize: 13, textDecoration: "none" }}
          >
            {PERSONAL_INFO.email}
          </a>
        </div>
        <div className="row-card" style={{ padding: 18, borderRadius: 8 }}>
          <div style={{ fontSize: 11.5, color: C.textFaint, marginBottom: 4 }}>Phone / WhatsApp</div>
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            style={{ fontWeight: 600, fontSize: 13, textDecoration: "none" }}
          >
            {PERSONAL_INFO.phone}
          </a>
        </div>
        <div className="row-card" style={{ padding: 18, borderRadius: 8 }}>
          <div style={{ fontSize: 11.5, color: C.textFaint, marginBottom: 4 }}>Location</div>
          <div style={{ fontWeight: 600, fontSize: 13 }}>{PERSONAL_INFO.location}</div>
        </div>
        <div className="row-card" style={{ padding: 18, borderRadius: 8 }}>
          <div style={{ fontSize: 11.5, color: C.textFaint, marginBottom: 4 }}>Profiles</div>
          <div style={{ display: "flex", gap: 10 }}>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: C.info, fontSize: 12.5, fontWeight: 700, textDecoration: "none" }}
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: C.info, fontSize: 12.5, fontWeight: 700, textDecoration: "none" }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Message Form or Success Feedback */}
      {submitted ? (
        <div
          className="row-card status-strip-pass"
          style={{ textAlign: "center", padding: 32, borderRadius: 8 }}
        >
          <div style={{ color: C.pass, fontFamily: FONT_MONO, fontSize: 13, marginBottom: 8 }}>
            ✓ message sent
          </div>
          <p style={{ color: C.textMuted, fontSize: 14 }}>
            Thanks for reaching out — I'll get back to you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="row-card"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: 24,
            borderRadius: 8,
          }}
        >
          <input
            required
            placeholder="Your name"
            style={{
              padding: "12px 14px",
              borderRadius: 6,
              border: `1px solid ${C.border}`,
              background: C.surfaceAlt,
              color: C.textMain,
              fontSize: 14,
              outline: "none",
            }}
          />
          <input
            required
            type="email"
            placeholder="Your email"
            style={{
              padding: "12px 14px",
              borderRadius: 6,
              border: `1px solid ${C.border}`,
              background: C.surfaceAlt,
              color: C.textMain,
              fontSize: 14,
              outline: "none",
            }}
          />
          <textarea
            required
            rows={4}
            placeholder="Message"
            style={{
              padding: "12px 14px",
              borderRadius: 6,
              border: `1px solid ${C.border}`,
              background: C.surfaceAlt,
              color: C.textMain,
              fontSize: 14,
              outline: "none",
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            className="cta-primary"
            style={{
              padding: 13,
              borderRadius: 6,
              border: 0,
              background: C.pass,
              color: "#0B132B",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Send message
          </button>
        </form>
      )}
    </section>
  );
}

export default ContactSection;
