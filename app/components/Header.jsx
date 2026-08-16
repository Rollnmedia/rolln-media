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
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            alt="Roll'n Media"
            width={155}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="header-right">

          {/* Mobile Number */}
          <a href="tel:+6492424548" className="phone-number">
            +64 9 242 4548
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <a href="tel:+6492424548">
            +64 9 242 4548
          </a>
        </nav>
      )}
    </header>
  );
}
