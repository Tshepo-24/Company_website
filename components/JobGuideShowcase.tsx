"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type JobMachine = {
  slug: string;
  name: string;
  href: string;
  image: string;
  rate: string;
};

export type Job = {
  id: string;
  title: string;
  text: string;
  machines: JobMachine[];
};

type Props = { jobs: Job[]; phone: string; phoneHref: string };

function cardColumns(count: number) {
  if (count === 1) return "grid-cols-1 max-w-xs";
  if (count === 2) return "grid-cols-2";
  return "grid-cols-3";
}

export default function JobGuideShowcase({ jobs, phone, phoneHref }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
      {/* Left: the jobs */}
      <div>
        <ol className="border-b border-white/15">
          {jobs.map((job, i) => {
            const on = i === active;
            return (
              <li key={job.id} className="border-t border-white/15">
                <h3>
                  <button
                    type="button"
                    id={`job-btn-${job.id}`}
                    aria-expanded={on}
                    aria-controls={`job-panel-${job.id}`}
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center gap-6 py-6 text-left"
                  >
                    <span
                      className={`w-10 font-display text-lg font-bold transition-colors duration-300 ${
                        on ? "text-brand" : "text-slate-500"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-2xl font-bold uppercase leading-tight transition-colors duration-300 sm:text-3xl ${
                        on
                          ? "text-white"
                          : "text-slate-500 group-hover:text-white"
                      }`}
                    >
                      {job.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`ml-auto text-3xl font-light leading-none transition-transform duration-300 ${
                        on ? "rotate-45 text-brand" : "text-slate-500"
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={`job-panel-${job.id}`}
                  role="region"
                  aria-labelledby={`job-btn-${job.id}`}
                  inert={!on}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 sm:pl-16">
                      <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                        {job.text}
                      </p>

                      {/* Phones and tablets: machine links with small photos */}
                      <ul className="mt-6 space-y-3 lg:hidden">
                        {job.machines.map((m) => (
                          <li key={m.slug}>
                            <Link
                              href={m.href}
                              className="group/machine flex items-center gap-4 rounded-xl border border-white/10 p-3 transition-colors duration-200 hover:border-brand/60 hover:bg-white/5"
                            >
                              <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-sand">
                                <Image
                                  src={m.image}
                                  alt={`${m.name} for hire`}
                                  fill
                                  sizes="80px"
                                  className="object-contain p-1 mix-blend-multiply"
                                />
                              </span>
                              <span className="min-w-0">
                                <span className="block font-semibold leading-snug">
                                  {m.name}
                                </span>
                                <span className="block text-sm text-slate-400">
                                  {m.rate}
                                </span>
                              </span>
                              <span
                                aria-hidden="true"
                                className="ml-auto pr-2 text-brand transition-transform duration-300 group-hover/machine:translate-x-1"
                              >
                                →
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-300">
            Not sure what fits your site? We will help you choose.
          </p>
          <Link
            href={`tel:${phoneHref}`}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
          >
            Call {phone}
          </Link>
        </div>
      </div>

      {/* Right: photo stage (laptops only) */}
      <div className="hidden lg:block">
        <div className="sticky top-32 h-[36rem] overflow-hidden rounded-2xl bg-slate-800 ring-1 ring-white/10">
          <Image
            src="/11.jpg"
            alt="Excavator loading a tipper truck on site"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-slate-900/60"
          />

          {jobs.map((job, i) => {
            const on = i === active;
            return (
              <div
                key={job.id}
                inert={!on}
                className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-500 ${
                  on ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Top: which job */}
                <div>
                  <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.35em] text-white/80">
                    <span aria-hidden="true" className="h-px w-10 bg-brand" />
                    Job {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 max-w-sm font-display text-3xl font-bold uppercase leading-tight">
                    {job.title}
                  </p>
                </div>

                {/* Bottom: the machines */}
                <ul className={`grid gap-3 ${cardColumns(job.machines.length)}`}>
                  {job.machines.map((m) => (
                    <li key={m.slug}>
                      <Link
                        href={m.href}
                        className="group/card block overflow-hidden rounded-xl bg-white text-slate-900 shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-1"
                      >
                        <span className="relative block aspect-[4/3] bg-sand">
                          <Image
                            src={m.image}
                            alt={`${m.name} for hire`}
                            fill
                            sizes="(min-width: 1280px) 14vw, 18vw"
                            className="object-contain p-3 mix-blend-multiply"
                          />
                        </span>
                        <span className="block p-4">
                          <span className="block text-sm font-semibold leading-snug">
                            {m.name}
                          </span>
                          <span className="mt-1 flex items-center justify-between text-xs text-slate-600">
                            {m.rate}
                            <span
                              aria-hidden="true"
                              className="text-slate-900 transition-transform duration-300 group-hover/card:translate-x-1"
                            >
                              →
                            </span>
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}