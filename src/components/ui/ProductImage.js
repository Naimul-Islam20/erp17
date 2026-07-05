"use client";

import Image from "next/image";

export default function ProductImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
