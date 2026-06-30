"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { SITE, STATS } from "@/lib/site";

export function Hero(): React.ReactElement {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // "Architectural Drafting & Visualization" — last word gets the clay accent.
  const headline = ["Architectural", "Drafting &", "Visualization"];

  return (
    <section id="top">
      <div className="mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-6 pt-32 pb-12 sm:px-10 md:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-1 flex-col"
        >
          {/* Top meta — name left, availability right */}
          <div className="flex items-start justify-between gap-6">
            <motion.p variants={item} className="eyebrow">
              {SITE.name} — Portfolio {SITE.portfolioYear}
            </motion.p>
            <motion.p
              variants={item}
              className="hidden items-center gap-2 text-right text-sm text-ink-soft sm:flex"
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

          {/* Headline */}
          <h1 className="display my-auto py-10 text-[clamp(2.75rem,10vw,9.5rem)]">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span variants={item} className="block">
                  {line}
                  {i === headline.length - 1 && (
                    <span className="text-clay">.</span>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Baseline — tagline + stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 items-end gap-10 border-t border-line pt-8 md:grid-cols-[1fr_auto] md:gap-16"
          >
            <p className="max-w-2xl text-pretty text-lg leading-snug text-ink-soft md:text-xl">
              {SITE.tagline}
            </p>
            <dl className="flex gap-8 sm:gap-12">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="display text-3xl text-clay md:text-4xl">
                    {stat.value}
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
