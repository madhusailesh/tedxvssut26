import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEDxVSSUT 2026",
  description: "TEDxVSSUT 2026 - Dialectics of Discovery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="border-b border-white/10 px-6 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="/" className="text-xl font-bold">
              TEDxVSSUT
            </a>

            <div className="flex gap-6 text-sm">
              <a href="/about">About</a>
              <a href="/crew">Crew</a>
              <a href="/past-events">Past Events</a>
              <a href="/sponsors">Sponsors</a>
              <a href="/venue">Venue</a>
              <a href="/passes">Passes</a>
              <a href="/login">Login</a>
            </div>
          </div>
        </nav>

        {children}

        <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-gray-500">
          © 2026 TEDxVSSUT. All rights reserved.
        </footer>
      </body>
    </html>
  );
}