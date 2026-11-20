import React from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Download,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Code2,
  ArrowUpRight,
  Briefcase,
  FileText,
} from "lucide-react";
import { C, FONT_MONO, FONT_SANS, FONT_HEAD } from "../../constants/theme";
import { PROFILE_IMG } from "../../assets/profileImage";
import { PERSONAL_INFO } from "../../data/portfolioData";

const socials = [
  { icon: Github, url: PERSONAL_INFO.github, label: "GitHub" },
  { icon: Linkedin, url: PERSONAL_INFO.linkedin, label: "LinkedIn" },
  { icon: Mail, url: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
];

const infoItems = [
  { icon: MapPin, label: "Location", value: PERSONAL_INFO.location },
  { icon: Briefcase, label: "Role", value: PERSONAL_INFO.title },
  { icon: Calendar, label: "Experience", value: "1+ Years" },
];

export function ProfileSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="profile-sidebar"
        style={{
          position: "fixed",
          left: 20,
          top: 20,
          bottom: 20,
          width: 280,
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          background: "rgba(12, 12, 12, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: `1px solid ${C.border}`,
          borderRadius: 20,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* ── Top Brand Bar ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 18px 12px",
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {/* Code icon badge */}
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: `${C.accent}18`,
                border: `1px solid ${C.accent}44`,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Code2 size={14} color={C.accent} />
            </div>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 13,
                fontWeight: 700,
                color: C.textMuted,
                letterSpacing: "-0.02em",
              }}
            >
              Rimel
            </span>
          </div>
          {/* Online status pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              background: `${C.accent}12`,
              border: `1px solid ${C.accent}30`,
              borderRadius: 100,
              padding: "3px 10px 3px 7px",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: C.accent,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 10.5,
                color: C.accent,
                fontWeight: 600,
              }}
            >
              online
            </span>
          </div>
        </div>

        {/* ── Profile Image Card ── */}
        <div
          style={{
            margin: "16px 14px 0",
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            aspectRatio: "1 / 1.05",
            background: `linear-gradient(160deg, ${C.accent}22 0%, #050505 60%)`,
            border: `1px solid ${C.border}`,
          }}
        >
          {/* Green radial glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at 50% 30%, ${C.accent}20 0%, transparent 65%)`,
              zIndex: 1,
            }}
          />
          {/* Profile image */}
          <img
            src={PROFILE_IMG}
            alt={PERSONAL_INFO.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              position: "relative",
              zIndex: 2,
            }}
          />
          {/* Bottom gradient overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background:
                "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.5) 50%, transparent 100%)",
              zIndex: 3,
            }}
          />
          {/* Name overlay at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: 16,
              right: 16,
              zIndex: 4,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(5,5,5,0.7)",
                backdropFilter: "blur(6px)",
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "5px 10px",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: C.accent,
                  boxShadow: `0 0 6px ${C.accent}`,
                }}
              />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  color: C.textMuted,
                  fontWeight: 500,
                }}
              >
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* ── Name & Title ── */}
        <div style={{ padding: "16px 18px 0" }}>
          <h2
            style={{
              fontFamily: FONT_HEAD,
              fontSize: 17,
              fontWeight: 800,
              margin: "0 0 3px 0",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            {PERSONAL_INFO.name}
          </h2>
          <p
            style={{
              fontSize: 12.5,
              color: C.accent,
              margin: 0,
              fontFamily: FONT_MONO,
              fontWeight: 600,
            }}
          >
            {PERSONAL_INFO.title}
          </p>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            margin: "14px 18px",
            height: 1,
            background: C.border,
          }}
        />

        {/* ── Info List ── */}
        <div style={{ padding: "0 18px" }}>
          {infoItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 0",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${C.border}`,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} color={C.textFaint} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: C.textFaint,
                      fontFamily: FONT_MONO,
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                      marginBottom: 2,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: C.textMuted,
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            margin: "12px 18px",
            height: 1,
            background: C.border,
          }}
        />

        {/* ── Social Links Row ── */}
        <div
          style={{
            display: "flex",
            gap: 8,
            padding: "0 18px",
            marginBottom: 4,
          }}
        >
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
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  border: `1px solid ${C.border}`,
                  background: "rgba(255,255,255,0.025)",
                  display: "grid",
                  placeItems: "center",
                  color: C.textMuted,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        {/* ── Spacer ── */}
        <div style={{ flex: 1 }} />

        {/* ── CTA Buttons — bottom ── */}
        <div style={{ padding: "14px 14px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
          <Link
            to="/resume"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 18px",
              borderRadius: 12,
              background: "transparent",
              border: `1px solid ${C.accent}44`,
              color: C.accent,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: FONT_SANS,
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <FileText size={15} strokeWidth={2.5} />
              View Resume
            </span>
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
          <a
            href={PERSONAL_INFO.cvLink}
            download
            className="cta-primary"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "13px 18px",
              borderRadius: 12,
              background: C.accent,
              color: "#050505",
              textDecoration: "none",
              fontSize: 13.5,
              fontWeight: 700,
              fontFamily: FONT_SANS,
              border: 0,
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Download size={16} strokeWidth={2.5} />
              Download CV
            </span>
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </aside>

      {/* Sidebar CSS */}
      <style>{`
        .pulse-dot {
          animation: pulseRing 2s ease-in-out infinite;
        }
        @keyframes pulseRing {
          0%, 100% { box-shadow: 0 0 4px ${C.accent}; }
          50% { box-shadow: 0 0 10px ${C.accent}, 0 0 20px ${C.accent}44; }
        }
        .social-icon-btn:hover {
          border-color: ${C.accent} !important;
          color: ${C.accent} !important;
          background: rgba(34,197,94,0.08) !important;
          transform: translateY(-1px);
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(34,197,94,0.3);
        }
        @media (max-width: 1024px) {
          .profile-sidebar { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default ProfileSidebar;
