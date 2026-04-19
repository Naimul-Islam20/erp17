"use client";

import Image from "next/image";

/**
 * Local SVG from /public often fails or looks blank with next/image in dev.
 * Native img keeps aspect ratio via width/height and works everywhere.
 */
export default function ProductImage({ src, alt, width, height, className, priority }) {
  if (typeof src === "string" && src.toLowerCase().endsWith(".svg")) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }
  return (
    <Image src={src} alt={alt} width={width} height={height} className={className} priority={priority} />
  );
}
