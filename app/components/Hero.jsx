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

        <p>
          We build websites, digital systems and growth engines
          that help ambitious businesses get found, get chosen
          and keep growing.
        </p>

        <div className="hero-actions">

          <a href="#portfolio" className="hero-primary">
            See Our Work
            <span>↗</span>
          </a>

          <a href="#contact" className="hero-secondary">
            Start a Conversation
          </a>

        </div>

      </div>


      <div className="hero-visual">

        <div className="hero-glow"></div>

        <div className="hero-grid"></div>

        <div className="hero-orbit hero-orbit-one"></div>

        <div className="hero-orbit hero-orbit-two"></div>

        <div className="hero-core">
          <div></div>
        </div>

        <div className="hero-label hero-label-one">
          <span>01</span>
          WEB
        </div>

        <div className="hero-label hero-label-two">
          <span>02</span>
          SEARCH
        </div>

        <div className="hero-label hero-label-three">
          <span>03</span>
          GROWTH
        </div>

        <div className="hero-label hero-label-four">
          <span>04</span>
          AI
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
