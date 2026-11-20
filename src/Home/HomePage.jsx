import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { C, FONT_SANS, FONT_HEAD, FONT_MONO } from "../constants/theme";
import { PERSONAL_INFO } from "../data/portfolioData";
import { PROFILE_IMG } from "../assets/profileImage";
import { SQABackground } from "../components/common";
import { ProfileSidebar, NavDock } from "../components/layout";
import {
  HeroSection,
  BugDefenseSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  BlogSection,
  ContactSection,
} from "../components/sections";

export default function HomePage() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [location]);

  return (
    <div style={{ fontFamily: FONT_SANS, color: C.textMain, background: C.bg, minHeight: "100vh" }}>
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
        * {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          margin: 0;
        }
        body { color: ${C.textMain}; background: ${C.bg}; }
        h1, h2, h3, h4 {
          font-family: ${FONT_HEAD};
          letter-spacing: -0.015em;
          color: #FFFFFF;
        }
        p { color: ${C.textMuted}; line-height: 1.7; }
        a { color: inherit; }
        ::selection { background: ${C.accent}44; color: #fff; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatDrift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5px, -8px) rotate(2deg); }
          50% { transform: translate(-3px, -4px) rotate(-1deg); }
          75% { transform: translate(4px, -6px) rotate(1deg); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(.2,.7,.3,1) both; }
        .fade-up-1 { animation-delay: .05s; }
        .fade-up-2 { animation-delay: .15s; }
        .fade-up-3 { animation-delay: .25s; }
        .fade-up-4 { animation-delay: .35s; }

        .row-card {
          background: ${C.surface};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid ${C.border};
          border-left: 3px solid transparent;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.28);
          transition: border-color .18s ease, background .18s ease, transform .2s ease, box-shadow .2s ease;
        }
        .row-card:hover {
          border-color: ${C.borderHi};
          background: ${C.surfaceAlt};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        }
        .status-strip-pass { border-left-color: ${C.accent}; }

        .cta-primary { transition: transform .15s ease, box-shadow .15s ease; }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(34,197,94,0.28); }

        input, textarea { font-family: ${FONT_SANS}; }
        input:focus, textarea:focus { border-color: ${C.accent} !important; outline: none; }

        /* Responsive */
        @media (max-width: 1024px) {
          .main-content { margin-left: 0 !important; margin-right: 0 !important; padding: 0 16px !important; }
        }
        @media (max-width: 860px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 720px) {
          #home { padding: 48px 18px 40px !important; }
          #experience, #projects, #skills, #blog { padding: 56px 18px !important; }
          #contact { padding: 56px 18px !important; }
        }

        /* Mobile top bar */
        .mobile-topbar { display: none; }
        @media (max-width: 1024px) {
          .mobile-topbar {
            display: flex !important;
            position: sticky;
            top: 0;
            z-index: 200;
            background: rgba(5, 5, 5, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid ${C.border};
            padding: 0 16px;
            height: 60px;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>

      {/* Mobile Top Bar */}
      <header className="mobile-topbar" style={{ display: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={PROFILE_IMG}
            alt={PERSONAL_INFO.name}
            style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: `2px solid ${C.accent}` }}
          />
          <div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{PERSONAL_INFO.name}</div>
            <div style={{ fontSize: 11, color: C.textFaint, fontFamily: FONT_MONO }}>{PERSONAL_INFO.title}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <a href={PERSONAL_INFO.cvLink} download style={{
            width: 36, height: 36, borderRadius: 10, border: `1px solid ${C.border}`,
            background: C.accent, display: "grid", placeItems: "center", color: "#050505", textDecoration: "none",
          }}>
            <Download size={16} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: 36, height: 36, borderRadius: 10, border: `1px solid ${C.border}`,
              background: "transparent", color: C.textMain, cursor: "pointer", display: "grid", placeItems: "center",
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0, bottom: 0, zIndex: 199,
          background: "rgba(5, 5, 5, 0.97)", backdropFilter: "blur(16px)",
          padding: "24px 20px", overflowY: "auto",
        }}>
          {["home","bug-defense","experience","projects","skills","blog","contact"].map((id) => (
            <button key={id} onClick={() => {
              setMobileMenuOpen(false);
              setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }} style={{
              display: "block", width: "100%", textAlign: "left", border: 0, background: "transparent",
              color: C.textMuted, padding: "14px 0", fontSize: 16, fontWeight: 500, cursor: "pointer",
              borderBottom: `1px solid ${C.border}`, textTransform: "capitalize",
            }}>
              {id.replace("-", " ")}
            </button>
          ))}
        </div>
      )}

      {/* Left Sidebar */}
      <ProfileSidebar />

      {/* Right NavDock */}
      <NavDock />

      {/* Main Scrollable Content */}
      <main className="main-content" style={{
        marginLeft: 320,
        marginRight: 80,
        position: "relative",
        minHeight: "100vh",
      }}>
        <SQABackground />
        <HeroSection />
        <BugDefenseSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
}
