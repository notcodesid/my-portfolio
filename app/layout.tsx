import type { Metadata } from "next";
import { Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const ovo = Ovo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "sid",
  description: "21 yrs old eng, builder and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${ovo.variable} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col items-center">
            <div className="w-full max-w-2xl px-6 pt-20">
              <Navigation />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
