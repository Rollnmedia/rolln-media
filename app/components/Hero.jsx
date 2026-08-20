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
            See Our Work
            <span>↗</span>
          </a>

          <a href="#contact" className="hero-secondary">
            Start a Conversation
          </a>

        </div>

      </div>


      {/* ================= ABSTRACT GROWTH SYSTEM ================= */}

      <div className="growth-visual" aria-hidden="true">

        {/* Technical grid */}
        <div className="growth-grid"></div>

        {/* Outer rings */}
        <div className="growth-ring ring-one"></div>
        <div className="growth-ring ring-two"></div>
        <div className="growth-ring ring-three"></div>

        {/* Main SVG system */}
        <svg
          className="growth-svg"
          viewBox="0 0 700 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* horizontal system lines */}
          <path
            d="M70 325H630"
            stroke="rgba(255,255,255,0.08)"
          />

          <path
            d="M350 45V605"
            stroke="rgba(255,255,255,0.06)"
          />

          {/* diagonal growth line */}
          <path
            d="M90 470
               C170 455 190 420 250 425
               C310 430 315 350 370 355
               C430 360 440 280 485 285
               C530 290 545 205 615 150"
            className="growth-line"
          />

          {/* secondary line */}
          <path
            d="M95 510
               C180 490 225 475 285 470
               C360 465 405 430 470 390
               C525 355 555 315 610 285"
            className="growth-line-secondary"
          />

          {/* connection lines */}

          <path
            d="M350 325L190 170"
            className="connection-line"
          />

          <path
            d="M350 325L520 170"
            className="connection-line"
          />

          <path
            d="M350 325L180 490"
            className="connection-line"
          />

          <path
            d="M350 325L525 490"
            className="connection-line"
          />

          {/* central circle */}
          <circle
            cx="350"
            cy="325"
            r="86"
            className="central-ring"
          />

          <circle
            cx="350"
            cy="325"
            r="62"
            className="central-ring-inner"
          />

          {/* centre mark */}
          <circle
            cx="350"
            cy="325"
            r="7"
            className="central-dot"
          />

          {/* node: SEO */}
          <circle
            cx="190"
            cy="170"
            r="5"
            className="system-node"
          />

          <circle
            cx="190"
            cy="170"
            r="18"
            className="node-halo"
          />

          {/* node: ADS */}
          <circle
            cx="520"
            cy="170"
            r="5"
            className="system-node"
          />

          <circle
            cx="520"
            cy="170"
            r="18"
            className="node-halo"
          />

          {/* node: AI */}
          <circle
            cx="180"
            cy="490"
            r="5"
            className="system-node"
          />

          <circle
            cx="180"
            cy="490"
            r="18"
            className="node-halo"
          />

          {/* node: WEB */}
          <circle
            cx="525"
            cy="490"
            r="5"
            className="system-node"
          />

          <circle
            cx="525"
            cy="490"
            r="18"
            className="node-halo"
          />

        </svg>


        {/* Centre brand */}

        <div className="growth-centre">

          <div className="growth-centre-mark">
            R
          </div>

          <strong>
            ROLL'N
          </strong>

          <span>
            MEDIA
          </span>

        </div>


        {/* Floating labels */}

        <div className="growth-label label-seo">
          <small>01</small>
          <strong>SEO</strong>
          <span>VISIBILITY</span>
        </div>

        <div className="growth-label label-ads">
          <small>02</small>
          <strong>ADS</strong>
          <span>PERFORMANCE</span>
        </div>

        <div className="growth-label label-ai">
          <small>03</small>
          <strong>AI</strong>
          <span>SYSTEMS</span>
        </div>

        <div className="growth-label label-web">
          <small>04</small>
          <strong>WEB</strong>
          <span>EXPERIENCE</span>
        </div>


        {/* Growth metric */}

        <div className="growth-metric">
          <span>GROWTH SIGNAL</span>
          <strong>+84%</strong>
          <small>VISIBILITY</small>
        </div>

        {/* tiny orange signal */}
        <span className="signal signal-one"></span>
        <span className="signal signal-two"></span>
        <span className="signal signal-three"></span>

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
