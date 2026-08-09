"use client";

import { useEffect } from "react";

export default function PricingPage() {
  useEffect(() => {
    window.location.replace("/choose-apps");
  }, []);

  return null;
}
