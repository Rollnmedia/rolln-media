import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#05070c] text-[#f5f7fa]">

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(49,93,168,0.10),transparent_70%)]"
      />

      {/* Footer Top */}
      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-12 sm:px-[6vw] sm:py-[60px] md:grid-cols-2 md:gap-[50px_30px] lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-[70px] lg:px-[6vw] lg:py-[75px]">

        {/* Brand */}
        <div className="flex flex-col items-start md:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="text-[24px] font-bold tracking-[-0.04em] text-white transition-colors duration-300 hover:text-[#f47a20]"
          >
            ROLL'N MEDIA
          </Link>

          <p className="mt-4 max-w-[300px] text-[15px] leading-[1.7] text-white/50">
            Digital growth that actually moves.
          </p>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-start gap-[15px]"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] text-white/[0.62] transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col items-start">
          <span className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-white/40">
            GET IN TOUCH
          </span>

          <a
            href="mailto:hello@rollnmedia.com"
            className="mb-[10px] text-[14px] text-white/[0.72] transition-colors duration-300 hover:text-[#f47a20]"
          >
            hello@rollnmedia.com
          </a>

          <a
            href="tel:+6492424548"
            className="text-[14px] text-white/[0.72] transition-colors duration-300 hover:text-[#f47a20]"
          >
            +64 9 242 4548
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-start gap-2 border-t border-white/[0.07] px-5 py-5 text-[12px] text-white/35 sm:px-[6vw] md:flex-row md:items-center md:justify-between lg:px-[6vw]">
        <span>© {currentYear} Roll'n Media</span>

        <span>Digital Growth Systems</span>
      </div>
    </footer>
  );
}
