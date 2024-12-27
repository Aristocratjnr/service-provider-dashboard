import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Check if the requested path is "/"
  if (req.nextUrl.pathname === "/") {
    // Redirect to "/overview"
    const url = req.nextUrl.clone();
    url.pathname = "/overview";
    return NextResponse.redirect(url);
  }

  // Proceed with the request
  return NextResponse.next();
}
