import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <div className="footer-logo">
            Roll’n Media
          </div>

          <p>
            Digital growth for ambitious businesses.
          </p>
        </div>


        <div className="footer-links">

          <div className="footer-column">
            <span>EXPLORE</span>

            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>


          <div className="footer-column">
            <span>CONNECT</span>

            <a href="mailto:hello@rollnmedia.co.nz">
              Email ↗
            </a>

            <a href="#">
              Instagram ↗
            </a>

            <a href="#">
              LinkedIn ↗
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
