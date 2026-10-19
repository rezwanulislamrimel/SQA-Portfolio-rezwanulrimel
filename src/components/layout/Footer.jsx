import React from "react";
import { C } from "../../constants/theme";
import { PERSONAL_INFO } from "../../data/portfolioData";

export function Footer() {
  return (
    <footer
      style={{
        padding: "28px 24px",
        borderTop: `1px solid ${C.border}`,
        textAlign: "center",
        fontSize: 12.5,
        color: C.textFaint,
      }}
    >
      {PERSONAL_INFO.name} — {PERSONAL_INFO.title} @ unidevGO · Web Developer · Founder, ICT Success Academy
    </footer>
  );
}

export default Footer;
