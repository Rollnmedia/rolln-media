import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <img
              src="/logo.png"
              alt="Roll’n Media"
            />
          </a>

          <p>
            Digital growth for ambitious businesses.
          </p>

          <span className="footer-location">
            NEW ZEALAND · DIGITAL GROWTH
          </span>

        </div>


        <div className="footer-links">

          <div className="footer-column">

            <span>EXPLORE</span>

            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>

          </div>


          <div className="footer-column">

            <span>CONNECT</span>

            <a href="mailto:hello@rolln.media">
              hello@rolln.media <em>↗</em>
            </a>

            <a href="tel:+64220205848">
              +64 22 020 5848 <em>↗</em>
            </a>

          </div>

        </div>

      </div>


      <div className="footer-tagline">

        <span>ROLL’N MEDIA</span>

        <h2>
          Make the digital side <em>work.</em>
        </h2>

        <a href="#contact" className="footer-arrow">
          ↗
        </a>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 Roll’n Media
        </span>

        <span>
          DIGITAL GROWTH AGENCY · NEW ZEALAND
        </span>

        <span>
          WEB · SEARCH · GROWTH · AI
        </span>

      </div>

    </footer>
  );
}
