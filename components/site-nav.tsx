"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Wordmark } from "@/components/wordmark";
import { NAV_LINKS } from "@/lib/site";

const ALL_LINKS = [...NAV_LINKS, { label: "Contact", href: "/#contact" }];

export function SiteNav(): React.ReactElement {
  const [open, setOpen] = useState(false);
  // Show the nav only over the first (hero) section; hide past it.
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = (): void =>
      setHidden(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-transparent transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight capitalize text-ink"
        >
          <Wordmark />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-ink-soft">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-clay">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className="text-sm font-medium text-ink transition-colors hover:text-clay"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile cluster */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex flex-col gap-[5px] p-2"
          >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        className={`grid overflow-hidden border-line bg-bone/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr] border-b" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="flex min-h-0 flex-col gap-1 px-6 py-2 text-ink">
          {ALL_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-2xl font-semibold tracking-tight"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
