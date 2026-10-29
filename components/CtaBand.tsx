import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
            Need equipment for your next job?
          </h2>
          <p className="mt-2 text-white"> Get a quote.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`tel:${site.phoneHref}`}
            className="rounded-sm bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-slate-900 transition-colors hover:bg-neutral-200"
          >
            Get a quote
          </Link>
          
        </div>
      </div>
    </section>
  );
}