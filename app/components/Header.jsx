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
    <>
      <header className="rm-header">
        <div className="rm-header-inner">

          {/* Logo */}
          <Link
            href="/"
            className="rm-logo"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Roll'n Media"
              width={155}
              height={70}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="rm-desktop-nav">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="rm-header-right">

            <a href="tel:+6492424548" className="rm-phone">
              +64 9 242 4548
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`rm-menu-button ${
                menuOpen ? "is-open" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`rm-mobile-menu ${
            menuOpen ? "is-open" : ""
          }`}
        >
          <nav>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="tel:+6492424548"
              onClick={() => setMenuOpen(false)}
              className="rm-mobile-phone"
            >
              +64 9 242 4548
            </a>
          </nav>
        </div>
      </header>

      <style jsx>{`
        .rm-header {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1000;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(5, 7, 12, 0.35);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .rm-header-inner {
          width: 100%;
          max-width: 1600px;
          height: 96px;
          margin: 0 auto;
          padding: 0 6vw;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .rm-logo {
          position: relative;
          z-index: 1002;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .rm-logo :global(img) {
          display: block;
          width: 145px;
          height: auto;
          object-fit: contain;
        }

        .rm-desktop-nav {
          display: flex;
          align-items: center;
          gap: 38px;
          margin-left: auto;
          margin-right: 40px;
        }

        .rm-desktop-nav a {
          position: relative;
          color: rgba(245, 247, 250, 0.68);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
          transition:
            color 0.25s ease,
            opacity 0.25s ease;
        }

        .rm-desktop-nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 0;
          height: 1px;
          background: #f47a20;
          transition: width 0.25s ease;
        }

        .rm-desktop-nav a:hover {
          color: #ffffff;
        }

        .rm-desktop-nav a:hover::after {
          width: 100%;
        }

        .rm-header-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .rm-phone {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-height: 44px;
          padding: 0 20px;

          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;

          color: rgba(245, 247, 250, 0.78);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;

          transition:
            border-color 0.25s ease,
            color 0.25s ease,
            background 0.25s ease;
        }

        .rm-phone:hover {
          color: #ffffff;
          border-color: rgba(244, 122, 32, 0.55);
          background: rgba(244, 122, 32, 0.06);
        }

        .rm-menu-button {
          position: relative;
          z-index: 1002;

          display: none;

          width: 44px;
          height: 44px;

          padding: 0;

          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 50%;

          background: transparent;

          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;

          cursor: pointer;
        }

        .rm-menu-button span {
          display: block;
          width: 19px;
          height: 1.5px;
          background: #ffffff;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }

        .rm-menu-button.is-open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }

        .rm-menu-button.is-open span:nth-child(2) {
          opacity: 0;
        }

        .rm-menu-button.is-open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        .rm-mobile-menu {
          display: none;
        }

        @media (max-width: 900px) {
          .rm-header-inner {
            height: 82px;
            padding: 0 5vw;
          }

          .rm-logo :global(img) {
            width: 125px;
          }

          .rm-desktop-nav,
          .rm-phone {
            display: none;
          }

          .rm-menu-button {
            display: flex;
          }

          .rm-mobile-menu {
            position: absolute;
            top: 0;
            left: 0;

            display: block;

            width: 100%;

            background: rgba(5, 7, 12, 0.97);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);

            opacity: 0;
            visibility: hidden;
            transform: translateY(-15px);

            transition:
              opacity 0.3s ease,
              visibility 0.3s ease,
              transform 0.3s ease;
          }

          .rm-mobile-menu.is-open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .rm-mobile-menu nav {
            display: flex;
            flex-direction: column;

            padding: 105px 5vw 30px;
          }

          .rm-mobile-menu nav a {
            padding: 17px 0;

            border-bottom: 1px solid rgba(255, 255, 255, 0.08);

            color: rgba(245, 247, 250, 0.78);

            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;

            transition: color 0.25s ease;
          }

          .rm-mobile-menu nav a:hover {
            color: #ffffff;
          }

          .rm-mobile-menu .rm-mobile-phone {
            width: fit-content;

            margin-top: 20px;
            padding: 12px 20px;

            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 999px;

            border-bottom: 1px solid rgba(255, 255, 255, 0.14);

            color: rgba(245, 247, 250, 0.8);
          }
        }

        @media (max-width: 480px) {
          .rm-header-inner {
            padding: 0 20px;
          }

          .rm-logo :global(img) {
            width: 118px;
          }

          .rm-mobile-menu nav {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rm-desktop-nav a,
          .rm-desktop-nav a::after,
          .rm-phone,
          .rm-menu-button span,
          .rm-mobile-menu {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
