import React, { useEffect, useRef } from "react";
import { C, FONT_MONO } from "../../constants/theme";

export function SQABackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for subtle interactive reaction
    const mouse = { x: -1000, y: -1000, radius: 140 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // QA / Testing Node labels
    const QA_TAGS = [
      "✓ PASS",
      "200 OK",
      "assert(true)",
      "0 defects",
      "POM: ready",
      "coverage: 99%",
      "k6: 0% error",
      "CI: verified",
      "Playwright",
      "API: 24ms",
    ];

    let nodes = [];
    const isMobile = width < 768;
    const NODE_COUNT = isMobile ? 18 : 34;
    const MAX_DIST = isMobile ? 120 : 170;

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const hasTag = i < QA_TAGS.length && (i % 2 === 0 || i < 6);
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: hasTag ? 3.5 : 2,
          label: hasTag ? QA_TAGS[i % QA_TAGS.length] : null,
          pulseTimer: Math.random() * 200,
          pulseMax: 150 + Math.random() * 150,
        });
      }
    };

    initNodes();

    // Data test packets between nodes
    const packets = [];
    const spawnPacket = (fromNode, toNode) => {
      packets.push({
        from: fromNode,
        to: toNode,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        color: Math.random() > 0.3 ? C.pass : C.warn,
      });
    };

    let packetSpawnCooldown = 0;

    // ──────────────────────────────────────────────
    // BUG HUNTER RADAR & ELIMINATION SUBSYSTEM
    // ──────────────────────────────────────────────
    const BUG_TYPES = [
      "Race Condition",
      "Uncaught 500",
      "Memory Leak",
      "Null Pointer",
      "CSS Overflow",
      "Auth Token Expire",
      "Double Click Order",
    ];

    let activeBug = null;
    let bugTimer = 100; // time until next bug spawns

    const spawnBug = () => {
      const padding = 120;
      activeBug = {
        x: padding + Math.random() * (width - padding * 2),
        y: padding + Math.random() * (height - padding * 2),
        type: BUG_TYPES[Math.floor(Math.random() * BUG_TYPES.length)],
        state: "detected", // 'detected' -> 'targeted' -> 'resolving' -> 'fixed'
        timer: 0,
        scanRadius: 36,
        radarAngle: 0,
        hunterNode: null,
      };

      // Find closest node to act as the "Hunter" test runner
      let closest = null;
      let minD = Infinity;
      nodes.forEach((n) => {
        const d = Math.hypot(n.x - activeBug.x, n.y - activeBug.y);
        if (d < minD) {
          minD = d;
          closest = n;
        }
      });
      activeBug.hunterNode = closest;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Periodically spawn test packets between close nodes
      packetSpawnCooldown++;
      if (packetSpawnCooldown > 45 && packets.length < 12) {
        packetSpawnCooldown = 0;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MAX_DIST && Math.random() < 0.15) {
              spawnPacket(nodes[i], nodes[j]);
              break;
            }
          }
        }
      }

      // Draw connection lines between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 245, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        // Connection to mouse cursor
        const mdx = nodes[i].x - mouse.x;
        const mdy = nodes[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius) {
          const mAlpha = (1 - mdist / mouse.radius) * 0.28;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Draw and update data test packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const px = pkt.from.x + (pkt.to.x - pkt.from.x) * pkt.progress;
        const py = pkt.from.y + (pkt.to.y - pkt.from.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ──────────────────────────────────────────────
      // RENDER BUG HUNTER SIMULATION
      // ──────────────────────────────────────────────
      if (!activeBug) {
        bugTimer--;
        if (bugTimer <= 0) {
          spawnBug();
          bugTimer = 280 + Math.random() * 200; // delay between bug hunts
        }
      } else {
        activeBug.timer++;
        activeBug.radarAngle += 0.06;

        // Stage transitions:
        // 0-60: Detected (Red bug target)
        // 60-140: Targeted (Radar crosshair locks on)
        // 140-200: Resolving (Test laser shoots from Hunter Node)
        // 200-260: Fixed (Turns Cyan, shows ✓ RESOLVED, shockwave)
        if (activeBug.timer > 60 && activeBug.state === "detected") {
          activeBug.state = "targeted";
        }
        if (activeBug.timer > 130 && activeBug.state === "targeted") {
          activeBug.state = "resolving";
        }
        if (activeBug.timer > 190 && activeBug.state === "resolving") {
          activeBug.state = "fixed";
        }
        if (activeBug.timer > 260) {
          activeBug = null; // Bug cycle finished
        }

        if (activeBug) {
          const bx = activeBug.x;
          const by = activeBug.y;

          if (activeBug.state === "detected" || activeBug.state === "targeted") {
            // Pulsing Red Bug Warning Ring
            const pulse = (Math.sin(activeBug.timer * 0.15) + 1) * 0.5;
            ctx.beginPath();
            ctx.arc(bx, by, 12 + pulse * 6, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(255, 107, 107, ${0.4 + pulse * 0.4})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Bug Center Dot
            ctx.beginPath();
            ctx.arc(bx, by, 4, 0, Math.PI * 2);
            ctx.fillStyle = C.fail;
            ctx.shadowColor = C.fail;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Rotating Radar Crosshair
            ctx.beginPath();
            ctx.arc(bx, by, 22, activeBug.radarAngle, activeBug.radarAngle + Math.PI * 0.75);
            ctx.strokeStyle = "rgba(255, 107, 107, 0.7)";
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Crosshair ticks
            ctx.beginPath();
            ctx.moveTo(bx - 26, by);
            ctx.lineTo(bx - 14, by);
            ctx.moveTo(bx + 14, by);
            ctx.lineTo(bx + 26, by);
            ctx.moveTo(bx, by - 26);
            ctx.lineTo(bx, by - 14);
            ctx.moveTo(bx, by + 14);
            ctx.lineTo(bx, by + 26);
            ctx.strokeStyle = "rgba(255, 107, 107, 0.5)";
            ctx.stroke();

            // Bug Label
            ctx.font = "10.5px 'JetBrains Mono', monospace";
            ctx.fillStyle = C.fail;
            ctx.fillText(`🐞 DEFECT: ${activeBug.type}`, bx + 18, by - 10);
            ctx.font = "9px 'JetBrains Mono', monospace";
            ctx.fillStyle = "rgba(255, 107, 107, 0.7)";
            ctx.fillText(activeBug.state === "targeted" ? "[RADAR LOCKED]" : "[DETECTED]", bx + 18, by + 4);
          } else if (activeBug.state === "resolving") {
            // SQA Automated Test Beam targeting bug
            if (activeBug.hunterNode) {
              ctx.beginPath();
              ctx.moveTo(activeBug.hunterNode.x, activeBug.hunterNode.y);
              ctx.lineTo(bx, by);
              ctx.strokeStyle = C.pass;
              ctx.lineWidth = 1.5;
              ctx.shadowColor = C.pass;
              ctx.shadowBlur = 12;
              ctx.stroke();
              ctx.shadowBlur = 0;
            }

            // Target circle contracting
            ctx.beginPath();
            ctx.arc(bx, by, 8, 0, Math.PI * 2);
            ctx.fillStyle = C.pass;
            ctx.fill();

            ctx.font = "10.5px 'JetBrains Mono', monospace";
            ctx.fillStyle = C.pass;
            ctx.fillText(`⚡ RUNNING TEST ASSERTION...`, bx + 18, by - 6);
          } else if (activeBug.state === "fixed") {
            // Expansion shockwave
            const expandProgress = (activeBug.timer - 190) / 70;
            const shockRadius = 10 + expandProgress * 35;
            const shockAlpha = 1 - expandProgress;

            ctx.beginPath();
            ctx.arc(bx, by, shockRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 245, 212, ${shockAlpha * 0.8})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Center fixed dot
            ctx.beginPath();
            ctx.arc(bx, by, 4.5, 0, Math.PI * 2);
            ctx.fillStyle = C.pass;
            ctx.fill();

            // Fixed badge
            ctx.font = "11px 'JetBrains Mono', monospace";
            ctx.fillStyle = C.pass;
            ctx.fillText(`✓ FIXED & VERIFIED [0 REGRESSION]`, bx + 18, by - 4);
          }
        }
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Move
        n.x += n.vx;
        n.y += n.vy;

        // Bounce
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Pulse timer
        n.pulseTimer++;
        const isPulsing = n.pulseTimer % n.pulseMax < 30;

        // Node circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.label ? C.pass : "rgba(169, 177, 198, 0.4)";
        if (n.label) {
          ctx.shadowColor = C.pass;
          ctx.shadowBlur = isPulsing ? 10 : 4;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw QA Tag / Assertion label
        if (n.label) {
          ctx.font = "10px 'JetBrains Mono', monospace";
          ctx.fillStyle = isPulsing ? C.pass : "rgba(0, 245, 212, 0.65)";
          ctx.fillText(n.label, n.x + 8, n.y + 3);

          // Subtle pulse ring
          if (isPulsing) {
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.radius + 6, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(0, 245, 212, 0.25)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <style>{`
        /* SQA Continuous Scan Beam Animation */
        @keyframes sqaScannerSweep {
          0% {
            top: -10%;
            opacity: 0;
          }
          10% {
            opacity: 0.65;
          }
          50% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.65;
          }
          100% {
            top: 110%;
            opacity: 0;
          }
        }

        /* Subtle ambient glow pulse */
        @keyframes ambientBreathe {
          0%, 100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.08;
          }
          50% {
            transform: scale(1.15) translate(20px, -15px);
            opacity: 0.14;
          }
        }

        /* Floating QA Assertion Snippets */
        @keyframes floatSlow1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(1deg); }
        }
        @keyframes floatSlow2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(-1.5deg); }
        }
        @keyframes floatSlow3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }

        .sqa-scan-beam {
          position: absolute;
          left: 0;
          right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent 5%, rgba(0, 245, 212, 0.2) 30%, rgba(0, 245, 212, 0.4) 50%, rgba(56, 189, 248, 0.2) 70%, transparent 95%);
          box-shadow: 0 0 10px rgba(0, 245, 212, 0.25);
          animation: sqaScannerSweep 16s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          opacity: 0.4;
        }

        .sqa-grid-backdrop {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle, rgba(0, 245, 212, 0.05) 1px, transparent 1px),
            linear-gradient(to right, rgba(244, 245, 247, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(244, 245, 247, 0.015) 1px, transparent 1px);
          background-size: 40px 40px, 80px 80px, 80px 80px;
          opacity: 0.6;
        }

        .sqa-badge-drift {
          position: absolute;
          font-family: ${FONT_MONO};
          font-size: 11px;
          padding: 5px 10px;
          border-radius: 6px;
          background: rgba(11, 19, 43, 0.85);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(0, 245, 212, 0.15);
          color: rgba(209, 213, 219, 0.6);
          display: flex;
          align-items: center;
          gap: 6px;
          user-select: none;
          opacity: 0.6;
        }

        @media (max-width: 1280px) {
          .sqa-badge-drift { display: none !important; }
        }
      `}</style>

      {/* Cybernetic Dot & Matrix Grid */}
      <div className="sqa-grid-backdrop" />

      {/* Ambient SQA Lighting Orbs (Cyan & Sky Blue) */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 245, 212, 0.10) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "ambientBreathe 14s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "-5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "ambientBreathe 18s ease-in-out infinite reverse",
        }}
      />

      {/* Automated Quality Scan Beam */}
      <div className="sqa-scan-beam" />

      {/* Interactive SQA Node Network Canvas (Subtle & High Contrast) */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          opacity: 0.32, // Soft, non-intrusive backdrop
        }}
      />

      {/* Central Vignette Contrast Shield — Ensures text has 100% crisp legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 35%, rgba(11, 19, 43, 0.5) 0%, rgba(11, 19, 43, 0.85) 65%, #0B132B 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Drifting SQA Telemetry Badges (Only on extra wide desktop) */}
      <div
        className="sqa-badge-drift"
        style={{
          top: "16%",
          left: "3%",
          animation: "floatSlow1 7s ease-in-out infinite",
          borderColor: "rgba(0, 245, 212, 0.25)",
        }}
      >
        <span style={{ color: C.pass }}>🛡️</span>
        <span>Bug Shield: Active · 0 Prod Escapes</span>
      </div>

      <div
        className="sqa-badge-drift"
        style={{
          top: "40%",
          right: "3%",
          animation: "floatSlow2 9s ease-in-out infinite",
          borderColor: "rgba(56, 189, 248, 0.25)",
        }}
      >
        <span style={{ color: C.info }}>●</span>
        <span>GET /api/v1/health → 200 OK</span>
      </div>

      <div
        className="sqa-badge-drift"
        style={{
          bottom: "22%",
          right: "4%",
          animation: "floatSlow3 8s ease-in-out infinite",
          borderColor: "rgba(0, 245, 212, 0.2)",
        }}
      >
        <span style={{ color: C.pass }}>›_</span>
        <span>playwright --workers=4 [POM]</span>
      </div>

      <div
        className="sqa-badge-drift"
        style={{
          bottom: "12%",
          left: "4%",
          animation: "floatSlow1 10s ease-in-out infinite",
          borderColor: "rgba(56, 189, 248, 0.2)",
        }}
      >
        <span style={{ color: C.warn }}>⚡</span>
        <span>k6: 250 req/s · p95 &lt; 85ms</span>
      </div>
    </div>
  );
}

export default SQABackground;
