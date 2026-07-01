import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ArrowCircle } from "@/components/arrow-circle";

export function ProjectCard({ project }: { project: Project }): React.ReactElement {
  const isDrawing = project.coverFit === "contain";

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid h-full grid-rows-[1fr_auto] overflow-hidden border border-line bg-bone"
    >
      {/* Cover */}
      {isDrawing ? (
        <div className="relative bg-white">
          <div className="absolute inset-4">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-contain"
            />
          </div>
          <ArrowOverlay />
        </div>
      ) : (
        <div className="relative overflow-hidden bg-sand">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          <ArrowOverlay />
        </div>
      )}

      {/* Meta */}
      <div className="flex flex-col gap-1 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="eyebrow">{project.number}</span>
          <span className="text-xs text-stone">{project.category}</span>
        </div>
        <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-clay md:text-xl">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}

function ArrowOverlay(): React.ReactElement {
  return (
    <div className="absolute right-3 top-3 translate-y-1 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
      <ArrowCircle />
    </div>
  );
}
