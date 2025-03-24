import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeScript } from "@/components/theme-script"

export const metadata: Metadata = {
  title: "siddharth ",
  description: "engineer at the intersection of design and web development",
}

// Script to prevent flash of unstyled content
function ThemeInitScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const storedTheme = localStorage.getItem('freddie-portfolio-theme');
            const theme = storedTheme || (prefersDark ? 'dark' : 'light');
            document.documentElement.classList.add(theme);
          })()
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body className="selection:bg-neutral-3 selection:text-neutral-8">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeScript />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
