import Image from "next/image";
import { PROJECT_TYPES, SITE, SOFTWARE } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { PortraitArch } from "@/components/portrait-arch";

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
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 sm:px-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-28">
        {/* Portrait — transparent cutout standing within an animated arch portal */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5]">
            <PortraitArch />
            <Image
              src="/identity/image-removebg-preview.png"
              alt={`${SITE.name}, ${SITE.title}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 34vw"
              className="object-contain object-bottom"
            />
          </div>
        </Reveal>

        {/* Bio + skills */}
        <div className="flex flex-col gap-10">
          <Reveal>
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow">About</p>
              <p className="eyebrow !text-stone">Lahore · Remote</p>
            </div>
            <p className="mt-6 text-pretty text-2xl font-medium leading-tight tracking-tight md:text-4xl">
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
            className="grid gap-8 border-t border-line pt-8 sm:grid-cols-2 md:mt-auto"
          >
            <ChipList label="Software" items={SOFTWARE} />
            <ChipList label="Project Types" items={PROJECT_TYPES} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
