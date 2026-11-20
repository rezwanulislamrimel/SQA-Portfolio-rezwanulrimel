import React from "react";
import { Star, Quote } from "lucide-react";
import { C, FONT_SANS, FONT_HEAD, FONT_MONO } from "../../constants/theme";

const TESTIMONIALS = [
  {
    name: "Ahmed Rafi",
    role: "CEO, Avian BPO",
    initials: "AR",
    color: "#22c55e",
    rating: 5,
    text: "Rimel found critical bugs in our payment flow that we'd missed for months. His bug reports are incredibly detailed — our dev team could fix issues without any back-and-forth. Highly recommend.",
  },
  {
    name: "Tanvir Hasan",
    role: "CTO, Deqlo",
    initials: "TH",
    color: "#3b82f6",
    rating: 5,
    text: "What impressed me most was his systematic approach. He didn't just test — he built a complete Playwright automation framework that runs in our CI pipeline. Saved us hours every sprint.",
  },
  {
    name: "Sakib Rahman",
    role: "Founder, Cyber Bit Bite",
    initials: "SR",
    color: "#f59e0b",
    rating: 5,
    text: "Great communication and always delivers on time. Rimel's API testing with Postman caught several security issues we hadn't considered. Very thorough and professional.",
  },
  {
    name: "Nusrat Jahan",
    role: "PM, Rent Yard",
    initials: "NJ",
    color: "#ec4899",
    rating: 5,
    text: "Rimel tested our rental platform across 10+ devices. His cross-browser compatibility reports were so well-organized that our entire team started using his templates. Great asset to any team.",
  },
];

function StarRating({ rating, color }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={13}
          fill={i < rating ? color : "transparent"}
          color={i < rating ? color : C.textFaint}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
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
          <Quote size={12} color={C.accent} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: C.accent,
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            💬 TESTIMONIALS
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
          Client <span style={{ color: C.accent }}>Reviews</span>
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
          What people say about working with me.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
        }}
        className="testimonial-grid"
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: "24px",
              position: "relative",
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = t.color + "44";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = C.border;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Quote icon */}
            <Quote
              size={28}
              color={t.color}
              style={{
                position: "absolute",
                top: 18,
                right: 20,
                opacity: 0.15,
              }}
            />

            {/* Stars */}
            <StarRating rating={t.rating} color={t.color} />

            {/* Text */}
            <p
              style={{
                color: C.textMuted,
                fontSize: 13.5,
                lineHeight: 1.7,
                margin: "14px 0 20px",
                fontStyle: "italic",
              }}
            >
              "{t.text}"
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `${t.color}18`,
                  border: `1px solid ${t.color}33`,
                  display: "grid",
                  placeItems: "center",
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  fontWeight: 700,
                  color: t.color,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: C.textFaint,
                    fontFamily: FONT_MONO,
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;
