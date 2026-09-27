"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Crew", href: "/crew" },
    { name: "Past Events", href: "/past-events" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Venue", href: "/venue" },
    { name: "Passes", href: "/passes" },
    { name: "Login", href: "/login" },
  ];

  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Navbar */}
        <nav className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold sm:text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              TEDxVSSUT
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-5 text-sm md:flex lg:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-red-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 md:hidden"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-opacity ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="border-t border-white/10 px-4 py-4 md:hidden">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/5 py-4 text-sm transition-colors hover:text-red-500"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="border-t border-white/10 px-4 py-6 text-center text-sm text-gray-500 sm:px-6">
          © 2026 TEDxVSSUT. All rights reserved.
        </footer>
      </body>
    </html>
  );
}