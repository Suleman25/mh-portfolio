import { SITE } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { ArrowCircle } from "@/components/arrow-circle";

const CONTACT_LINES: { label: string; value: string; href: string }[] = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneHref}` },
  { label: "LinkedIn", value: SITE.linkedinLabel, href: SITE.linkedin },
];

export function SiteFooter(): React.ReactElement {
  return (
    <footer id="contact" className="scroll-mt-20 bg-ink text-bone">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow !text-bone/60">Contact</p>
          <h2 className="display mt-6 text-[clamp(2.5rem,8vw,7rem)]">
            Let&apos;s build the
            <br />
            drawing set<span className="text-clay">.</span>
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 grid gap-10 border-t border-line-light pt-10 md:grid-cols-[1fr_auto] md:items-end"
        >
          <p className="max-w-xl text-lg text-bone/75 md:text-xl">
            Available worldwide for architectural drafting, construction
            documentation, 3D modeling, and visualization — supporting
            architects, interior designers, and developers remotely.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="group flex items-center gap-4 text-2xl font-semibold tracking-tight transition-colors hover:text-clay md:text-3xl"
          >
            {SITE.email}
            <ArrowCircle className="!bg-clay !text-bone" />
          </a>
        </Reveal>

        {/* Contact details */}
        <Reveal
          delay={0.15}
          className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line-light bg-line-light sm:grid-cols-3"
        >
          {CONTACT_LINES.map((line) => (
            <a
              key={line.label}
              href={line.href}
              target={line.label === "LinkedIn" ? "_blank" : undefined}
              rel={line.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="group bg-ink p-6 transition-colors hover:bg-ink/80"
            >
              <span className="eyebrow !text-bone/50">{line.label}</span>
              <span className="mt-2 block text-base text-bone transition-colors group-hover:text-clay">
                {line.value}
              </span>
            </a>
          ))}
        </Reveal>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-light pt-8 text-sm text-bone/55 md:flex-row md:items-center md:justify-between">
          <span className="text-base font-extrabold lowercase tracking-tight text-bone">
            {SITE.wordmark}
          </span>
          <span>
            {SITE.title} · © {SITE.portfolioYear} {SITE.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
