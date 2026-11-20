import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Calendar,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { C, FONT_SANS, FONT_HEAD, FONT_MONO } from "../../constants/theme";
import { PERSONAL_INFO } from "../../data/portfolioData";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappLink = `https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, "")}?text=Hi%20Rimel%2C%20I%27d%20like%20to%20discuss%20a%20QA%20project.`;

  return (
    <section
      id="contact"
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
          <Mail size={12} color={C.accent} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: C.accent,
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            📬 CONTACT
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
          Get in <span style={{ color: C.accent }}>Touch</span>
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
          Have a project in mind? Let's talk about how I can help ensure your
          software quality.
        </p>
      </div>

      {/* Layout: 2 col */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 24,
          alignItems: "start",
        }}
        className="contact-layout"
      >
        {/* Left — Info + Quick Actions */}
        <div>
          {/* Contact Info Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 20,
            }}
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: PERSONAL_INFO.email,
                href: `mailto:${PERSONAL_INFO.email}`,
                color: "#22c55e",
              },
              {
                icon: Phone,
                label: "Phone",
                value: PERSONAL_INFO.phone,
                href: `tel:${PERSONAL_INFO.phone}`,
                color: "#3b82f6",
              },
              {
                icon: MapPin,
                label: "Location",
                value: PERSONAL_INFO.location,
                color: "#f59e0b",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: 12,
                    padding: "16px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: `${item.color}14`,
                      border: `1px solid ${item.color}33`,
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={item.color} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: C.textFaint,
                        fontFamily: FONT_MONO,
                        marginBottom: 2,
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          fontSize: 13.5,
                          fontWeight: 600,
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          color: "#fff",
                          fontSize: 13.5,
                          fontWeight: 600,
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Action Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "14px 20px",
                borderRadius: 12,
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 700,
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37,211,102,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
              <ArrowUpRight size={14} style={{ marginLeft: "auto" }} />
            </a>

            {/* Book a Call (Calendly placeholder) */}
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=QA%20Consultation%20Call%20Request&body=Hi%20Rimel%2C%0AI%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20a%20QA%20project.%0A%0APreferred%20time%3A%20%0AProject%20details%3A%20`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "14px 20px",
                borderRadius: 12,
                background: "transparent",
                border: `1px solid ${C.accent}44`,
                color: C.accent,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 700,
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${C.accent}10`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Calendar size={18} />
              Book a Consultation Call
              <ArrowUpRight size={14} style={{ marginLeft: "auto" }} />
            </a>
          </div>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 18,
            }}
          >
            {[
              { icon: Github, url: PERSONAL_INFO.github, label: "GitHub" },
              {
                icon: Linkedin,
                url: PERSONAL_INFO.linkedin,
                label: "LinkedIn",
              },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    border: `1px solid ${C.border}`,
                    background: C.surface,
                    display: "grid",
                    placeItems: "center",
                    color: C.textMuted,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.accent;
                    e.currentTarget.style.color = C.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.color = C.textMuted;
                  }}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right — Form */}
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
              padding: "18px 24px",
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
              // send a message
            </span>
          </div>

          {submitted ? (
            <div style={{ padding: "48px 24px", textAlign: "center" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: `${C.accent}14`,
                  border: `1px solid ${C.accent}33`,
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Send size={24} color={C.accent} />
              </div>
              <h3
                style={{
                  fontFamily: FONT_HEAD,
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 8px 0",
                }}
              >
                Message Sent!
              </h3>
              <p
                style={{
                  color: C.textMuted,
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Thanks for reaching out — I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                <input
                  required
                  placeholder="Your name"
                  style={{
                    padding: "13px 16px",
                    borderRadius: 10,
                    border: `1px solid ${C.border}`,
                    background: "rgba(255,255,255,0.025)",
                    color: C.textMain,
                    fontSize: 14,
                    outline: "none",
                    transition: "border-color 0.15s ease",
                  }}
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  style={{
                    padding: "13px 16px",
                    borderRadius: 10,
                    border: `1px solid ${C.border}`,
                    background: "rgba(255,255,255,0.025)",
                    color: C.textMain,
                    fontSize: 14,
                    outline: "none",
                    transition: "border-color 0.15s ease",
                  }}
                />
              </div>
              <input
                placeholder="Subject (e.g., API Testing for my SaaS app)"
                style={{
                  padding: "13px 16px",
                  borderRadius: 10,
                  border: `1px solid ${C.border}`,
                  background: "rgba(255,255,255,0.025)",
                  color: C.textMain,
                  fontSize: 14,
                  outline: "none",
                }}
              />
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                style={{
                  padding: "13px 16px",
                  borderRadius: 10,
                  border: `1px solid ${C.border}`,
                  background: "rgba(255,255,255,0.025)",
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
                  padding: "14px 0",
                  borderRadius: 10,
                  border: 0,
                  background: C.accent,
                  color: "#050505",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Send size={15} strokeWidth={2.5} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default ContactSection;
