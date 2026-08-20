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


      {/* ================= DIGITAL GROWTH VISUAL ================= */}

      <div className="hero-visual">

        {/* Main website experience */}

        <div className="digital-frame">

          <div className="browser-top">

            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="browser-address">
              yourbusiness.co.nz
            </div>

            <div className="browser-status">
              LIVE
            </div>

          </div>


          <div className="digital-interface">

            <div className="interface-nav">

              <span className="interface-logo"></span>

              <span></span>
              <span></span>
              <span></span>

            </div>


            <div className="interface-hero">

              <div className="interface-copy">

                <small>
                  YOUR DIGITAL PRESENCE
                </small>

                <strong>
                  Built to
                  <br />
                  <em>perform.</em>
                </strong>

                <div className="interface-button">
                  GET STARTED
                  <span>↗</span>
                </div>

              </div>


              <div className="interface-visual">

                <div className="interface-circle"></div>

                <div className="interface-line line-one"></div>

                <div className="interface-line line-two"></div>

                <div className="interface-line line-three"></div>

              </div>

            </div>


            <div className="interface-stats">

              <div>
                <small>VISIBILITY</small>
                <strong>+84%</strong>
              </div>

              <div>
                <small>TRAFFIC</small>
                <strong>+62%</strong>
              </div>

              <div>
                <small>ENQUIRIES</small>
                <strong>+41%</strong>
              </div>

            </div>

          </div>

        </div>


        {/* Search layer */}

        <div className="growth-layer growth-search">

          <span>SEARCH</span>

          <div className="search-bar">

            <span>
              best business near me
            </span>

            <b>
              ⌕
            </b>

          </div>

        </div>


        {/* Growth layer */}

        <div className="growth-layer growth-data">

          <span>GROWTH</span>

          <div className="growth-chart">

            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>

          </div>

        </div>


        {/* Enquiry layer */}

        <div className="growth-layer growth-action">

          <span>ENQUIRY</span>

          <strong>
            +1
          </strong>

          <small>
            NEW LEAD
          </small>

        </div>


        {/* Cursor */}

        <div className="digital-cursor">
          ↗
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
