"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative flex h-14 items-center text-[15px] font-black uppercase tracking-[0.15em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-brand after:transition-transform after:duration-300 ${
        active
          ? "text-white after:scale-x-100"
          : "text-neutral-300 after:scale-x-0 hover:text-white hover:after:scale-x-100"
      }`}
    >
      {label}
    </Link>
  );
}