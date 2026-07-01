"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

// An arched alcove — the elemental architectural niche. A warm clay gradient
// rises from the base to ground the figure, edged by a thin clay outline. The
// whole niche wipes up from the floor on scroll (clipPath), like light filling
// a recess. viewBox is 80×100 (0.8) to match the 4/5 box so `none` scaling
// stays uniform and the semicircular head reads as a true arch.
export function PortraitArch(): React.ReactElement {
  const reduce = useReducedMotion();

  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 80 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full text-clay"
      initial={{
        clipPath: reduce ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
      }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1, ease: EASE }}
    >
      <defs>
        <linearGradient id="arch-fill" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.16" />
          <stop offset="0.55" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M6 100 L6 40 A34 34 0 0 1 74 40 L74 100 Z"
        fill="url(#arch-fill)"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </motion.svg>
  );
}
