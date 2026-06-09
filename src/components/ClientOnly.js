"use client";

import { useEffect, useState } from "react";

/**
 * Renders children only after the browser has mounted.
 * Use for modals/overlays so static HTML never blocks the page before JS loads.
 */
export default function ClientOnly({ children, fallback = null }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return fallback;
  return children;
}
