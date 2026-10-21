"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  links: { label: string; href: string }[];
  phoneHref: string;
};

export default function MobileMenu({ links, phoneHref }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 bg-white/5"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-black/90">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-widest ${
                    pathname === item.href ? "text-brand" : "text-neutral-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="grid grid-cols-2 gap-3 pt-5">
              <Link
                href={`tel:${phoneHref}`}
                className="rounded-sm border border-white/20 py-3 text-center text-sm font-bold uppercase tracking-widest"
              >
                Call
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-sm bg-brand py-3 text-center text-sm font-bold uppercase tracking-widest text-black"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}