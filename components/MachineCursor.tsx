"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Volume2, VolumeX, Crosshair, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

interface ClickShockwave {
  id: number;
  x: number;
  y: number;
  isInteractive: boolean;
}

export default function MachineCursor() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  // Position state
  const mousePos = useRef({ x: -100, y: -100 });
  const smoothPos = useRef({ x: -100, y: -100 });
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [shockwaves, setShockwaves] = useState<ClickShockwave[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Audio Context reference
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize Web Audio Context safely on user gesture
  const getAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Synthesize futuristic mechanical machine click
  const playMachineSound = useCallback(
    (isInteractive: boolean) => {
      if (!soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;

      try {
        const now = ctx.currentTime;

        // 1. Mechanical transient click (Fast pitch-envelope impulse)
        const snapOsc = ctx.createOscillator();
        const snapGain = ctx.createGain();

        snapOsc.type = isInteractive ? "triangle" : "sine";
        snapOsc.frequency.setValueAtTime(isInteractive ? 2400 : 1600, now);
        snapOsc.frequency.exponentialRampToValueAtTime(160, now + 0.022);

        snapGain.gain.setValueAtTime(0.18, now);
        snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);

        snapOsc.connect(snapGain);
        snapGain.connect(ctx.destination);

        snapOsc.start(now);
        snapOsc.stop(now + 0.023);

        if (isInteractive) {
          // 2. High-tech target confirmation chirp (Sci-Fi HUD acknowledge)
          const beepOsc = ctx.createOscillator();
          const beepGain = ctx.createGain();

          beepOsc.type = "sine";
          beepOsc.frequency.setValueAtTime(1100, now + 0.008);
          beepOsc.frequency.exponentialRampToValueAtTime(1550, now + 0.028);

          beepGain.gain.setValueAtTime(0.001, now);
          beepGain.gain.setValueAtTime(0.12, now + 0.008);
          beepGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

          beepOsc.connect(beepGain);
          beepGain.connect(ctx.destination);

          beepOsc.start(now + 0.008);
          beepOsc.stop(now + 0.052);
        } else {
          // 2. Machine relay sub-thump (mechanical body resonance)
          const subOsc = ctx.createOscillator();
          const subGain = ctx.createGain();

          subOsc.type = "sine";
          subOsc.frequency.setValueAtTime(320, now);
          subOsc.frequency.exponentialRampToValueAtTime(50, now + 0.035);

          subGain.gain.setValueAtTime(0.14, now);
          subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

          subOsc.connect(subGain);
          subGain.connect(ctx.destination);

          subOsc.start(now);
          subOsc.stop(now + 0.036);
        }
      } catch {
        // Ignore audio playback exceptions if backgrounded
      }
    },
    [soundEnabled, getAudioContext]
  );

  useEffect(() => {
    setMounted(true);

    // Only activate custom cursor on fine pointer devices (desktops/laptops with mouse)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, input, select, textarea, [role='button'], .cursor-pointer, [data-interactive='true']"
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest(
        "a, button, input, select, textarea, [role='button'], .cursor-pointer, [data-interactive='true']"
      );

      // Play machine sound
      playMachineSound(isInteractive);

      // Trigger visual shockwave
      const newShockwave: ClickShockwave = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        isInteractive,
      };

      setShockwaves((prev) => [...prev.slice(-6), newShockwave]);

      setTimeout(() => {
        setShockwaves((prev) => prev.filter((s) => s.id !== newShockwave.id));
      }, 500);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Smooth Lerp Animation Loop for outer follower reticle
    let animId: number;
    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const renderLoop = () => {
      smoothPos.current.x = lerp(smoothPos.current.x, mousePos.current.x, 0.22);
      smoothPos.current.y = lerp(smoothPos.current.y, mousePos.current.y, 0.22);
      setCoords({ x: Math.round(mousePos.current.x), y: Math.round(mousePos.current.y) });
      animId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animId);
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [playMachineSound]);

  if (!mounted) return null;

  return (
    <>
      {/* Visual Reticle Elements (Only shown when mouse is on page) */}
      {isVisible && (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
          {/* 1. Center Precision Dot & Crosshair */}
          <div
            className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-75 ease-out"
            style={{
              transform: `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`,
            }}
          >
            {/* Crosshair lines */}
            <div
              className={`absolute -top-3 left-1/2 -translate-x-1/2 w-[1px] h-2 transition-colors ${
                isHovered
                  ? isLight
                    ? "bg-emerald-600"
                    : "bg-emerald-400"
                  : isLight
                  ? "bg-cyan-700"
                  : "bg-cyan-400"
              }`}
            />
            <div
              className={`absolute top-1.5 left-1/2 -translate-x-1/2 w-[1px] h-2 transition-colors ${
                isHovered
                  ? isLight
                    ? "bg-emerald-600"
                    : "bg-emerald-400"
                  : isLight
                  ? "bg-cyan-700"
                  : "bg-cyan-400"
              }`}
            />
            <div
              className={`absolute top-1/2 -left-3 -translate-y-1/2 h-[1px] w-2 transition-colors ${
                isHovered
                  ? isLight
                    ? "bg-emerald-600"
                    : "bg-emerald-400"
                  : isLight
                  ? "bg-cyan-700"
                  : "bg-cyan-400"
              }`}
            />
            <div
              className={`absolute top-1/2 left-1.5 -translate-y-1/2 h-[1px] w-2 transition-colors ${
                isHovered
                  ? isLight
                    ? "bg-emerald-600"
                    : "bg-emerald-400"
                  : isLight
                  ? "bg-cyan-700"
                  : "bg-cyan-400"
              }`}
            />

            {/* Center Core Pixel */}
            <div
              className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all duration-150 ${
                isMouseDown
                  ? "scale-150 bg-rose-500 shadow-rose-500/50"
                  : isHovered
                  ? isLight
                    ? "scale-125 bg-emerald-600 shadow-emerald-600/40"
                    : "scale-125 bg-emerald-400 shadow-emerald-400/50"
                  : isLight
                  ? "bg-cyan-700 shadow-cyan-700/40"
                  : "bg-cyan-400 shadow-cyan-400/60"
              }`}
            />
          </div>

          {/* 2. Outer Smooth Follower Cyber Reticle */}
          <div
            className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
            style={{
              transform: `translate3d(${smoothPos.current.x}px, ${smoothPos.current.y}px, 0)`,
            }}
          >
            <div
              className={`relative flex items-center justify-center transition-all duration-200 ease-out ${
                isMouseDown
                  ? "w-7 h-7 scale-90"
                  : isHovered
                  ? "w-11 h-11 rotate-45 scale-110"
                  : "w-8 h-8 rotate-0 scale-100"
              }`}
            >
              {/* Corner brackets simulating targeting computer */}
              {/* Top-Left */}
              <div
                className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 transition-colors duration-200 ${
                  isHovered
                    ? isLight
                      ? "border-emerald-600"
                      : "border-emerald-400"
                    : isLight
                    ? "border-cyan-600/70"
                    : "border-cyan-400/70"
                }`}
              />
              {/* Top-Right */}
              <div
                className={`absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 transition-colors duration-200 ${
                  isHovered
                    ? isLight
                      ? "border-emerald-600"
                      : "border-emerald-400"
                    : isLight
                    ? "border-cyan-600/70"
                    : "border-cyan-400/70"
                }`}
              />
              {/* Bottom-Left */}
              <div
                className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 transition-colors duration-200 ${
                  isHovered
                    ? isLight
                      ? "border-emerald-600"
                      : "border-emerald-400"
                    : isLight
                    ? "border-cyan-600/70"
                    : "border-cyan-400/70"
                }`}
              />
              {/* Bottom-Right */}
              <div
                className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 transition-colors duration-200 ${
                  isHovered
                    ? isLight
                      ? "border-emerald-600"
                      : "border-emerald-400"
                    : isLight
                    ? "border-cyan-600/70"
                    : "border-cyan-400/70"
                }`}
              />

              {/* Sub-ring circle */}
              <div
                className={`w-full h-full rounded-full border transition-all duration-300 ${
                  isHovered
                    ? isLight
                      ? "border-emerald-600/30 bg-emerald-500/5 animate-pulse"
                      : "border-emerald-400/30 bg-emerald-500/10 animate-pulse"
                    : isLight
                    ? "border-cyan-600/20 bg-cyan-600/5"
                    : "border-cyan-400/20 bg-cyan-400/5"
                }`}
              />
            </div>

            {/* 3. Micro Machine Coordinates Readout Badge */}
            <div
              className={`absolute left-7 top-3 flex items-center gap-1.5 font-mono text-[9px] px-1.5 py-0.5 rounded border whitespace-nowrap pointer-events-none transition-all duration-150 ${
                isHovered
                  ? isLight
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold"
                    : "bg-emerald-950/80 text-emerald-300 border-emerald-500/40 font-bold"
                  : isLight
                  ? "bg-white/90 text-slate-700 border-slate-300 font-medium"
                  : "bg-zinc-950/85 text-cyan-300/80 border-cyan-500/30 font-medium"
              }`}
            >
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>
                {isHovered
                  ? "TARGET: LOCKED"
                  : `X:${coords.x.toString().padStart(4, "0")} Y:${coords.y.toString().padStart(4, "0")}`}
              </span>
            </div>
          </div>

          {/* 4. Click Visual Shockwave Pulses */}
          {shockwaves.map((sw) => (
            <div
              key={sw.id}
              className="fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate3d(${sw.x}px, ${sw.y}px, 0)`,
              }}
            >
              {/* Expanding Shockwave Ring */}
              <div
                className={`rounded-full animate-ping ${
                  sw.isInteractive
                    ? isLight
                      ? "border-2 border-emerald-600 bg-emerald-600/15 w-12 h-12"
                      : "border-2 border-emerald-400 bg-emerald-400/20 w-12 h-12"
                    : isLight
                    ? "border border-cyan-700 bg-cyan-700/10 w-8 h-8"
                    : "border border-cyan-400 bg-cyan-400/15 w-8 h-8"
                }`}
                style={{ animationDuration: "350ms" }}
              />

              {/* 4 Corner Dispersion Ticks */}
              <div
                className={`absolute inset-0 flex items-center justify-center animate-out fade-out zoom-out-150 duration-300 ${
                  sw.isInteractive ? "text-emerald-400" : "text-cyan-400"
                }`}
              >
                <div className="w-6 h-6 border border-current rotate-45 opacity-60" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating HUD Widget: Machine Sound & Cursor Toggle (Bottom-Left) */}
      <div className="fixed bottom-5 left-5 z-40 print:hidden">
        <button
          suppressHydrationWarning
          onClick={() => {
            const next = !soundEnabled;
            setSoundEnabled(next);
            if (next) {
              getAudioContext();
              playMachineSound(true);
            }
          }}
          title={soundEnabled ? "Machine Audio Click: Enabled (Click to Mute)" : "Machine Audio Click: Muted (Click to Enable)"}
          className={`flex items-center gap-2 px-3 py-2 rounded-2xl border text-xs font-mono backdrop-blur-xl shadow-lg transition-all ${
            soundEnabled
              ? isLight
                ? "bg-white/90 border-cyan-600/30 text-cyan-800 shadow-cyan-600/10 hover:border-cyan-600"
                : "bg-zinc-950/85 border-cyan-500/30 text-cyan-300 shadow-cyan-500/10 hover:border-cyan-400"
              : isLight
              ? "bg-slate-100/90 border-slate-300 text-slate-500 hover:text-slate-800"
              : "bg-zinc-900/80 border-zinc-800 text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {soundEnabled ? (
            <>
              <Volume2 size={14} className={isLight ? "text-cyan-700" : "text-cyan-400"} />
              <div className="flex items-center gap-1">
                <span className="font-semibold tracking-wider">AUDIO HUD</span>
                <span className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-2 bg-emerald-400 animate-pulse rounded-full" />
                  <span className="w-0.5 h-3 bg-cyan-400 animate-pulse rounded-full" style={{ animationDelay: "150ms" }} />
                  <span className="w-0.5 h-1.5 bg-emerald-400 animate-pulse rounded-full" style={{ animationDelay: "300ms" }} />
                </span>
              </div>
            </>
          ) : (
            <>
              <VolumeX size={14} className="text-zinc-500" />
              <span>AUDIO: MUTED</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
