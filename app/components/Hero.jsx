export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-noise"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot"></span>
          DIGITAL GROWTH AGENCY · NEW ZEALAND
        </div>

        <h1 className="hero-title">
          Digital growth
          <br />
          <span>that moves.</span>
        </h1>

        <p className="hero-description">
          We bring strategy, technology and performance together
          to help ambitious businesses grow online.
        </p>

        <div className="hero-actions">
          <a href="/contact" className="hero-primary">
            Show Me the Gap
            <span>↗</span>
          </a>

          <a href="/portfolio" className="hero-secondary">
            See Our Work
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-orbit hero-orbit-one"></div>
        <div className="hero-orbit hero-orbit-two"></div>

        <div className="hero-core">
          <span></span>
        </div>

        <div className="hero-signal signal-one">
          <span>SEO</span>
        </div>

        <div className="hero-signal signal-two">
          <span>WEB</span>
        </div>

        <div className="hero-signal signal-three">
          <span>AI</span>
        </div>

        <div className="hero-signal signal-four">
          <span>GROWTH</span>
        </div>

        <div className="hero-map">
          NZ
        </div>
      </div>

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
