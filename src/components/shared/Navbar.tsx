"use client";
import Logo from "@/app/assets/svgs/Logo";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { logoutUser } from "@/services/AuthService";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();

  // Check if the user is logged in
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    if (user?.role === "ADMIN") {
      setIsAdmin(true);
    }
  }, [user]);

  const handelLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Posts", href: "/posts" },
    { name: "About Us", href: "/about" },
    { name: "Plans", href: "/subscription" },
    ...(isLoggedIn && isAdmin
      ? [{ name: "Dashboard", href: "/dashboard", isButton: true }]
      : [
          { name: "Login", href: "/login", isButton: true },
          { name: "Register", href: "/register", isButton: true },
        ]),
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center ">
            <div className="size-12 ">
              <Logo />
            </div>
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">
                StreetEats
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md transition-colors ${
                  link.isButton
                    ? `${
                        pathname === link.href
                          ? "bg-orange-700"
                          : "bg-primary hover:bg-orange-700"
                      } text-white`
                    : `${
                        pathname === link.href
                          ? "text-primary font-semibold"
                          : "text-gray-700 hover:text-primary"
                      }`
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isLoggedIn && (
              <Button
                variant={"outline"}
                size={"lg"}
                onClick={() => handelLogout()}
              >
                Logout
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white z-50 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md ${
                  link.isButton
                    ? `${
                        pathname === link.href
                          ? "bg-orange-700"
                          : "bg-primary hover:bg-orange-700"
                      } text-white`
                    : `${
                        pathname === link.href
                          ? "text-primary font-semibold bg-orange-50"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
