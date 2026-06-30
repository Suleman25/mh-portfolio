import { PROJECTS, type BentoSpan } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

// Bento spans — relative, so they scale across the 2-col and 4-col grids.
const SPAN: Record<BentoSpan, string> = {
  sm: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  lg: "col-span-2 row-span-2",
};

export function WorkGrid(): React.ReactElement {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)]">
            Selected work
          </h2>
          <p className="max-w-md text-base text-ink-soft md:text-lg">
            {PROJECTS.length} projects across drafting, construction
            documentation, 3D modeling, and visualization.
          </p>
        </Reveal>

        <div className="mt-10 grid auto-rows-[200px] grid-flow-row-dense grid-cols-2 gap-3 sm:auto-rows-[230px] lg:grid-cols-4 md:gap-4">
          {PROJECTS.map((project, i) => (
            <Reveal
              as="div"
              key={project.slug}
              delay={(i % 4) * 0.04}
              className={`${SPAN[project.span]} h-full`}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
