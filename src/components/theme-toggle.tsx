"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 text-neutral-8 dark:text-neutral-dark-8 focus:outline-none focus:ring-2 focus:ring-neutral-7 dark:focus:ring-neutral-dark-7"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}
