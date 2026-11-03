import Link from "next/link";
import { fleet, machineHref } from "@/lib/fleet";
import { site } from "@/lib/site";

const link = "transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-[#010f2b] text-slate-300">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <p className="text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed">
            {site.description}
          </p>
        </div>

        <nav aria-label="Equipment">
          <h3 className="text-sm font-semibold text-white">Equipment</h3>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {fleet.map((m) => (
              <li key={m.slug}>
                <Link href={machineHref(m)} className={link}>
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li>
              <Link href="/about" className={link}>
                About us
              </Link>
            </li>
            <li>
              <Link href="/equipment" className={link}>
                All equipment
              </Link>
            </li>
            <li>
              <Link href="/contact" className={link}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li>
              <Link href={`tel:${site.phoneHref}`} className={link}>
                {site.phone}
              </Link>
            </li>
            <li>
              <Link href={`mailto:${site.email}`} className={link}>
                {site.email}
              </Link>
            </li>
            <li>{site.address}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="wrap py-6 text-sm text-slate-400">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}