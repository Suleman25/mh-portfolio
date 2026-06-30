import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { getAdjacent, getAllSlugs, getProject } from "@/lib/projects";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams(): { slug: string }[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${SITE.name}`,
    description: project.description,
  };
}

type Spec = { label: string; items: readonly string[] };

// Labeled hairline divider opening each block on the detail page.
function SectionRule({ label }: { label: string }): React.ReactElement {
  return (
    <div className="flex items-center gap-4 pb-5">
      <p className="eyebrow">{label}</p>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

// A cell in the specification grid — single values render plain;
// lists render as a numbered schedule (title-block style).
function SpecGroup({ label, items }: Spec): React.ReactElement {
  return (
    <div className="bg-bone p-6 md:p-8">
      <p className="eyebrow">{label}</p>
      {items.length === 1 ? (
        <p className="mt-4 text-base text-ink-soft md:text-lg">{items[0]}</p>
      ) : (
        <ol className="mt-5 space-y-2.5">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-snug text-ink-soft md:text-base"
            >
              <span className="pt-0.5 text-xs tabular-nums text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default async function ProjectPage({ params }: Params): Promise<React.ReactElement> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacent(slug);
  const coverImg =
    project.gallery.find((g) => g.src === project.cover) ?? project.gallery[0];
  const restImages = project.gallery.filter((g) => g.src !== project.cover);

  const specs: Spec[] = [
    project.role && { label: "My Role", items: project.role },
    project.deliverables && { label: "Deliverables", items: project.deliverables },
    project.materials && { label: "Material Palette", items: project.materials },
    project.scope && { label: "Scope of Work", items: project.scope },
    project.location && { label: "Location", items: [project.location] },
  ].filter((s): s is Spec => Boolean(s));

  return (
    <>
      <SiteNav />
      <main className="pt-28 md:pt-32">
        <article className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <Link
            href="/#work"
            className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-clay"
          >
            <span aria-hidden>←</span> Back to work
          </Link>

          {/* Header */}
          <header className="mt-8 flex flex-col gap-4 border-b border-line pb-10">
            <div className="flex items-center gap-4 text-stone">
              <span className="eyebrow">{project.number}</span>
              <span className="h-px w-8 bg-line" />
              <span className="text-sm">{project.category}</span>
            </div>
            <h1 className="display text-[clamp(2.5rem,7vw,6rem)]">
              {project.title}
            </h1>
          </header>

          {/* Cover */}
          <div
            className={`mt-10 overflow-hidden border border-line ${
              project.coverFit === "contain" ? "bg-white" : "bg-sand"
            }`}
          >
            <Image
              src={coverImg.src}
              alt={coverImg.caption}
              width={coverImg.width}
              height={coverImg.height}
              priority
              sizes="(max-width: 1024px) 100vw, 1600px"
              className="mx-auto h-auto max-h-[78vh] w-auto object-contain"
            />
          </div>

          {/* Overview */}
          <section className="mt-14 md:mt-24">
            <Reveal className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
              <div className="md:pt-1">
                <span className="display block leading-[0.78] text-[clamp(4.5rem,11vw,9rem)] text-clay/20">
                  {project.number}
                </span>
                <p className="eyebrow mt-6">Overview</p>
              </div>
              <div>
                <p className="text-pretty text-2xl font-light italic leading-snug tracking-tight text-ink/55 md:text-[2.25rem] md:leading-[1.15]">
                  {project.description}
                </p>
                {project.note && (
                  <p className="mt-8 max-w-2xl border-l-2 border-clay pl-5 text-base leading-relaxed text-ink-soft md:text-lg">
                    {project.note}
                  </p>
                )}
              </div>
            </Reveal>

            {/* Specification schedule — title-block grid */}
            {specs.length > 0 && (
              <Reveal delay={0.1} className="mt-14 md:mt-20">
                <SectionRule label="Project Specifications" />
                <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                  {specs.map((s) => (
                    <SpecGroup key={s.label} label={s.label} items={s.items} />
                  ))}
                </div>
              </Reveal>
            )}

            {/* Project highlights */}
            {project.highlights && (
              <Reveal delay={0.1} className="mt-14 md:mt-20">
                <SectionRule label="Project Highlights" />
                <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
                  {project.highlights.map((h, i) => (
                    <li key={h} className="flex gap-4 bg-bone p-6 md:p-8">
                      <span className="pt-1 text-xs tabular-nums text-clay">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base text-ink-soft md:text-lg">{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {/* Process */}
            {project.process && (
              <Reveal delay={0.1} className="mt-14 md:mt-20">
                <SectionRule label="Process" />
                <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
                  {project.process.map((step) => (
                    <div key={step.title} className="bg-bone p-6 md:p-8">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm text-ink-soft md:text-base">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </section>

          {/* Gallery */}
          {restImages.length > 0 && (
            <section className="mt-16 md:mt-24">
              <p className="eyebrow mb-6">Project Assets</p>
              <ProjectGallery images={restImages} />
            </section>
          )}

          {/* Prev / next */}
          <nav className="mt-20 grid grid-cols-2 gap-4 border-t border-line py-10">
            <Link href={`/work/${prev.slug}`} className="group">
              <span className="eyebrow">← Previous</span>
              <span className="mt-2 block text-lg font-semibold tracking-tight transition-colors group-hover:text-clay md:text-xl">
                {prev.title}
              </span>
            </Link>
            <Link href={`/work/${next.slug}`} className="group text-right">
              <span className="eyebrow">Next →</span>
              <span className="mt-2 block text-lg font-semibold tracking-tight transition-colors group-hover:text-clay md:text-xl">
                {next.title}
              </span>
            </Link>
          </nav>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
