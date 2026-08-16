import HeroNZMap from "./components/HeroNZMap";

export default function Home() {
  return (
    <main className="site">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="/" className="logo">
          <span className="logo-roll">ROLL’N</span>
          <span className="logo-media">MEDIA</span>
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="/contact" className="nav-cta">
          +64 Get in touch
        </a>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            DIGITAL GROWTH AGENCY · NEW ZEALAND
          </div>

          <h1>
            Digital growth
            <br />
            <span>that clicks.</span>
          </h1>

          <p className="hero-description">
            We build digital systems that turn attention into
            meaningful traffic, qualified leads and measurable growth.
          </p>

          <div className="hero-buttons">

            <a href="/contact" className="primary-button">
              Start a Conversation
              <span>↗</span>
            </a>

            <a href="/portfolio" className="secondary-button">
              Explore Our Work
            </a>

          </div>

        </div>


        {/* NZ MAP */}

        <div className="hero-visual">
          <HeroNZMap />
        </div>


        {/* HERO STRIP */}

        <div className="hero-bottom">

          <span>STRATEGY</span>

          <i>✦</i>

          <span>BUILD</span>

          <i>✦</i>

          <span>GROW</span>

          <i>✦</i>

          <span>AUTOMATE</span>

        </div>

      </section>


      {/* =====================================================
          STRATEGY
      ===================================================== */}

      <section className="section strategy-section">

        <div className="section-label">
          01 / THE SYSTEM
        </div>

        <div className="strategy-heading">

          <h2>
            We don't sell
            <br />
            <span>random marketing.</span>
          </h2>

          <p>
            We build the digital growth engine behind your business —
            from strategy and technology to acquisition and automation.
          </p>

        </div>


        <div className="strategy-grid">

          <div className="strategy-card">

            <span>01</span>

            <h3>STRATEGY</h3>

            <p>
              Research, positioning, customer psychology
              and a clear digital roadmap.
            </p>

          </div>


          <div className="strategy-card">

            <span>02</span>

            <h3>BUILD</h3>

            <p>
              Websites, applications, landing pages
              and digital experiences built to perform.
            </p>

          </div>


          <div className="strategy-card">

            <span>03</span>

            <h3>GROW</h3>

            <p>
              SEO, Google Ads, Meta Ads and performance
              marketing focused on measurable growth.
            </p>

          </div>


          <div className="strategy-card">

            <span>04</span>

            <h3>AUTOMATE</h3>

            <p>
              Marketing automation, AI tools, AI agents
              and intelligent workflows.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES / DIGITAL SYSTEM
      ===================================================== */}

      <section className="section system-section">

        <div className="section-label">
          02 / WHAT WE BUILD
        </div>

        <div className="system-heading">

          <h2>
            One system.
            <br />
            <span>Multiple growth levers.</span>
          </h2>

          <a href="/services" className="text-link">
            Explore all services ↗
          </a>

        </div>


        <div className="system-list">

          <a href="/services" className="system-row">

            <span className="system-number">01</span>

            <div>
              <h3>Website & Application Development</h3>

              <p>
                High-performance digital products designed
                around your users and business goals.
              </p>
            </div>

            <span className="system-arrow">↗</span>

          </a>


          <a href="/services" className="system-row">

            <span className="system-number">02</span>

            <div>
              <h3>SEO</h3>

              <p>
                Build long-term search visibility and attract
                customers actively looking for your business.
              </p>
            </div>

            <span className="system-arrow">↗</span>

          </a>


          <a href="/services" className="system-row">

            <span className="system-number">03</span>

            <div>
              <h3>Performance Marketing</h3>

              <p>
                Paid acquisition across Google, Meta and
                other channels focused on profitable growth.
              </p>
            </div>

            <span className="system-arrow">↗</span>

          </a>


          <a href="/services" className="system-row">

            <span className="system-number">04</span>

            <div>
              <h3>Marketing Automation</h3>

              <p>
                Connect your marketing, leads and customer
                journeys into smarter automated systems.
              </p>
            </div>

            <span className="system-arrow">↗</span>

          </a>


          <a href="/services" className="system-row">

            <span className="system-number">05</span>

            <div>
              <h3>AI Custom Tools</h3>

              <p>
                Custom AI-powered tools built around
                specific business problems.
              </p>
            </div>

            <span className="system-arrow">↗</span>

          </a>


          <a href="/services" className="system-row">

            <span className="system-number">06</span>

            <div>
              <h3>AI Agents & Agentic Systems</h3>

              <p>
                Intelligent systems that can reason,
                act and automate complex workflows.
              </p>
            </div>

            <span className="system-arrow">↗</span>

          </a>

        </div>

      </section>


      {/* =====================================================
          FEATURED WORK
      ===================================================== */}

      <section className="section work-section">

        <div className="section-label">
          03 / SELECTED WORK
        </div>

        <div className="work-heading">

          <h2>
            Built for
            <br />
            <span>real businesses.</span>
          </h2>

          <a href="/portfolio" className="text-link">
            View portfolio ↗
          </a>

        </div>


        <div className="work-card">

          <div className="work-info">

            <span className="work-category">
              PROPERTY MANAGEMENT · NEW ZEALAND
            </span>

            <h3>
              Rent My Home
            </h3>

            <p>
              Website, SEO and digital growth work for
              a New Zealand property management brand.
            </p>

            <a href="/portfolio" className="text-link">
              View Case Study ↗
            </a>

          </div>


          <div className="work-preview">

            <div className="preview-browser">

              <div className="browser-bar">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <div className="preview-content">

                <div className="preview-label">
                  PROPERTY MANAGEMENT · NZ
                </div>

                <strong>
                  Rent My Home
                </strong>

                <small>
                  You Own. We Manage.
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT PREVIEW
      ===================================================== */}

      <section className="section about-preview-section">

        <div className="section-label">
          04 / ABOUT ROLL’N MEDIA
        </div>

        <div className="about-preview-grid">

          <h2>
            Strategy.
            <br />
            Technology.
            <br />
            <span>Execution.</span>
          </h2>

          <div>

            <p className="about-text">
              Roll’n Media is a digital growth partner for
              ambitious businesses. We bring strategy,
              technology, marketing and automation together
              instead of treating them as separate services.
            </p>

            <a href="/about" className="text-link">
              About us ↗
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cta-section">

        <div className="cta-grid"></div>

        <div className="cta-orb"></div>

        <div className="cta-content">

          <div className="section-label">
            LET’S BUILD SOMETHING
          </div>

          <h2>
            Ready to make
            <br />
            your next move?
          </h2>

          <a
            href="/contact"
            className="primary-button"
          >
            Start a Conversation
            <span>↗</span>
          </a>

        </div>

      </section>



    </main>
  );
}
