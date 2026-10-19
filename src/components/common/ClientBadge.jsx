import React from "react";
import { FONT_MONO } from "../../constants/theme";

export function ClientBadge({ initials, color }) {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 10,
        background: `linear-gradient(135deg, ${color}22, ${color}0A)`,
        border: `1px solid ${color}44`,
        display: "grid",
        placeItems: "center",
        fontFamily: FONT_MONO,
        fontWeight: 700,
        fontSize: 14,
        color: color,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}
