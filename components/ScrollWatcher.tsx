{/*"use client";

import { useEffect } from "react";

export default function ScrollWatcher() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      // glass turns on once you leave the very top
      header.dataset.scrolled = String(y > 40);

      // hide when scrolling down, show when scrolling up
      const diff = y - lastY;
      if (Math.abs(diff) < 8) return;
      header.dataset.hidden = String(diff > 0 && y > 120);
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}*/}