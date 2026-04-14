"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  if (
    pathname === "/" ||
    pathname.startsWith("/cv") ||
    pathname.startsWith("/stuff") ||
    pathname.startsWith("/thoughts") ||
    pathname.startsWith("/reflection")
  ) {
    return null;
  }

  const navItems = [
    { href: "/", label: "me" },
    { href: "/stuff", label: "stuff i've built" },
    { href: "/reflection", label: "reflection" },
    { href: "/things", label: "???" },
    { href: "/cv", label: "cv" },
  ];

  return (
    <nav className="flex items-center justify-between mb-20">
      <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm transition-colors ${
              pathname === item.href
                ? "text-accent font-medium"
                : "text-muted hover:text-accent"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
