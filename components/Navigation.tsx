"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "me" },
    { href: "/thoughts", label: "thoughts" },
    { href: "/things", label: "???" },
    { href: "/anime", label: "anime" },
    { href: "/cv", label: "cv" },
  ];

  return (
    <nav className="flex items-center justify-between mb-20">
      <div className="flex gap-6 items-center">
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
