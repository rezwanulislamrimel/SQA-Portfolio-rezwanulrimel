import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Briefcase, ChevronDown, Mail, MessageCircle, Menu, X, Languages } from "lucide-react";
import { C, FONT_MONO } from "../../constants/theme";
import { PROFILE_IMG } from "../../assets/profileImage";
import { PERSONAL_INFO, NAV } from "../../data/portfolioData";
import { StatusDot } from "../common/StatusDot";

export function Navbar({ goto, lang, setLang }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isBlogPage = location.pathname === "/blog";

  const [hireOpen, setHireOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleNavClick = (id) => {
    setMobileNavOpen(false);

    if (id === "blog") {
      if (isBlogPage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/blog");
      }
      return;
    }

    // If on blog page and user clicks any homepage section
    if (isBlogPage) {
      navigate(`/#${id}`);
      return;
    }

    // If on homepage
    if (goto) {
      goto(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBrandClick = () => {
    if (isBlogPage) {
      navigate("/");
    } else {
      handleNavClick("home");
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "rgba(11, 19, 43, 0.94)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
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
          onClick={handleBrandClick}
          title={isBlogPage ? "Return to Portfolio" : "Scroll to Top"}
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
        <nav className="nav-links" style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {NAV.map((n) => {
            const isBlogActive = isBlogPage && n.id === "blog";
            return (
              <button
                key={n.id}
                className="nav-btn"
                onClick={() => handleNavClick(n.id)}
                style={{
                  border: 0,
                  background: isBlogActive ? "rgba(0, 245, 212, 0.12)" : "transparent",
                  color: isBlogActive ? C.pass : C.textMuted,
                  padding: isBlogActive ? "6px 12px" : "4px 0",
                  borderRadius: isBlogActive ? 6 : 0,
                  borderBottom: isBlogActive ? `1px solid ${C.pass}55` : "none",
                  fontSize: 13.5,
                  fontWeight: isBlogActive ? 700 : 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "all 0.15s ease",
                }}
              >
                {isBlogActive && <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.pass }} />}
                {n.label}
              </button>
            );
          })}

          {/* Optional Language Switcher in Navbar */}
          {setLang && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                background: "rgba(28, 37, 65, 0.8)",
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "2px 4px",
                marginLeft: 4,
              }}
            >
              {[
                { key: "both", label: "🌐 Both" },
                { key: "en", label: "🇬🇧 EN" },
                { key: "bn", label: "🇧🇩 বাংলা" },
              ].map((l) => (
                <button
                  key={l.key}
                  onClick={() => setLang(l.key)}
                  style={{
                    background: lang === l.key ? C.pass : "transparent",
                    color: lang === l.key ? "#0B132B" : C.textMuted,
                    border: 0,
                    borderRadius: 5,
                    padding: "4px 7px",
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    cursor: "pointer",
                    fontWeight: lang === l.key ? 700 : 500,
                    transition: "all 0.15s ease",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}

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
          {NAV.map((n) => {
            const isBlogActive = isBlogPage && n.id === "blog";
            return (
              <button
                key={n.id}
                onClick={() => handleNavClick(n.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  textAlign: "left",
                  border: 0,
                  background: "transparent",
                  color: isBlogActive ? C.pass : C.textMuted,
                  padding: "12px 0",
                  fontSize: 14.5,
                  fontWeight: isBlogActive ? 700 : 500,
                  cursor: "pointer",
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                <span>{n.label}</span>
                {isBlogActive && <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.pass }}>● Active</span>}
              </button>
            );
          })}

          {/* Language Toggle in Mobile Drawer */}
          {setLang && (
            <div style={{ display: "flex", gap: 6, marginTop: 14, marginBottom: 8, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: C.textFaint, fontFamily: FONT_MONO }}>Language:</span>
              {[
                { key: "both", label: "🌐 Both" },
                { key: "en", label: "🇬🇧 EN" },
                { key: "bn", label: "🇧🇩 বাংলা" },
              ].map((l) => (
                <button
                  key={l.key}
                  onClick={() => setLang(l.key)}
                  style={{
                    flex: 1,
                    background: lang === l.key ? C.pass : "rgba(28, 37, 65, 0.9)",
                    color: lang === l.key ? "#0B132B" : C.textMuted,
                    border: `1px solid ${lang === l.key ? C.pass : C.border}`,
                    borderRadius: 6,
                    padding: "7px 6px",
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    cursor: "pointer",
                    fontWeight: lang === l.key ? 700 : 500,
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}

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
