import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* ================= LEFT CONTENT ================= */}

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
            <span>See Our Work</span>
            <b>↗</b>
          </a>

          <a href="#contact" className="hero-secondary">
            Start a Conversation
          </a>

        </div>

      </div>


      {/* ================= CSS GROWTH VISUAL ================= */}

      <div className="hero-visual">

        {/* Ambient glow */}
        <div className="visual-glow"></div>

        {/* Orbit system */}
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit orbit-three"></div>

        {/* Connecting lines */}
        <div className="connection connection-one"></div>
        <div className="connection connection-two"></div>
        <div className="connection connection-three"></div>
        <div className="connection connection-four"></div>

        {/* Central system */}

        <div className="visual-core">

          <div className="core-ring"></div>

          <div className="core-content">

            <small>ROLL'N MEDIA</small>

            <strong>
              GROWTH
            </strong>

            <span>
              DIGITAL SYSTEM
            </span>

          </div>

          {/* Click arrow instead of R */}

          <div className="click-arrow">
            ↗
          </div>

        </div>


        {/* Floating cards */}

        <div className="visual-card card-seo">

          <small>SEARCH</small>

          <strong>
            +84%
          </strong>

          <span>
            VISIBILITY
          </span>

          <div className="mini-line">
            <i></i>
          </div>

        </div>


        <div className="visual-card card-web">

          <small>WEB</small>

          <strong>
            2.4×
          </strong>

          <span>
            PERFORMANCE
          </span>

        </div>


        <div className="visual-card card-ads">

          <small>ADS</small>

          <strong>
            +62%
          </strong>

          <span>
            LEADS
          </span>

          <div className="mini-bars">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>


        <div className="visual-card card-ai">

          <small>AI</small>

          <strong>
            LIVE
          </strong>

          <span>
            SYSTEM ACTIVE
          </span>

          <div className="status-dot"></div>

        </div>


        {/* Small nodes */}

        <span className="visual-node node-one"></span>
        <span className="visual-node node-two"></span>
        <span className="visual-node node-three"></span>
        <span className="visual-node node-four"></span>

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
