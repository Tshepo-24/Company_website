"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  label: string;
  header: React.ReactNode; // left side of the top row
  action?: React.ReactNode; // link next to the arrows
};

const GAP = 24; // matches gap-6

export default function CarouselTrack({ children, label, header, action }: Props) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function update() {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function move(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = (card?.offsetWidth ?? el.clientWidth) + GAP;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * step, behavior: smooth ? "smooth" : "auto" });
  }

  const arrow =
    "grid h-11 w-11 place-items-center rounded-full border border-slate-300 text-slate-900 transition-colors duration-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white disabled:pointer-events-none disabled:opacity-40";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      {/* Top row: heading on the left, link and arrows on the right */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>{header}</div>
        <div className="flex shrink-0 items-center gap-5">
          {action}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous machines"
              onClick={() => move(-1)}
              disabled={atStart}
              className={arrow}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 10H4m6-6-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next machines"
              onClick={() => move(1)}
              disabled={atEnd}
              className={arrow}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 10h12m-6-6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={track}
        onScroll={update}
        className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}