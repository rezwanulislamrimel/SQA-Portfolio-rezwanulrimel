import React from "react";
import { C, FONT_MONO } from "../../constants/theme";

export function SectionTag({ children }) {
  return (
    <div
      style={{
        fontFamily: FONT_MONO,
        fontSize: 12.5,
        color: C.textFaint,
        marginBottom: 10,
      }}
    >
      {children}
    </div>
  );
}
