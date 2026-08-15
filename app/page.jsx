export default function Home() {
  return (
    <main className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="/" className="logo">
          <span className="logo-roll">Roll’n</span>
          <span className="logo-media">Media</span>
        </a>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let’s Talk <span>↗</span>
        </a>
      </header>

      {/* HERO */}
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
            We help businesses turn attention into meaningful
            traffic, qualified leads and measurable growth.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              Start a Conversation <span>↗</span>
            </a>

            <a href="#work" className="secondary-button">
              Explore Our Work
            </a>
          </div>

        </div>

        {/* 3D PLACEHOLDER */}
        <div className="hero-visual">

          <div className="glow glow-blue"></div>
          <div className="glow glow-orange"></div>

          <div className="cursor-orb">
            <div className="cursor-shape">
              ↖
            </div>

            <div className="cursor-ring ring-one"></div>
            <div className="cursor-ring ring-two"></div>
          </div>

          <div className="floating-word word-one">
            SEO
          </div>

          <div className="floating-word word-two">
            ADS
          </div>

          <div className="floating-word word-three">
            WEB
          </div>

        </div>

        <div className="hero-bottom">
          <span>SEO</span>
          <i>✦</i>
          <span>PAID MEDIA</span>
          <i>✦</i>
          <span>WEB DESIGN</span>
          <i>✦</i>
          <span>GROWTH</span>
        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="section-label">01 / WHAT WE DO</div>

        <h2>
          Digital marketing
          <br />
          <span>built to perform.</span>
        </h2>

        <div className="service-grid">

          <div className="service-card">
            <span>01</span>
            <h3>SEO</h3>
            <p>
              Build search visibility and attract customers
              who are actively looking for your services.
            </p>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>Google Ads</h3>
            <p>
              Put your business in front of high-intent
              customers and turn clicks into enquiries.
            </p>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Meta Ads</h3>
            <p>
              Creative campaigns designed to generate
              attention, conversations and leads.
            </p>
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>Web Design</h3>
            <p>
              High-performance websites designed around
              your brand, customers and business goals.
            </p>
          </div>

        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section work-section">
        <div className="section-label">02 / SELECTED WORK</div>

        <h2>
          Work that speaks
          <br />
          <span>for itself.</span>
        </h2>

        <div className="work-card">
          <div className="work-info">
            <span className="work-category">
              PROPERTY MANAGEMENT · NEW ZEALAND
            </span>

            <h3>Rent My Home</h3>

            <p>
              Website, SEO and digital growth work for
              a New Zealand property management brand.
            </p>

            <a href="#" className="text-link">
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
                <strong>Rent My Home</strong>
                <small>You Own. We Manage.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-label">03 / WHY ROLL’N MEDIA</div>

        <h2>
          Strategy.
          <br />
          Creativity.
          <br />
          <span>Growth.</span>
        </h2>

        <p className="about-text">
          We combine strategy, creative thinking and digital
          execution to help businesses move from being
          seen to being chosen.
        </p>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section">

        <div className="cta-orb"></div>

        <div className="cta-content">
          <div className="section-label">LET’S WORK TOGETHER</div>

          <h2>
            Ready to make
            <br />
            your next move?
          </h2>

          <a href="mailto:hello@rollnmedia.co.nz" className="primary-button">
            Start a Conversation <span>↗</span>
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          Roll’n Media
        </div>

        <p>
          Digital growth for ambitious businesses.
        </p>

        <span>© 2026 Roll’n Media</span>
      </footer>

    </main>
  );
}
