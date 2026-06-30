import { SERVICES, WORKFLOW } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Services(): React.ReactElement {
  return (
    <section id="services" className="scroll-mt-20 bg-sand">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)]">Services</h2>
          <p className="eyebrow">What I offer</p>
        </Reveal>

        <div className="mt-12 md:mt-16">
          {SERVICES.map((service) => (
            <Reveal
              as="div"
              key={service}
              className="group flex items-center justify-between gap-6 border-t border-line py-6 md:py-8"
            >
              <h3 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-clay md:text-4xl">
                {service}
              </h3>
              <span
                aria-hidden
                className="text-stone transition-colors duration-300 group-hover:text-clay"
              >
                ↗
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-line pt-8">
          <p className="eyebrow">How I work</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {WORKFLOW.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
