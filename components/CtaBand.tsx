import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="bg-brand text-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
            Need equipment for your next job?
          </h2>
          <p className="mt-2 text-black/70"> Get a quote.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`tel:${site.phoneHref}`}
            className="rounded-sm bg-black px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-neutral-800"
          >
            Call us
          </Link>
          <Link
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border-2 border-black px-7 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}