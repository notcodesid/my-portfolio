"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: "/", label: "me" },
    { href: "/thoughts", label: "thoughts" },
    { href: "/things", label: "???" },
    { href: "/music", label: "music" },
    { href: "/cv", label: "cv" },
  ];

  return (
    <nav className="nav">
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${pathname === item.href ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        <span className="theme-icon">{theme === "dark" ? "☀" : "◐"}</span>
      </button>
    </nav>
  );
}
