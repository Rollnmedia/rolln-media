export default function Header() {
  return (
    <header className="site-header">
      <a href="/" className="header-logo">
        <img
          src="/logo.png"
          alt="Roll’n Media"
        />
      </a>

      <div className="header-right">
        <a href="/services" className="header-link">
          Services
        </a>

        <a href="/portfolio" className="header-link">
          Portfolio
        </a>

        <a href="/about" className="header-link">
          About
        </a>

        <a href="/contact" className="header-contact">
          <span>Contact us</span>
          <span className="header-arrow">↗</span>
        </a>
      </div>
    </header>
  );
}
