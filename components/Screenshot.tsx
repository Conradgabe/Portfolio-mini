import Image from "next/image";
import type { ProjectImage } from "@/lib/content";

/** A product screenshot framed as a small browser-style window. */
export function Screenshot({ image, priority }: { image: ProjectImage; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-panel">
      <figcaption className="flex items-center gap-1.5 border-b border-line-soft bg-panel-2 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-[11px] text-faint">{image.label}</span>
      </figcaption>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.w}
        height={image.h}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 720px"
        className="h-auto w-full"
      />
    </figure>
  );
}
