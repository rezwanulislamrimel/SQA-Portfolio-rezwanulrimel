import React from "react";
import { C } from "../../constants/theme";

export function StatusDot({ color = C.pass }) {
  return (
    <span
      style={{
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: color,
        display: "inline-block",
        boxShadow: `0 0 8px ${color}`,
      }}
    />
  );
}
