import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        <img
          src="/logo.png"
          alt="Roll’n Media"
        />
      </a>

      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About Us</a>
      </nav>

      <a href="#contact" className="header-contact">
        Contact Us
        <span>↗</span>
      </a>
    </header>
  );
}
