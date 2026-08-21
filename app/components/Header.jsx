import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <a href="#home" className="header-logo" aria-label="Roll’n Media Home">
        <img
          src="/logo.png"
          alt="Roll’n Media"
        />
      </a>


      <nav className="header-nav" aria-label="Main navigation">

        <a href="#home">
          Home
        </a>

        <a href="#services">
          Services
        </a>

        <a href="#work">
          Portfolio
        </a>

        <a href="#about">
          About
        </a>

      </nav>


      <a
        href="tel:+64 22 020 5848"
        className="header-contact"
        aria-label="Call Roll’n Media"
      >
        <span className="header-phone">
          +64 22 020 5848
        </span>

        <span className="header-arrow">
          ↗
        </span>
      </a>

    </header>
  );
}
