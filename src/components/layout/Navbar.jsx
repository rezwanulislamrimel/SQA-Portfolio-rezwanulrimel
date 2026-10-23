import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, ChevronDown, Mail, MessageCircle, Menu, X } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { PROFILE_IMG } from "../../assets/profileImage";
import { PERSONAL_INFO, NAV } from "../../data/portfolioData";
import { StatusDot } from "../common/StatusDot";

export function Navbar({ goto }) {
  const navigate = useNavigate();
  const [hireOpen, setHireOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleNavClick = (id) => {
    setMobileNavOpen(false);
    if (id === "blog") {
      navigate("/blog");
      return;
    }
    if (goto) {
      goto(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "rgba(11,19,43,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand / Profile Avatar */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
          onClick={() => handleNavClick("home")}
        >
          <img
            src={PROFILE_IMG}
            alt={PERSONAL_INFO.name}
            className="avatar-ring"
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              objectFit: "cover",
              border: `2px solid ${C.pass}`,
              boxShadow: `0 0 0 2px ${C.bg}`,
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <StatusDot color={C.pass} />
            <span style={{ fontFamily: FONT_MONO, fontSize: 11.5, color: C.textFaint }}>
              online
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links" style={{ display: "flex", gap: 22, alignItems: "center" }}>
          {NAV.map((n) => (
            <button
              key={n.id}
              className="nav-btn"
              onClick={() => handleNavClick(n.id)}
              style={{
                border: 0,
                background: "transparent",
                color: C.textMuted,
                padding: 0,
                fontSize: 13.5,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              {n.label}
            </button>
          ))}

          {/* Hire Me Dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setHireOpen(!hireOpen)}
              className="cta-primary"
              style={{
                border: 0,
                cursor: "pointer",
                background: C.pass,
                color: "#0B132B",
                padding: "8px 14px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 7,
              }}
            >
              <Briefcase size={15} strokeWidth={2.5} />
              Hire me
              <ChevronDown
                size={14}
                strokeWidth={2.5}
                style={{
                  transform: hireOpen ? "rotate(180deg)" : "none",
                  transition: "transform .15s ease",
                }}
              />
            </button>

            {hireOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  background: C.surface,
                  border: `1px solid ${C.borderHi}`,
                  borderRadius: 8,
                  overflow: "hidden",
                  minWidth: 190,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
                  zIndex: 50,
                }}
              >
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={() => setHireOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 14px",
                    textDecoration: "none",
                    color: C.textMain,
                    fontSize: 13,
                    fontWeight: 600,
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  <Mail size={16} color={C.info} />
                  Email
                </a>
                <a
                  href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setHireOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 14px",
                    textDecoration: "none",
                    color: C.textMain,
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  <MessageCircle size={16} color={C.pass} />
                  WhatsApp
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="menu-btn"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            border: `1px solid ${C.border}`,
            background: "transparent",
            color: C.textMain,
            width: 38,
            height: 38,
            borderRadius: 8,
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mobileNavOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileNavOpen && (
        <div
          className="mobile-nav-panel"
          style={{
            borderTop: `1px solid ${C.border}`,
            background: C.surface,
            padding: "8px 24px 18px",
          }}
        >
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => handleNavClick(n.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                border: 0,
                background: "transparent",
                color: C.textMuted,
                padding: "12px 0",
                fontSize: 14.5,
                fontWeight: 500,
                cursor: "pointer",
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              {n.label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => setMobileNavOpen(false)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                textDecoration: "none",
                background: C.pass,
                color: "#0B132B",
                padding: "11px 14px",
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 700,
              }}
            >
              <Mail size={15} />
              Email
            </a>
            <a
              href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileNavOpen(false)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                textDecoration: "none",
                border: `1px solid ${C.borderHi}`,
                color: C.textMain,
                padding: "11px 14px",
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 700,
              }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
