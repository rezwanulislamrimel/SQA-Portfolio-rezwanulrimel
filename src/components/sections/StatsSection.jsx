import React, { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  FolderCheck,
  Users,
  FileCheck2,
  Bug,
  Star,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { C, FONT_HEAD, FONT_MONO, FONT_SANS } from "../../constants/theme";

const STATS = [
  {
    value: 1,
    suffix: "+",
    label: "Years Experience",
    subtext: "Hands-on SQA, manual & test automation",
    tag: "TRACK RECORD",
    icon: Briefcase,
    color: "#22c55e", // emerald
  },
  {
    value: 6,
    suffix: "+",
    label: "Projects Delivered",
    subtext: "Production web portals, APIs & mobile apps",
    tag: "SHIPPED",
    icon: FolderCheck,
    color: "#3b82f6", // blue
  },
  {
    value: 5,
    suffix: "+",
    label: "Happy Clients",
    subtext: "BPO, SaaS platforms & e-commerce brands",
    tag: "TRUSTED BY",
    icon: Users,
    color: "#f59e0b", // amber
  },
  {
    value: 1500,
    suffix: "+",
    label: "Test Cases Executed",
    subtext: "Manual, automated, API & edge-case coverage",
    tag: "HIGH TEST COVERAGE",
    icon: FileCheck2,
    color: "#8b5cf6", // purple
  },
  {
    value: 280,
    suffix: "+",
    label: "Bugs Caught & Documented",
    subtext: "Critical, high-severity & UI/API edge defects",
    tag: "PRE-RELEASE DEFENSE",
    icon: Bug,
    color: "#ef4444", // rose/red
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    subtext: "Detailed Jira reports & zero false positives",
    tag: "5-STAR QUALITY",
    icon: Star,
    color: "#06b6d4", // cyan
  },
];

function AnimatedNumber({ target, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let raf;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="stats"
      style={{
        padding: "30px 48px 70px",
        position: "relative",
        fontFamily: FONT_SANS,
      }}
    >
      {/* Subtle top indicator bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 24,
        }}
      >
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 11,
            color: C.accent,
            letterSpacing: "0.12em",
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(34, 197, 94, 0.08)",
            border: "1px solid rgba(34, 197, 94, 0.2)",
            padding: "4px 12px",
            borderRadius: 100,
          }}
        >
          <Sparkles size={12} color={C.accent} />
          METRICS & IMPACT
        </span>
        <div
          style={{
            height: 1,
            flex: 1,
            background: `linear-gradient(90deg, ${C.border} 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Grid of Bento Stat Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
        }}
        className="stats-grid"
      >
        {STATS.map((s, i) => {
          const Icon = s.icon;
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "relative",
                background: isHovered
                  ? `linear-gradient(145deg, rgba(22, 22, 26, 0.95) 0%, rgba(12, 12, 14, 0.98) 100%)`
                  : `linear-gradient(145deg, rgba(16, 16, 18, 0.85) 0%, rgba(10, 10, 12, 0.9) 100%)`,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: `1px solid ${isHovered ? s.color + "66" : C.border}`,
                borderRadius: 18,
                padding: "26px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 180,
                overflow: "hidden",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                boxShadow: isHovered
                  ? `0 14px 34px -10px ${s.color}28, 0 4px 16px rgba(0,0,0,0.5)`
                  : "0 4px 20px rgba(0, 0, 0, 0.25)",
                transition: "all 0.25s cubic-bezier(0.2, 0.7, 0.3, 1)",
                cursor: "default",
              }}
            >
              {/* Subtle top ambient glow */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${s.color}${isHovered ? "28" : "12"} 0%, transparent 70%)`,
                  pointerEvents: "none",
                  transition: "all 0.3s ease",
                }}
              />

              {/* Top Accent Strip */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 24,
                  right: 24,
                  height: 2,
                  background: isHovered
                    ? `linear-gradient(90deg, transparent, ${s.color}, transparent)`
                    : "transparent",
                  transition: "background 0.3s ease",
                }}
              />

              {/* Card Header: Icon + Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 18,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Icon Capsule */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${s.color}14`,
                    border: `1px solid ${isHovered ? s.color + "55" : s.color + "30"}`,
                    display: "grid",
                    placeItems: "center",
                    boxShadow: isHovered ? `0 0 16px ${s.color}33` : "none",
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <Icon size={20} color={s.color} />
                </div>

                {/* Tag pill */}
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: isHovered ? s.color : C.textFaint,
                    background: isHovered ? `${s.color}15` : "rgba(255, 255, 255, 0.03)",
                    border: `1px solid ${isHovered ? s.color + "44" : "rgba(255, 255, 255, 0.06)"}`,
                    padding: "3px 9px",
                    borderRadius: 6,
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: s.color,
                      boxShadow: isHovered ? `0 0 6px ${s.color}` : "none",
                    }}
                  />
                  {s.tag}
                </span>
              </div>

              {/* Center / Counter */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_HEAD,
                    fontSize: "clamp(34px, 3.2vw, 44px)",
                    fontWeight: 900,
                    color: "#FFFFFF",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    display: "flex",
                    alignItems: "baseline",
                    gap: 2,
                    textShadow: isHovered
                      ? `0 0 24px ${s.color}44`
                      : "none",
                    transition: "text-shadow 0.25s ease",
                  }}
                >
                  <AnimatedNumber target={s.value} suffix="" />
                  <span
                    style={{
                      color: s.color,
                      fontSize: "0.85em",
                      fontWeight: 800,
                    }}
                  >
                    {s.suffix}
                  </span>
                </div>
              </div>

              {/* Footer: Title & Subtext */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <h3
                  style={{
                    fontFamily: FONT_HEAD,
                    fontSize: 15,
                    fontWeight: 700,
                    color: isHovered ? "#FFFFFF" : C.textMain,
                    margin: "0 0 4px 0",
                    letterSpacing: "-0.01em",
                    transition: "color 0.2s ease",
                  }}
                >
                  {s.label}
                </h3>
                <p
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 12.5,
                    color: C.textFaint,
                    margin: 0,
                    lineHeight: 1.45,
                  }}
                >
                  {s.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (max-width: 992px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
        }
        @media (max-width: 580px) {
          #stats { padding: 24px 18px 50px !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default StatsSection;
