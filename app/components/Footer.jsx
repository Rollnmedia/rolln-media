import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-top">

        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            ROLL'N MEDIA
          </Link>

          <p>
            Digital growth that actually moves.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <span>GET IN TOUCH</span>
          <a href="mailto:hello@rollnmedia.com">
            hello@rollnmedia.com
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Roll'n Media</span>
        <span>Digital Growth Systems</span>
      </div>

    </footer>
  );
}
