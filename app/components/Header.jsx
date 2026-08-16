"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Roll'n Media"
            width={150}
            height={60}
            priority
            className="h-auto w-[130px] sm:w-[145px] lg:w-[155px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="header-link">
            Home
          </Link>

          <Link href="/services" className="header-link">
            Services
          </Link>

          <Link href="/portfolio" className="header-link">
            Portfolio
          </Link>

          <Link href="/about" className="header-link">
            About Us
          </Link>

          <Link href="/contact" className="header-link">
            Contact Us
          </Link>
        </nav>

        {/* Desktop Phone */}
        <a
          href="tel:+6492424548"
          className="hidden lg:block text-sm font-medium text-white underline underline-offset-8 decoration-white/40 transition hover:text-orange-400 hover:decoration-orange-400"
        >
          +64 9 242 4548
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-[1px] w-5 bg-white" />
            <span className="block h-[1px] w-5 bg-white" />
            <span className="block h-[1px] w-5 bg-white" />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              Services
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              Contact Us
            </Link>

            <a
              href="tel:+6420918800"
              className="pt-2 text-sm text-orange-400"
            >
              +64 9 242 4548
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
