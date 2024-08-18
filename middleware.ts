import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/forum(.*)",
  "/organization(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const url = req.nextUrl;

  // Case 1: Logged-in user accessing a public route
  if (auth().userId && isPublicRoute(req)) {
    let path = "/select-org";

    if (auth().orgId) {
      path = `/organization/${auth().orgId}`;
    }

    return NextResponse.redirect(new URL(path, url.origin));
  }

  // Case 2: Unauthenticated user trying to access a protected route
  if (!auth().userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL("/sign-in", url.origin));
  }

  // Case 3: Logged-in user without an organization ID trying to access non-org selection pages
  if (auth().userId && !auth().orgId && url.pathname !== "/select-org") {
    return NextResponse.redirect(new URL("/select-org", url.origin));
  }

  // If none of the conditions apply, continue with the request
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
