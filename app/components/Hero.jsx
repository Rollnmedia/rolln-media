import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* ================= CONTENT ================= */}

      <div className="hero-content">

        <div className="hero-eyebrow">
          <span></span>
          DIGITAL GROWTH AGENCY · NEW ZEALAND
        </div>

        <h1>
          Digital growth
          <br />
          <span>that moves.</span>
        </h1>

        <p>
          We build websites, digital systems and growth engines
          that help ambitious businesses get found, get chosen
          and keep growing.
        </p>

        <div className="hero-actions">

          <a href="#portfolio" className="hero-primary">
            <span className="hero-primary-text">
              See Our Work
            </span>

            <span className="hero-arrow">↗</span>
          </a>

          <a href="#contact" className="hero-secondary">
            Start a Conversation
          </a>

        </div>

      </div>


      {/* ================= HERO IMAGE ================= */}

      <div className="hero-visual">

        <div className="hero-image-wrap">

          <div className="hero-image-glow"></div>

          <img
            src="/hero.png"
            alt="Roll'n Media digital growth and marketing"
            className="hero-image"
          />

        </div>

      </div>


      {/* ================= BOTTOM STRIP ================= */}

      <div className="hero-bottom">

        <span>STRATEGY</span>

        <i>✦</i>

        <span>WEB</span>

        <i>✦</i>

        <span>SEARCH</span>

        <i>✦</i>

        <span>PERFORMANCE</span>

        <i>✦</i>

        <span>AI</span>

      </div>

    </section>
  );
}
