"use client"

import { useTheme } from "@/components/theme-provider"
import { useEffect } from "react"

export function ThemeScript() {
  const { theme } = useTheme()

  // This useEffect runs on client-side to ensure the theme is properly set
  useEffect(() => {
    const root = window.document.documentElement
    const prevTheme = root.classList.contains("dark") ? "dark" : "light"

    if (prevTheme !== theme) {
      root.classList.remove(prevTheme)
      root.classList.add(theme)
    }
  }, [theme])

  return null
}
