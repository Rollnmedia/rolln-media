import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

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

        <p className="hero-description">
          We build websites, digital systems and growth engines
          that help ambitious businesses get found, get chosen
          and keep growing.
        </p>

        <div className="hero-actions">
          <a href="#work" className="hero-primary">
  <span className="hero-primary-text">See Our Work</span>
  <span className="hero-primary-arrow">↗</span>
</a>

          <a href="#contact" className="hero-secondary">
            Start a Conversation
          </a>
        </div>
<div className="hero-capabilities">
  WEB DEVELOPMENT
  <span>·</span>
  SEO
  <span>·</span>
  PAID GROWTH
  <span>·</span>
  DIGITAL SYSTEMS
</div>
      </div>


      <div className="hero-visual">
        <img
          src="/hero2.png"
          alt="Roll’n Media digital growth systems"
        />
      </div>

    </section>
  );
}
