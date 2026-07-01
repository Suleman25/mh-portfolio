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

// Grain = clay color punched through an SVG fractal-noise alpha mask.
const GRAIN_NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
// Fade confines the grain to the bottom so it reads as a contained glow.
const GRAIN_FADE =
  "linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 32%, transparent 100%)";

export function SiteFooter(): React.ReactElement {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-ink text-bone"
    >
      {/* Orange grain glow — contained at the section bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%]"
        style={{ maskImage: GRAIN_FADE, WebkitMaskImage: GRAIN_FADE }}
      >
        <div
          className="absolute inset-0 bg-clay opacity-45"
          style={{
            maskImage: `url("${GRAIN_NOISE}")`,
            WebkitMaskImage: `url("${GRAIN_NOISE}")`,
            maskSize: "200px 200px",
            WebkitMaskSize: "200px 200px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 md:py-28">
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
      </div>
    </footer>
  );
}
