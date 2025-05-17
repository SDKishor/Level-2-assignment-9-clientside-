import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

type Role = ["USER", "ADMIN"];

const authRoutes = ["/login", "/register"];

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();
  console.log(userInfo);
  console.log(authRoutes.includes(pathname));

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `https://batch-4-assignment-9-serverside.vercel.app/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  if (userInfo?.role as Role) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: ["/login", "/admin", "/admin/:page", "/posts"],
};
