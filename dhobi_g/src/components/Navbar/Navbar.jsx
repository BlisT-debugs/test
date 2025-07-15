"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // ✅ Read user info from localStorage on every route change
  useEffect(() => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("access_token");

  if (user && token) {
    const { username, first_name } = JSON.parse(user);
    setUserName(first_name || username);
    setIsAuthenticated(true); // ✅ You must set this
  } else {
    setIsAuthenticated(false);
  }
}, [pathname]);


  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUserName("");
    router.push("/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-blue-600"
          >
            <img src="/dhobi-logo.webp" alt="Logo" className="h-10 w-10" />
            <span className="text-black">hobi G</span>
          </Link>

          <div className="hidden md:flex ml-16 space-x-10 items-center text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contactus">Contact</Link>
            <Link href="/carriers">Carrier</Link>
          </div>
        </div>

        {/* Right Side: Auth Actions */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link className="hidden md:inline-block text-sm text-gray-700" href="/profile">
                👤 {userName}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contactus">Contact</Link>
          <Link href="/carriers">Carrier</Link>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="block mt-2 w-full bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="block mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
