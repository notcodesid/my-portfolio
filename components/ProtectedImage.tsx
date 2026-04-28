"use client";

import Image from "next/image";
import meImage from "@/assets/me.png";

export default function ProtectedImage() {
  return (
    <div
      className="relative mx-auto w-full max-w-[26rem] overflow-hidden rounded-[6px] bg-white/5 md:mx-0"
      onContextMenu={(event) => event.preventDefault()}
    >
      <Image
        src={meImage}
        alt="sunflower illustration"
        priority
        draggable={false}
        onDragStart={(event) => event.preventDefault()}
        sizes="(min-width: 1280px) 26rem, (min-width: 1024px) 35vw, 100vw"
        className="h-auto w-full select-none object-cover opacity-90"
      />
      <div className="absolute inset-0" aria-hidden="true" />
    </div>
  );
}
