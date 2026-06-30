import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * Middleware to protect routes based on authentication and role
 */
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Get JWT token from session
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Protected routes that require authentication
  const protectedRoutes = ["/fr/admin", "/ar/admin"];
  const editorRoutes = ["/fr/admin/articles", "/fr/admin/projets", "/ar/admin/articles", "/ar/admin/projets"];

  // Check if current path is protected
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isEditorRoute = editorRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Redirect to login if accessing protected route without authentication
  if (isProtected && !token) {
    const loginUrl = pathname.startsWith("/ar") ? "/ar/login" : "/fr/login";
    return NextResponse.redirect(new URL(loginUrl, request.url));
  }

  // Check role-based access
  if (isEditorRoute && token?.role !== "Éditeur" && token?.role !== "Admin") {
    const deniedUrl = pathname.startsWith("/ar") ? "/ar" : "/fr";
    return NextResponse.redirect(new URL(deniedUrl, request.url));
  }

  return NextResponse.next();
}

/**
 * Configure which routes to apply middleware to
 */
export const config = {
  matcher: [
    "/fr/admin/:path*",
    "/ar/admin/:path*",
  ],
};
