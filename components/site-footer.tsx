import { SITE } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { Wordmark } from "@/components/wordmark";
import FlowingMenu from "@/components/flowing-menu";

const CONTACT_ITEMS: { label: string; text: string; link: string; image: string }[] = [
  {
    label: "Email",
    text: SITE.email,
    link: `mailto:${SITE.email}`,
    image: "/projects/3d-model-rendering/exterior-render.png",
  },
  {
    label: "Phone",
    text: SITE.phone,
    link: `tel:${SITE.phoneHref}`,
    image: "/projects/3d-model-rendering/living-room.jpg",
  },
  {
    label: "LinkedIn",
    text: SITE.linkedinLabel,
    link: SITE.linkedin,
    image: "/projects/3d-model-rendering/stair-lobby.jpg",
  },
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

        <Reveal delay={0.1} className="mt-12">
          <p className="max-w-xl text-lg text-bone/75 md:text-xl">
            Available worldwide for architectural drafting, construction
            documentation, 3D modeling, and visualization — supporting
            architects, interior designers, and developers remotely.
          </p>
        </Reveal>

        {/* Contact register — hover-reveal flowing marquee menu */}
        <Reveal
          delay={0.15}
          className="mt-16 h-[270px] sm:h-[300px]"
        >
          <FlowingMenu
            items={CONTACT_ITEMS}
            speed={15}
            bgColor="transparent"
            textColor="var(--color-bone)"
            marqueeBgColor="var(--color-clay)"
            marqueeTextColor="var(--color-bone)"
            borderColor="var(--color-line-light)"
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-4 pt-8 text-sm text-bone/55 md:flex-row md:items-center md:justify-between">
          <span className="text-base font-extrabold capitalize tracking-tight text-bone">
            <Wordmark />
          </span>
          <span>
            {SITE.title} · © {SITE.portfolioYear} {SITE.name}
          </span>
        </div>

        {/* Signature credit — hand-signed feel */}
        <p className="mt-12 text-right text-2xl leading-none text-bone/80 [font-family:var(--font-signature)] md:text-3xl">
          Made by his <span className="text-clay">wife&apos;s brother</span>
        </p>
      </div>
    </footer>
  );
}
