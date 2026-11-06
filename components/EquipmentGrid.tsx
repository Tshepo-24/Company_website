"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type GridMachine = {
  slug: string;
  name: string;
  category: string;
  image: string;
  summary: string;
  href: string;
  rate: string;
  per: string;
};

type Props = { machines: GridMachine[]; categories: string[] };

export default function EquipmentGrid({ machines, categories }: Props) {
  const [active, setActive] = useState("All");

  const tabs = [
    { key: "All", label: "All machines", count: machines.length },
    ...categories.map((c) => ({
      key: c,
      label: c,
      count: machines.filter((m) => m.category === c).length,
    })),
  ];

  const shown =
    active === "All"
      ? machines.length
      : machines.filter((m) => m.category === active).length;

  return (
    <div>
      {/* Filter tabs */}
      <div className="-mx-6 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-2 border-b border-slate-200 pb-6">
          {tabs.map((t) => {
            const on = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(t.key)}
                className={`inline-flex shrink-0 items-center gap-3 rounded-lg border px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                  on
                    ? "border-navy bg-navy text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                {t.label}
                <span className={on ? "text-white/60" : "text-slate-400"}>
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown} machines
      </p>

      {/* Grid: every machine stays in the page, filters only hide them */}
      <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {machines.map((m) => {
          const visible = active === "All" || m.category === active;
          return (
            <li key={m.slug} hidden={!visible}>
              <article className="group relative has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-brand">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200">
                  <Image
                    src={m.image}
                    alt={`${m.name} for hire`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                    {m.category}
                  </span>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4 border-t border-slate-200 pt-4">
                  <h2 className="font-display text-xl font-bold uppercase leading-tight">
                    {/* This link covers the whole card */}
                    <Link
                      href={m.href}
                      className="after:absolute after:inset-0 focus-visible:outline-none"
                    >
                      {m.name}
                      <span className="sr-only"> hire</span>
                    </Link>
                  </h2>
                  <p className="shrink-0 text-right leading-tight">
                    <span className="block font-semibold">{m.rate}</span>
                    <span className="block text-[11px] uppercase tracking-widest text-slate-500">
                      / {m.per}
                    </span>
                  </p>
                </div>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                  {m.summary}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}