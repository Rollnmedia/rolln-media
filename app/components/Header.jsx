import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <a href="#home" className="header-logo">
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

        <a href="#portfolio">
          Portfolio
        </a>

        <a href="#about">
          About
        </a>

      </nav>


      <a href="#contact" className="header-contact">
        <span>Contact</span>
        <i>↗</i>
      </a>

    </header>
  );
}
