import Image from "next/image";
import type { GalleryImage } from "@/lib/projects";

export function ProjectGallery({
  images,
}: {
  images: readonly GalleryImage[];
}): React.ReactElement {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
      {images.map((img, i) => (
        <figure
          key={`${img.src}-${i}`}
          className="overflow-hidden border border-line bg-white"
        >
          <Image
            src={img.src}
            alt={img.caption}
            width={img.width}
            height={img.height}
            priority={i === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-auto w-full"
          />
          <figcaption className="border-t border-line px-4 py-3 text-sm text-ink-soft">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
