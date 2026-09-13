"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  cluster: number;
  baseAlpha: number;
  pulsePhase: number;
}

const CLUSTER_COLORS_DARK = [
  "rgba(6, 182, 212, ",   // Cyan
  "rgba(16, 185, 129, ",  // Emerald
  "rgba(139, 92, 246, ",  // Violet
  "rgba(245, 158, 11, ",  // Amber
];

const CLUSTER_COLORS_LIGHT = [
  "rgba(8, 145, 178, ",   // Cyan-600
  "rgba(5, 150, 105, ",   // Emerald-600
  "rgba(124, 58, 237, ",  // Violet-600
  "rgba(217, 119, 6, ",   // Amber-600
];

export default function DataCanvas() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const isLightRef = useRef(isLight);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    isLightRef.current = isLight;
  }, [isLight]);

  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: 140,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check system prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
      if (prefersReducedMotion) {
        drawFrame();
      }
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // Quieter node count: 20 on mobile, 40 on desktop (reduced from 85)
    let nodes: Node[] = [];
    const count = width < 768 ? 20 : 40;

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35, // Slower, calmer drift
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.8 + 1.0,
          cluster: Math.floor(Math.random() * 4),
          baseAlpha: Math.random() * 0.3 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initNodes();

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient grid
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = isLightRef.current
        ? "rgba(15, 23, 42, 0.03)"
        : "rgba(14, 165, 233, 0.025)";
      const gridSize = 100;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw nodes and subtle links
      const maxDist = width < 768 ? 85 : 120;
      const mouse = mouseRef.current;
      const clusterPalette = isLightRef.current ? CLUSTER_COLORS_LIGHT : CLUSTER_COLORS_DARK;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Subtle gentle mouse attraction
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const force = (1 - dist / mouse.radius) * 0.4;
              node.x += (dx / dist) * force;
              node.y += (dy / dist) * force;
            }
          }
        }

        // Clean subtle connection lines
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.11;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = isLightRef.current
              ? `rgba(71, 85, 105, ${alpha * 1.2})`
              : `${clusterPalette[node.cluster]}${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Draw node
        node.pulsePhase += 0.015;
        const currentRadius = node.radius + Math.sin(node.pulsePhase) * 0.4;
        const colorPrefix = clusterPalette[node.cluster];

        // Soft glow halo
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          currentRadius * 2.5
        );
        gradient.addColorStop(0, `${colorPrefix}0.5)`);
        gradient.addColorStop(1, `${colorPrefix}0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Core point
        ctx.fillStyle = `${colorPrefix}0.85)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    if (prefersReducedMotion) {
      drawFrame();
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    const render = () => {
      drawFrame();
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
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-60 transition-opacity duration-700"
    />
  );
}
