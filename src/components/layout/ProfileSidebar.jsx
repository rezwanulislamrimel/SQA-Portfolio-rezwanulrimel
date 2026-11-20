import React from "react";
import { Github, Linkedin, Download, MapPin } from "lucide-react";
import { C, FONT_MONO, FONT_SANS } from "../../constants/theme";
import { PROFILE_IMG } from "../../assets/profileImage";
import { PERSONAL_INFO } from "../../data/portfolioData";

const stats = [
  { value: "1+", label: "Years" },
  { value: "6+", label: "Projects" },
  { value: "5+", label: "Clients" },
];

const socials = [
  { icon: Github, url: PERSONAL_INFO.github, label: "GitHub" },
  { icon: Linkedin, url: PERSONAL_INFO.linkedin, label: "LinkedIn" },
];

export function ProfileSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="profile-sidebar" style={{
        position: "fixed",
        left: 20,
        top: 20,
        bottom: 20,
        width: 280,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "28px 20px",
        background: "rgba(12, 12, 12, 0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${C.border}`,
        borderRadius: 20,
        overflowY: "auto",
      }}>
        {/* Avatar with animated ring */}
        <div style={{ position: "relative", marginBottom: 18 }}>
          <div className="avatar-status-ring" style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            padding: 3,
            background: `conic-gradient(${C.accent}, ${C.accentDark}, ${C.accent})`,
          }}>
            <img
              src={PROFILE_IMG}
              alt={PERSONAL_INFO.name}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #050505",
              }}
            />
          </div>
          {/* Online dot */}
          <span style={{
            position: "absolute",
            bottom: 6,
            right: 6,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: C.accent,
            border: "3px solid #050505",
            boxShadow: `0 0 8px ${C.accent}`,
          }} className="pulse-dot" />
        </div>

        {/* Name & Title */}
        <h2 style={{
          fontSize: 18,
          fontWeight: 700,
          margin: "0 0 4px 0",
          textAlign: "center",
          color: C.textMain,
        }}>{PERSONAL_INFO.name}</h2>
        <p style={{
          fontSize: 13,
          color: C.textMuted,
          margin: "0 0 6px 0",
          fontFamily: FONT_MONO,
        }}>{PERSONAL_INFO.title}</p>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontSize: 11.5,
          color: C.textFaint,
          marginBottom: 20,
        }}>
          <MapPin size={12} />
          {PERSONAL_INFO.location}
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: C.border, marginBottom: 20 }} />

        {/* Stats */}
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: 20,
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: C.textMain }}>{s.value}</div>
              <div style={{ fontSize: 11, color: C.textFaint, fontFamily: FONT_MONO }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: C.border, marginBottom: 20 }} />

        {/* Social Links */}
        <div style={{
          display: "flex",
          gap: 10,
          marginBottom: 20,
        }}>
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                className="social-icon-btn"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: `1px solid ${C.border}`,
                  background: C.surfaceAlt,
                  display: "grid",
                  placeItems: "center",
                  color: C.textMuted,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Download CV CTA */}
        <a
          href={PERSONAL_INFO.cvLink}
          download
          className="cta-primary"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "12px 0",
            borderRadius: 10,
            background: C.accent,
            color: "#050505",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: FONT_SANS,
            border: 0,
            transition: "all 0.2s ease",
          }}
        >
          <Download size={16} strokeWidth={2.5} />
          Download CV
        </a>
      </aside>

      {/* Sidebar CSS */}
      <style>{`
        .pulse-dot {
          animation: pulseRing 2s ease-in-out infinite;
        }
        @keyframes pulseRing {
          0%, 100% { box-shadow: 0 0 4px ${C.accent}; }
          50% { box-shadow: 0 0 12px ${C.accent}, 0 0 24px ${C.accent}44; }
        }
        .avatar-status-ring {
          animation: rotateRing 4s linear infinite;
        }
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .social-icon-btn:hover {
          border-color: ${C.accent} !important;
          color: ${C.accent} !important;
          background: ${C.accentDim} !important;
        }
        @media (max-width: 1024px) {
          .profile-sidebar { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default ProfileSidebar;
