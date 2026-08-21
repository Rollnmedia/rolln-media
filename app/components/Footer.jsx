import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

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

            <a href="mailto:hello@rollnmedia.co.nz">
              Email <em>↗</em>
            </a>

            <a href="#">
              Instagram <em>↗</em>
            </a>

            <a href="#">
              LinkedIn <em>↗</em>
            </a>

          </div>

        </div>

      </div>


      <div className="footer-middle">

        <div className="footer-tagline">

          <span>ROLL’N MEDIA</span>

          <h2>
            Make the digital
            <br />
            side <span>work.</span>
          </h2>

        </div>

        <div className="footer-mark">
          ↗
        </div>

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
