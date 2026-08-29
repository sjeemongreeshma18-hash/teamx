"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/passenger", label: "Passenger" },
  { href: "/conductor", label: "Conductor" },
  { href: "/health", label: "Health" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="flex flex-wrap gap-2">
      {links.map((link) => {
        const active = isActive(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-ink hover:bg-surface-tint"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
