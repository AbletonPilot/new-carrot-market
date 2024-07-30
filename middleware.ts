import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("hello");
}

export const config = {
  // matcher:["/", "/profile", "/create-account", "/user/:path*"],
  //regular expression
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
