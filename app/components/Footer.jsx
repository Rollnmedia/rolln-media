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
    <>
      <footer className="rm-footer">

        <div className="rm-footer-top">

          {/* Brand */}
          <div className="rm-footer-brand">
            <Link href="/" className="rm-footer-logo">
              ROLL'N MEDIA
            </Link>

            <p>
              Digital growth that actually moves.
            </p>
          </div>

          {/* Links */}
          <nav className="rm-footer-links" aria-label="Footer navigation">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="rm-footer-contact">
            <span>GET IN TOUCH</span>

            <a href="mailto:hello@rollnmedia.com">
              hello@rollnmedia.com
            </a>

            <a href="tel:+6492424548">
              +64 9 242 4548
            </a>
          </div>

        </div>

        <div className="rm-footer-bottom">
          <span>
            © {currentYear} Roll'n Media
          </span>

          <span>
            Digital Growth Systems
          </span>
        </div>

      </footer>

      <style jsx>{`
        .rm-footer {
          position: relative;
          width: 100%;
          background: #05070c;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #f5f7fa;
          overflow: hidden;
        }

        .rm-footer::before {
          content: "";
          position: absolute;
          top: -180px;
          left: 50%;
          width: 600px;
          height: 300px;
          transform: translateX(-50%);

          background: radial-gradient(
            ellipse,
            rgba(49, 93, 168, 0.1),
            transparent 70%
          );

          pointer-events: none;
        }

        .rm-footer-top {
          position: relative;
          z-index: 1;

          max-width: 1600px;
          margin: 0 auto;
          padding: 75px 6vw 65px;

          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 70px;
        }

        .rm-footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .rm-footer-logo {
          display: inline-block;

          color: #ffffff;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.04em;

          transition: color 0.25s ease;
        }

        .rm-footer-logo:hover {
          color: #f47a20;
        }

        .rm-footer-brand p {
          max-width: 300px;
          margin: 16px 0 0;

          color: rgba(245, 247, 250, 0.5);

          font-family: Arial, Helvetica, sans-serif;
          font-size: 15px;
          line-height: 1.7;
        }

        .rm-footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }

        .rm-footer-links a {
          position: relative;

          color: rgba(245, 247, 250, 0.62);

          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;

          transition: color 0.25s ease;
        }

        .rm-footer-links a::after {
          content: "";

          position: absolute;
          left: 0;
          bottom: -4px;

          width: 0;
          height: 1px;

          background: #f47a20;

          transition: width 0.25s ease;
        }

        .rm-footer-links a:hover {
          color: #ffffff;
        }

        .rm-footer-links a:hover::after {
          width: 100%;
        }

        .rm-footer-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .rm-footer-contact > span {
          margin-bottom: 16px;

          color: rgba(245, 247, 250, 0.4);

          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
        }

        .rm-footer-contact a {
          margin-bottom: 10px;

          color: rgba(245, 247, 250, 0.72);

          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;

          transition: color 0.25s ease;
        }

        .rm-footer-contact a:hover {
          color: #f47a20;
        }

        .rm-footer-bottom {
          position: relative;
          z-index: 1;

          max-width: 1600px;
          margin: 0 auto;

          padding: 22px 6vw;

          border-top: 1px solid rgba(255, 255, 255, 0.07);

          display: flex;
          align-items: center;
          justify-content: space-between;

          color: rgba(245, 247, 250, 0.35);

          font-family: Arial, Helvetica, sans-serif;
          font-size: 12px;
        }

        @media (max-width: 900px) {
          .rm-footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 50px 30px;
            padding: 60px 5vw 50px;
          }

          .rm-footer-brand {
            grid-column: 1 / -1;
          }

          .rm-footer-bottom {
            padding-left: 5vw;
            padding-right: 5vw;
          }
        }

        @media (max-width: 600px) {
          .rm-footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 50px 20px 40px;
          }

          .rm-footer-brand {
            grid-column: auto;
          }

          .rm-footer-bottom {
            padding: 20px;

            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rm-footer-logo,
          .rm-footer-links a,
          .rm-footer-links a::after,
          .rm-footer-contact a {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
