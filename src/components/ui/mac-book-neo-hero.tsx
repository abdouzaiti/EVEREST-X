"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";

export type FrameSequenceStep = {
  from: number;
  to: number;
  color: string;
  num: string;
  total: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  label: string;
};

export type FrameSequenceHeroProps = {
  frameCount: number;
  framePath: (i: number) => string;
  eagerCount?: number;
  scrollHeight?: string;
  brand?: React.ReactNode;
  navLinks?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  title: React.ReactNode;
  subtitle?: string;
  steps: FrameSequenceStep[];
  className?: string;
};

const cx = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");

export function FrameSequenceHero({
  frameCount,
  framePath,
  eagerCount = 140,
  scrollHeight = "600vh",
  brand,
  navLinks = [],
  ctaLabel,
  ctaHref = "#",
  title,
  subtitle,
  steps,
  className,
}: FrameSequenceHeroProps) {
  const spacerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const cacheRef = useRef<HTMLImageElement[]>(new Array(frameCount));
  const loadedRef = useRef(0);
  const targetFrameRef = useRef(0);
  const displayFrameRef = useRef(0);
  const lastShownRef = useRef(-1);
  const rafActiveRef = useRef(false);

  const [loadPct, setLoadPct] = useState(0);
  const [loaderDone, setLoaderDone] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [subHidden, setSubHidden] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [progress, setProgress] = useState(0);
  const [stepLocal, setStepLocal] = useState(0);
  const [currentSrc, setCurrentSrc] = useState<string>(() => framePath(0));

  const showFrame = (i: number) => {
    if (i === lastShownRef.current && canvasRef.current && contextRef.current) return;
    const path = framePath(i + 1);
    setCurrentSrc(path);
    lastShownRef.current = i;

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = contextRef.current || canvas.getContext("2d");
      if (ctx) {
        if (!contextRef.current) contextRef.current = ctx;

        let img = cacheRef.current[i];
        if (!img || !img.complete || img.naturalWidth === 0) {
          // Fallback to nearest loaded image to prevent empty flashes
          let found = false;
          for (let offset = 1; offset < Math.max(i, frameCount - i); offset++) {
            const prevImg = cacheRef.current[i - offset];
            if (prevImg && prevImg.complete && prevImg.naturalWidth > 0) {
              img = prevImg;
              found = true;
              break;
            }
            const nextImg = cacheRef.current[i + offset];
            if (nextImg && nextImg.complete && nextImg.naturalWidth > 0) {
              img = nextImg;
              found = true;
              break;
            }
          }
        }

        if (img && img.complete && img.naturalWidth > 0) {
          if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        } else {
          // Absolute fallback: load target image dynamically if missing
          const fallbackImg = new Image();
          fallbackImg.src = path;
          fallbackImg.onload = () => {
            if (canvas.width !== fallbackImg.naturalWidth || canvas.height !== fallbackImg.naturalHeight) {
              canvas.width = fallbackImg.naturalWidth;
              canvas.height = fallbackImg.naturalHeight;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(fallbackImg, 0, 0);
          };
        }
      }
    }
  };

  const loop = () => {
    if (rafActiveRef.current) return;
    rafActiveRef.current = true;
    const tick = () => {
      const diff = targetFrameRef.current - displayFrameRef.current;
      if (Math.abs(diff) < 0.05) {
        displayFrameRef.current = targetFrameRef.current;
      } else {
        displayFrameRef.current += diff * 0.12; // Smoother lerp for perfect ease-out inertia
      }

      const p = frameCount > 1 ? displayFrameRef.current / (frameCount - 1) : 0;
      setProgress(p);

      let idx = -1;
      let local = 0;
      for (let i = 0; i < steps.length; i++) {
        const s = steps[i];
        if (p >= s.from && p < s.to) {
          idx = i;
          local = (p - s.from) / (s.to - s.from);
          break;
        }
      }
      setActiveIdx(idx);
      setStepLocal(Math.max(0, Math.min(1, local)));

      const idxFrame = Math.max(0, Math.min(frameCount - 1, Math.round(displayFrameRef.current)));
      showFrame(idxFrame);

      if (displayFrameRef.current !== targetFrameRef.current) {
        requestAnimationFrame(tick);
      } else {
        rafActiveRef.current = false;
      }
    };
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    const eager = Math.min(eagerCount, frameCount);
    const loadOne = (i: number) => {
      const img = new Image();
      img.decoding = "async";
      img.src = framePath(i + 1);
      const onSettle = () => {
        loadedRef.current += 1;
        const pct = Math.round((loadedRef.current / frameCount) * 100);
        setLoadPct(pct);
        
        // Draw the first frame on canvas immediately once loaded
        if (i === 0) {
          showFrame(0);
        }

        if (loadedRef.current === eager) {
          setLoaderDone(true);
          for (let j = eager; j < frameCount; j++) loadOne(j);
        }
      };
      img.onload = onSettle;
      img.onerror = onSettle;
      cacheRef.current[i] = img;
    };
    for (let i = 0; i < eager; i++) loadOne(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount, eagerCount]);

  const onScroll = () => {
    const spacer = spacerRef.current;
    if (!spacer) return;
    const total = spacer.offsetHeight - window.innerHeight;
    const p = Math.max(0, Math.min(1, window.scrollY / Math.max(1, total)));
    targetFrameRef.current = p * (frameCount - 1);
    loop();
    setNavScrolled(window.scrollY > 4);
    setSubHidden(window.scrollY > 8);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps, frameCount]);

  return (
    <div className={cx("fsh-root", className)}>
      <div aria-hidden className={cx("fsh-loader", loaderDone && "fsh-loader-done")}>
        <div className="fsh-loader-text">
          {loadPct < 100 ? `Loading · ${loadPct}%` : "Ready"}
        </div>
        <div className="fsh-loader-track">
          <span className="fsh-loader-fill" style={{ width: `${loadPct}%` }} />
        </div>
      </div>

      <nav className={cx("fsh-nav", navScrolled && "fsh-nav-scrolled")}>
        <div className="fsh-brand">{brand}</div>
        {navLinks.length > 0 && (
          <div className="fsh-nav-links">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </div>
        )}
        {ctaLabel && (
          <a href={ctaHref} className="fsh-cta">{ctaLabel}</a>
        )}
      </nav>

      {/* Pinned stage — always full viewport */}
      <div className="fsh-stage">
        <div className="fsh-canvas-wrap">
          <canvas
            ref={canvasRef}
            className="fsh-canvas"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
          {/* Offscreen image element for background loads and progressive support */}
          <img
            src={currentSrc}
            alt=""
            className="sr-only"
            aria-hidden="true"
          />
        </div>

        <div className="fsh-copy">
          <h1 className="fsh-title">{title}</h1>
          {subtitle && (
            <p className={cx("fsh-sub", subHidden && "fsh-sub-hidden")}>{subtitle}</p>
          )}
        </div>

        <div className="fsh-cards">
          {steps.map((s, i) => {
            const isActive = activeIdx === i;
            const isPrev = activeIdx >= 0 && i < activeIdx;
            return (
              <article
                key={i}
                style={{ ["--c" as any]: s.color }}
                className={cx(
                  "fsh-card",
                  isActive && "fsh-card-active",
                  isPrev && "fsh-card-prev"
                )}
              >
                <div className="fsh-card-inner">
                  <span aria-hidden className="fsh-card-glow" />
                  <div className="fsh-card-head">
                    <span className="fsh-card-num">
                      <strong>{s.num}</strong> / {s.total}
                    </span>
                    <span aria-hidden className="fsh-card-icon">
                      {s.icon ?? "✦"}
                    </span>
                  </div>
                  <h3 className="fsh-card-title">{s.title}</h3>
                  <p className="fsh-card-desc">{s.description}</p>
                  <div className="fsh-card-foot">
                    <div className="fsh-ticks">
                      {steps.map((_, j) => {
                        const done = j < activeIdx;
                        const cur = j === activeIdx;
                        return (
                          <i key={j} className="fsh-tick">
                            <span
                              style={{
                                transform: `scaleX(${done ? 1 : cur ? stepLocal : 0})`,
                                transition: done ? "none" : "transform 160ms linear",
                              }}
                            />
                          </i>
                        );
                      })}
                    </div>
                    <span className="fsh-card-label">{s.label}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="fsh-progress">
          <span className="fsh-progress-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      {/* Empty scroll spacer: gives the page its scroll distance */}
      <div ref={spacerRef} className="fsh-spacer" style={{ height: scrollHeight }} />
    </div>
  );
}
