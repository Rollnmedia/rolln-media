"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 z-50 w-full border-b border-white/10">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-[6vw]">

        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Roll'n Media"
            width={155}
            height={70}
            priority
            className="h-auto w-[145px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/65 transition-colors duration-300 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Phone - Desktop */}
          <a
            href="tel:+6492424548"
            className="hidden rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 transition-all duration-300 hover:border-white/30 hover:text-white lg:block"
          >
            +64 9 242 4548
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 lg:hidden"
          >
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-0 w-full border-b border-white/10 bg-[#05070c]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-[6vw] pb-8 pt-28">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-base text-white/75 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="tel:+6492424548"
            className="mt-5 inline-flex w-fit rounded-full border border-white/15 px-5 py-3 text-sm text-white/80"
          >
            +64 9 242 4548
          </a>
        </nav>
      </div>
    </header>
  );
}
