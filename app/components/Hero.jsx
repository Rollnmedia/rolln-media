import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

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


      {/* =====================================================
          DIGITAL GROWTH CIRCUIT
      ===================================================== */}

      <div className="hero-visual">

        {/* Ambient glow */}
        <div className="circuit-glow"></div>

        {/* Background grid */}
        <div className="circuit-grid"></div>


        {/* ================= SVG NETWORK ================= */}

        <svg
          className="growth-network"
          viewBox="0 0 700 620"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >

          {/* WEB → GROWTH */}
          <path
            className="network-path"
            d="M90 170 C180 90, 255 120, 330 280"
          />

          {/* SEARCH → GROWTH */}
          <path
            className="network-path"
            d="M610 125 C515 80, 430 125, 350 280"
          />

          {/* TRAFFIC → GROWTH */}
          <path
            className="network-path"
            d="M620 430 C535 470, 450 420, 350 315"
          />

          {/* GROWTH → LEADS */}
          <path
            className="network-path"
            d="M350 335 C300 420, 225 470, 125 455"
          />

          {/* WEB → SEARCH */}
          <path
            className="network-path network-path-soft"
            d="M115 160 C250 20, 470 20, 590 115"
          />

          {/* TRAFFIC → LEADS */}
          <path
            className="network-path network-path-soft"
            d="M600 445 C420 575, 260 555, 130 465"
          />


          {/* Moving signal 1 */}
          <circle
            className="network-signal signal-one"
            r="4"
          >
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              path="M90 170 C180 90, 255 120, 330 280"
            />
          </circle>


          {/* Moving signal 2 */}
          <circle
            className="network-signal signal-two"
            r="4"
          >
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M610 125 C515 80, 430 125, 350 280"
            />
          </circle>


          {/* Moving signal 3 */}
          <circle
            className="network-signal signal-three"
            r="4"
          >
            <animateMotion
              dur="5.5s"
              repeatCount="indefinite"
              path="M620 430 C535 470, 450 420, 350 315"
            />
          </circle>

        </svg>


        {/* =================================================
            NETWORK NODES
        ================================================= */}

        <div className="growth-node node-web">

          <div className="node-dot"></div>

          <div className="node-info">
            <span>01</span>
            WEB
          </div>

        </div>


        <div className="growth-node node-search">

          <div className="node-dot"></div>

          <div className="node-info">
            <span>02</span>
            SEARCH
          </div>

        </div>


        <div className="growth-node node-traffic">

          <div className="node-dot"></div>

          <div className="node-info">
            <span>03</span>
            TRAFFIC
          </div>

        </div>


        <div className="growth-node node-leads">

          <div className="node-dot"></div>

          <div className="node-info">
            <span>04</span>
            LEADS
          </div>

        </div>


        {/* =================================================
            CENTRAL GROWTH NODE
        ================================================= */}

        <div className="growth-core">

          <div className="core-ring core-ring-one"></div>

          <div className="core-ring core-ring-two"></div>

          <div className="core-inner">

            <span>GROWTH</span>

            <strong>+</strong>

          </div>

        </div>


        {/* =================================================
            SMALL DATA READOUT
        ================================================= */}

        <div className="growth-readout">

          <span>GROWTH SYSTEM</span>

          <div>
            <strong>LIVE</strong>
            <i></i>
          </div>

        </div>


        {/* =================================================
            FLOATING METRIC
        ================================================= */}

        <div className="growth-metric">

          <span>CONVERSION</span>

          <strong>+41%</strong>

          <small>LEADS GENERATED</small>

        </div>

      </div>


      {/* =====================================================
          BOTTOM SERVICE STRIP
      ===================================================== */}

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
