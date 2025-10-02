"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "首頁" },
  { href: "#portfolio", label: "作品集" },
  { href: "#interests", label: "興趣" },
  { href: "#activities", label: "活動經歷" },
  { href: "#contact", label: "聯絡我" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // close menu when route changes
    setIsOpen(false);
  }, [pathname]);

  const headerClass = scrolled
  ? "bg-[#FFFFF0]/90 backdrop-blur shadow-sm"
  : "bg-transparent";


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${headerClass}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
        <Link 
          href="/" 
          className="text-[15px] sm:text-base font-extrabold tracking-tight text-[#4B4B4B]"
        >
          Nancy • Website
        </Link>


          {/* Desktop nav */}
          <ul className="hidden sm:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = typeof window !== "undefined" && window.location.hash === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[14px] sm:text-[15px] transition-transform hover:scale-[1.03] ${
                      isActive ? "text-neutral-900 underline decoration-fuchsia-500/60 underline-offset-8" : "text-neutral-600 hover:text-neutral-900 hover:underline decoration-cyan-400/60 underline-offset-8"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border-0 text-pink-700 bg-pink-100 hover:bg-pink-200 shadow-sm"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="animate-pulse">
              <circle cx="12" cy="6" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="12" cy="18" r="2"></circle>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="sm:hidden border-t border-pink-100 bg-pink-50">
          <ul className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            {navItems.map((item) => {
              const isActive = typeof window !== "undefined" && window.location.hash === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-2 py-2 transition-colors ${
                      isActive ? "text-neutral-900 bg-black/5" : "text-neutral-700 hover:bg-black/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}


