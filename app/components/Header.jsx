"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        {/* Logo */}
        <Link href="/" className="site-logo">
          <span className="logo-roll">ROLL'N</span>
          <span className="logo-media">MEDIA</span>
        </Link>

        {/* Navigation */}
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Mobile / Contact */}
        <a href="tel:+64000000000" className="header-phone">
          <span className="phone-dot"></span>
          +64 XXX XXX XXX
        </a>

      </div>
    </header>
  );
}
