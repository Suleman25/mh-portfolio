"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { CountUp } from "@/components/count-up";
import { SITE, STATS } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

// Mona Sans width axis: condensed → full. The heading "unfolds to scale".
const WIDTH_COMPRESSED = 75;
const WIDTH_FULL = 100;
const WIDTH_HOVER = 115;

export function Hero(): React.ReactElement {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  // Standard reveal (y + opacity) for the meta and baseline rows.
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  // Headline reveal — each line expands along the variable width axis.
  const lineItem: Variants = {
    hidden: { opacity: 0, "--wdth": reduce ? WIDTH_FULL : WIDTH_COMPRESSED },
    visible: {
      opacity: 1,
      "--wdth": WIDTH_FULL,
      transition: { duration: 1.1, ease: EASE },
    },
  };

  // "Architectural Drafting & Visualization" — clay accents on the & and period.
  const lines: React.ReactNode[] = [
    "Architectural",
    <>
      Drafting <span className="text-clay">&</span>
    </>,
    <>
      Visualization<span className="text-clay">.</span>
    </>,
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Faint residence drawing behind the headline */}
      <Image
        src="/identity/residence.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-center opacity-[0.38]"
      />
      {/* Fade the image into the next section — no hard seam */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-background"
      />
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-6 pt-32 pb-12 sm:px-10 md:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-1 flex-col"
        >
          {/* Top meta — availability left */}
          <div className="flex items-start justify-start gap-6">
            <motion.p
              variants={item}
              className="hidden items-center gap-2 text-left text-sm text-ink-soft sm:flex"
            >
              <span className="relative flex size-2">
                <span
                  className={`absolute inline-flex size-full rounded-full bg-clay/60 ${reduce ? "" : "animate-ping"}`}
                />
                <span className="relative inline-flex size-2 rounded-full bg-clay" />
              </span>
              {SITE.availability}
            </motion.p>
          </div>

          {/* Headline — type unfolds along the variable width axis */}
          <h1 className="display my-auto py-10 text-[clamp(2.75rem,10vw,9.5rem)]">
            {lines.map((line, i) => (
              <motion.span
                key={i}
                variants={lineItem}
                whileHover={reduce ? undefined : { "--wdth": WIDTH_HOVER }}
                className="block pb-[0.06em] [font-variation-settings:'wdth'_var(--wdth,100)]"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* Baseline — tagline + stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 items-end gap-10 pt-8 md:grid-cols-[1fr_auto] md:gap-16"
          >
            <p className="max-w-2xl text-pretty text-lg leading-snug text-ink-soft md:text-xl">
              {SITE.tagline}
            </p>
            <dl className="flex gap-8 sm:gap-12">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="display text-3xl text-clay md:text-4xl">
                    <CountUp to={stat.value} duration={1} />
                    {stat.suffix}
                  </dt>
                  <dd className="mt-1 max-w-[7rem] text-sm leading-tight text-stone">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
