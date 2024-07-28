"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import { Link } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Siddharth Pandro
          </span>
         <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight">Mastering the Full Stack</h1>
          <p className="text-lg md:text-xl text-center">
            Crafting seamless experiences with expertise in both frontend and backend development.
          </p>
        </div>

      <RetroGrid />
    </div>
  );
}


