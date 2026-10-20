import React from "react";
import { C, FONT_SANS, FONT_HEAD } from "../constants/theme";
import { SQABackground } from "../components/common";
import { Navbar, Footer } from "../components/layout";
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
  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ fontFamily: FONT_SANS, color: C.textMain, background: C.bg, minHeight: "100vh", position: "relative" }}>
      {/* SQA Animated Background */}
      <SQABackground />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
        * {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        body {
          color: ${C.textMain};
        }
        h1, h2, h3, h4 {
          font-family: ${FONT_HEAD};
          letter-spacing: -0.015em;
          color: #FFFFFF;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
        }
        p {
          color: ${C.textMuted};
          line-height: 1.7;
        }
        a { color: inherit; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(.2,.7,.3,1) both; }
        .fade-up-1 { animation-delay: .05s; }
        .fade-up-2 { animation-delay: .15s; }
        .fade-up-3 { animation-delay: .25s; }
        .fade-up-4 { animation-delay: .35s; }
        .float-photo { animation: floatY 5s ease-in-out infinite; }
        .blog-body-enter { animation: fadeUp 0.35s ease both; }
        .row-card, .nav-btn, .cta-primary, .avatar-ring { will-change: transform; }
        .row-card {
          background: ${C.surface};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid ${C.border};
          border-left: 3px solid transparent;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.28);
          transition: border-color .18s ease, background .18s ease;
        }
        .row-card:hover {
          border-color: ${C.borderHi};
          background: ${C.surfaceAlt};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        }
        .status-strip-pass { border-left-color: ${C.pass}; }
        .nav-btn { transition: color .15s ease; }
        .nav-btn:hover { color: ${C.textMain} !important; }
        .cta-primary { transition: transform .15s ease, box-shadow .15s ease; }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,245,212,0.28); }
        .avatar-ring {
          transition: box-shadow .2s ease, transform .2s ease;
        }
        .avatar-ring:hover { transform: scale(1.05); box-shadow: 0 0 0 3px rgba(0,245,212,0.5); }
        .hero-photo-frame {
          position: relative;
        }
        .hero-photo-frame::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, ${C.pass}66, transparent 40%, ${C.warn}44);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        input, textarea { font-family: ${FONT_SANS}; }
        input:focus, textarea:focus { border-color: ${C.pass} !important; }
        @media (max-width: 860px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        .menu-btn { display: none; }
        .mobile-nav-panel { animation: fadeUp 0.2s ease both; }
        @media (max-width: 720px) {
          .nav-links { display: none !important; }
          .menu-btn { display: flex !important; }
          #home { padding: 48px 18px 40px !important; }
          #experience, #projects, #skills, #blog { padding: 56px 18px !important; }
          #contact { padding: 56px 18px !important; }
          .float-photo { animation: none; }
        }
        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 420px) {
          .cta-primary { flex: 1 1 auto; justify-content: center; }
        }
      `}</style>

      {/* Header / Navigation */}
      <Navbar goto={goto} />

      {/* Main Content Sections */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <BugDefenseSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}