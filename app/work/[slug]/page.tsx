import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import {
  getAdjacent,
  getAllSlugs,
  getProject,
  type ProcessStep,
} from "@/lib/projects";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ProjectGallery } from "@/components/project-gallery";

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

function MetaBlock({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}): React.ReactElement {
  return (
    <div className="border-t border-line pt-4">
      <p className="eyebrow">{label}</p>
      <ul className="mt-3 space-y-1.5 text-sm text-ink-soft md:text-base">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
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

          {/* Overview + meta */}
          <section className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <aside className="flex flex-col gap-6">
              {project.role && <MetaBlock label="My Role" items={project.role} />}
              {project.deliverables && (
                <MetaBlock label="Deliverables" items={project.deliverables} />
              )}
              {project.materials && (
                <MetaBlock label="Material Palette" items={project.materials} />
              )}
              {project.scope && (
                <MetaBlock label="Scope of Work" items={project.scope} />
              )}
              {project.location && (
                <MetaBlock label="Location" items={[project.location]} />
              )}
            </aside>

            <div>
              <p className="eyebrow">Overview</p>
              <p className="mt-5 text-pretty text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                {project.description}
              </p>
              {project.note && (
                <p className="mt-6 text-base text-ink-soft md:text-lg">
                  {project.note}
                </p>
              )}

              {project.highlights && (
                <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="bg-bone p-5 text-base text-ink-soft">
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {project.process && (
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {project.process.map((step: ProcessStep) => (
                    <div key={step.title} className="border-t border-line pt-4">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-soft md:text-base">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
