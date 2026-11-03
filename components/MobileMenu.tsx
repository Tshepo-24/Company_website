"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  groups: { category: string; items: { label: string; href: string }[] }[];
  phoneHref: string;
};

export default function MobileMenu({ groups, phoneHref }: Props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const row = "block border-b border-slate-200 py-4 text-base font-medium";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="grid h-11 w-11 place-items-center rounded-md border border-slate-300 text-navy"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-slate-200 bg-white shadow-xl">
          <div className="wrap py-2 text-navy">
            <Link href="/equipment" onClick={close} className={row}>
              All equipment
            </Link>

            {groups.map((g) => (
              <div key={g.category} className="border-b border-slate-200 py-4">
                <p className="text-sm font-semibold text-slate-500">
                  {g.category}
                </p>
                <ul className="mt-1">
                  {g.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        onClick={close}
                        className="block py-2.5 text-base text-slate-700"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <Link href="/about" onClick={close} className={row}>
              About
            </Link>
            <Link href="/contact" onClick={close} className={row}>
              Contact
            </Link>

            <div className="grid grid-cols-2 gap-3 py-5">
              <Link href={`tel:${phoneHref}`} className="btn btn-outline">
                Call
              </Link>
              <Link href="/contact" onClick={close} className="btn btn-primary">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}