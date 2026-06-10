import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { buildCurlEasterEgg } from "@/lib/curl-easter-egg";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";

  if (userAgent.toLowerCase().includes("curl")) {
    return new NextResponse(buildCurlEasterEgg(), {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};