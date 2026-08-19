"use client";

import HeroNZMap from "./components/HeroNZMap";

export default function Home() {
  return (
    <main className="site">

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
            <span>that moves.</span>
          </h1>

          <p className="hero-description">
            We build digital experiences, growth systems and
            technology that help ambitious businesses move forward.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="primary-button">
              Show Me the Gap
              <span>↗</span>
            </a>

            <a href="#work" className="secondary-button">
              View Our Work
            </a>

          </div>

        </div>


        {/* =====================================================
            HERO VISUAL
        ===================================================== */}

        <div className="hero-visual">
          <HeroNZMap />
        </div>


        {/* =====================================================
            HERO SERVICE STRIP
        ===================================================== */}

        <div className="hero-bottom">

          <span>WEB</span>

          <i>✦</i>

          <span>SEARCH</span>

          <i>✦</i>

          <span>PERFORMANCE</span>

          <i>✦</i>

          <span>AI</span>

        </div>

      </section>


      {/* =====================================================
          PROBLEM / GAP
      ===================================================== */}

      <section id="gap" className="section problem-section">

        <div className="section-label">
          01 / THE DIGITAL GAP
        </div>

        <h2>
          Your business might be
          <br />
          <span>better than what people see.</span>
        </h2>

        <p className="section-description">
          Great businesses are built through years of hard work.
          But online, customers only see the experience in front
          of them.
        </p>

        <div className="gap-grid">

          <div className="gap-side">
            <span className="gap-number">01</span>

            <h3>
              What you've built
            </h3>

            <p>
              Great service. Real experience. Strong reputation.
              A business worth choosing.
            </p>

            <div className="gap-tags">
              <span>EXPERIENCE</span>
              <span>TRUST</span>
              <span>QUALITY</span>
            </div>
          </div>


          <div className="gap-middle">
            <div className="gap-line"></div>

            <span className="gap-label">
              THE GAP
            </span>

            <div className="gap-line"></div>
          </div>


          <div className="gap-side">
            <span className="gap-number">02</span>

            <h3>
              What they see
            </h3>

            <p>
              Search results. Websites. Content. Ads.
              Reviews. Every digital touchpoint shapes the decision.
            </p>

            <div className="gap-tags">
              <span>VISIBILITY</span>
              <span>EXPERIENCE</span>
              <span>ACTION</span>
            </div>
          </div>

        </div>

        <div className="gap-conclusion">
          <span>WE WORK IN THE GAP.</span>
          <span>↘</span>
        </div>

      </section>


      {/* =====================================================
          CUSTOMER JOURNEY
      ===================================================== */}

      <section className="section journey-section">

        <div className="section-label">
          02 / THE CUSTOMER JOURNEY
        </div>

        <h2>
          Every click is part
          <br />
          of a <span>bigger decision.</span>
        </h2>

        <div className="journey-track">

          <div className="journey-step">
            <span>01</span>
            <h3>DISCOVER</h3>
            <p>
              They find you.
            </p>
          </div>

          <div className="journey-arrow">→</div>

          <div className="journey-step">
            <span>02</span>
            <h3>EXPLORE</h3>
            <p>
              They look closer.
            </p>
          </div>

          <div className="journey-arrow">→</div>

          <div className="journey-step">
            <span>03</span>
            <h3>TRUST</h3>
            <p>
              They decide you're credible.
            </p>
          </div>

          <div className="journey-arrow">→</div>

          <div className="journey-step">
            <span>04</span>
            <h3>ACT</h3>
            <p>
              They make contact.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          THE ENGINE
      ===================================================== */}

      <section id="services" className="section engine-section">

        <div className="section-label">
          03 / THE ENGINE
        </div>

        <h2>
          One system.
          <br />
          <span>Every digital touchpoint.</span>
        </h2>

        <p className="section-description">
          Strategy, technology and performance working together
          instead of operating as disconnected services.
        </p>


        <div className="engine-grid">

          <div className="engine-card">

            <span>01</span>

            <div className="card-arrow">↗</div>

            <h3>STRATEGY</h3>

            <p>
              Research, positioning, customer psychology
              and a clear digital roadmap.
            </p>

          </div>


          <div className="engine-card">

            <span>02</span>

            <div className="card-arrow">↗</div>

            <h3>BUILD</h3>

            <p>
              Websites, applications, landing pages and
              digital experiences built around your goals.
            </p>

          </div>


          <div className="engine-card">

            <span>03</span>

            <div className="card-arrow">↗</div>

            <h3>GROW</h3>

            <p>
              SEO, Google Ads, Meta Ads and performance
              marketing designed to create demand.
            </p>

          </div>


          <div className="engine-card">

            <span>04</span>

            <div className="card-arrow">↗</div>

            <h3>AUTOMATE</h3>

            <p>
              AI tools, marketing automation, AI agents
              and agentic workflows.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="section capabilities-section">

        <div className="section-label">
          04 / WHAT WE BUILD
        </div>

        <h2>
          More than marketing.
          <br />
          <span>A digital growth system.</span>
        </h2>

        <div className="capabilities-list">

          <div className="capability-item">
            <span>01</span>
            <strong>Website & Application Development</strong>
            <span>↗</span>
          </div>

          <div className="capability-item">
            <span>02</span>
            <strong>SEO</strong>
            <span>↗</span>
          </div>

          <div className="capability-item">
            <span>03</span>
            <strong>Performance Marketing</strong>
            <span>↗</span>
          </div>

          <div className="capability-item">
            <span>04</span>
            <strong>Marketing Automation</strong>
            <span>↗</span>
          </div>

          <div className="capability-item">
            <span>05</span>
            <strong>AI Custom Tools</strong>
            <span>↗</span>
          </div>

          <div className="capability-item">
            <span>06</span>
            <strong>AI Agents</strong>
            <span>↗</span>
          </div>

          <div className="capability-item">
            <span>07</span>
            <strong>Agentic Systems</strong>
            <span>↗</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          SELECTED WORK
      ===================================================== */}

      <section id="work" className="section work-section">

        <div className="section-label">
          05 / SELECTED WORK
        </div>

        <h2>
          Built in the
          <br />
          <span>real world.</span>
        </h2>


        {/* ================= RENT MY HOME ================= */}

        <div className="work-project">

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

            <div className="work-services">
              <span>WEB</span>
              <span>SEO</span>
              <span>GROWTH</span>
            </div>

            <a href="#" className="text-link">
              View Case Study ↗
            </a>

          </div>


          <div className="work-carousel">

            <div className="work-slide">
              <div className="project-placeholder">
                <span>RENT MY HOME</span>
                <strong>WEBSITE</strong>
              </div>
            </div>

            <div className="work-slide">
              <div className="project-placeholder">
                <span>RENT MY HOME</span>
                <strong>LANDLORD EXPERIENCE</strong>
              </div>
            </div>

            <div className="work-slide">
              <div className="project-placeholder">
                <span>RENT MY HOME</span>
                <strong>PROPERTY EXPERIENCE</strong>
              </div>
            </div>

            <div className="work-slide">
              <div className="project-placeholder">
                <span>RENT MY HOME</span>
                <strong>MOBILE EXPERIENCE</strong>
              </div>
            </div>

          </div>

        </div>


        {/* ================= SECOND PROJECT ================= */}

        <div className="work-project work-project-secondary">

          <div className="work-info">

            <span className="work-category">
              DIGITAL EXPERIENCE
            </span>

            <h3>
              Selected Project
            </h3>

            <p>
              Another digital experience created to help
              a business improve its online presence.
            </p>

            <a href="#" className="text-link">
              View Case Study ↗
            </a>

          </div>


          <div className="work-carousel">

            <div className="work-slide">
              <div className="project-placeholder">
                <span>PROJECT</span>
                <strong>WEBSITE</strong>
              </div>
            </div>

            <div className="work-slide">
              <div className="project-placeholder">
                <span>PROJECT</span>
                <strong>CREATIVE</strong>
              </div>
            </div>

            <div className="work-slide">
              <div className="project-placeholder">
                <span>PROJECT</span>
                <strong>CAMPAIGN</strong>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          YOUR BUSINESS
      ===================================================== */}

      <section className="section reflection-section">

        <div className="section-label">
          06 / LOOK CLOSER
        </div>

        <h2>
          Your business.
          <br />
          <span>Your digital presence.</span>
        </h2>

        <p className="reflection-question">
          Do they match?
        </p>


        <div className="reflection-grid">

          <div className="reflection-side">
            <span>WHAT YOU'VE BUILT</span>

            <strong>
              Your reputation.
              <br />
              Your experience.
              <br />
              Your customers.
            </strong>
          </div>


          <div className="reflection-connector">
            <div></div>
            <span>↔</span>
            <div></div>
          </div>


          <div className="reflection-side">
            <span>WHAT CUSTOMERS SEE</span>

            <strong>
              Search.
              <br />
              Website.
              <br />
              Content.
            </strong>
          </div>

        </div>

      </section>


      {/* =====================================================
          WHY ROLL'N MEDIA
      ===================================================== */}

      <section className="section why-section">

        <div className="section-label">
          07 / OUR APPROACH
        </div>

        <h2>
          We don't just chase
          <br />
          <span>clicks.</span>
        </h2>

        <p className="why-lead">
          We build what happens after them.
        </p>


        <div className="principles-grid">

          <div className="principle">
            <span>01</span>
            <h3>THINK FIRST</h3>
            <p>
              Strategy before execution.
            </p>
          </div>

          <div className="principle">
            <span>02</span>
            <h3>BUILD PROPERLY</h3>
            <p>
              Digital experiences designed around people.
            </p>
          </div>

          <div className="principle">
            <span>03</span>
            <h3>MEASURE</h3>
            <p>
              Know what is working and why.
            </p>
          </div>

          <div className="principle">
            <span>04</span>
            <h3>KEEP IMPROVING</h3>
            <p>
              Growth is a system, not a one-time campaign.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="section about-section">

        <div className="section-label">
          08 / ABOUT ROLL’N MEDIA
        </div>

        <h2>
          Digital growth for
          <br />
          <span>ambitious businesses.</span>
        </h2>

        <p className="about-text">
          Roll’n Media brings strategy, creative thinking,
          technology and performance together to help
          businesses build a digital presence that works.
        </p>

        <a href="/about" className="text-link">
          About Roll’n Media ↗
        </a>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section id="contact" className="cta-section">

        <div className="cta-grid"></div>

        <div className="cta-orb"></div>

        <div className="cta-content">

          <div className="section-label">
            READY WHEN YOU ARE
          </div>

          <h2>
            There's probably
            <br />
            a gap somewhere.
          </h2>

          <p>
            Let's find it.
          </p>

          <a
            href="mailto:hello@rollnmedia.co.nz"
            className="primary-button"
          >
            Show Me the Gap
            <span>↗</span>
          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-top">

          <div>

            <div className="footer-logo">
              Roll’n Media
            </div>

            <p>
              Digital growth for ambitious businesses.
            </p>

          </div>


          <div className="footer-links">

            <a href="/">Home</a>

            <a href="#services">Services</a>

            <a href="#work">Portfolio</a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            Web · Content · Search · Growth
          </span>

          <span>
            © 2026 Roll’n Media
          </span>

        </div>

      </footer>

    </main>
  );
}
