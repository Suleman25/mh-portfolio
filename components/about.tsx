import Image from "next/image";
import { PROJECT_TYPES, SITE, SOFTWARE } from "@/lib/site";
import { Reveal } from "@/components/reveal";

function ChipList({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}): React.ReactElement {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About(): React.ReactElement {
  return (
    <section id="about" className="scroll-mt-20 bg-sand">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 sm:px-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-28">
        {/* Portrait on a dark panel */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <Image
              src={SITE.images.portrait}
              alt={`${SITE.name}, ${SITE.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 36vw"
              className="object-contain object-bottom"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <span className="text-lg font-extrabold lowercase tracking-tight text-bone">
                {SITE.wordmark}
              </span>
              <span className="eyebrow !text-bone/60">Lahore · Remote</span>
            </div>
          </div>
        </Reveal>

        {/* Bio + skills */}
        <div className="flex flex-col justify-between gap-12">
          <Reveal>
            <p className="eyebrow">About</p>
            <p className="mt-6 text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              {SITE.subtitle}
            </p>
            <div className="mt-6 space-y-4 text-base text-ink-soft md:text-lg">
              {SITE.bio.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="grid gap-8 border-t border-line pt-8 sm:grid-cols-2"
          >
            <ChipList label="Software" items={SOFTWARE} />
            <ChipList label="Project Types" items={PROJECT_TYPES} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
