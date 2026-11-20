import React, { useState, useEffect } from "react";
import { Home, Shield, Briefcase, FolderGit2, Code2, BookOpen, Mail } from "lucide-react";
import { C } from "../../constants/theme";

const sections = [
  { id: "home", icon: Home, label: "Home" },
  { id: "bug-defense", icon: Shield, label: "QA Defense" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: FolderGit2, label: "Projects" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "blog", icon: BookOpen, label: "Blog" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function NavDock() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className="nav-dock" style={{
        position: "fixed",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "10px 8px",
        background: "rgba(12, 12, 12, 0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${C.border}`,
        borderRadius: 28,
      }}>
        {sections.map((s) => {
          const Icon = s.icon;
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              title={s.label}
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                border: 0,
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
                background: isActive ? C.accentDim : "transparent",
                color: isActive ? C.accent : C.textFaint,
                transition: "all 0.2s ease",
                boxShadow: isActive ? `0 0 12px ${C.accent}33` : "none",
                position: "relative",
              }}
              className="dock-btn"
            >
              <Icon size={18} />
              {isActive && (
                <span style={{
                  position: "absolute",
                  right: -4,
                  width: 3,
                  height: 16,
                  borderRadius: 2,
                  background: C.accent,
                }} />
              )}
            </button>
          );
        })}
      </nav>

      <style>{`
        .dock-btn:hover {
          background: ${C.accentDim} !important;
          color: ${C.accent} !important;
        }
        @media (max-width: 1024px) {
          .nav-dock { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default NavDock;
