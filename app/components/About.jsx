import "./About.css";

export default function About() {
  return (
    <section className="about-section">

      {/* ================= TOP ================= */}

      <div className="about-top">
        <span>WHY ROLL’N MEDIA</span>
        <span>STRATEGY · BUILD · GROW · AUTOMATE</span>
      </div>


      {/* ================= MAIN ================= */}

      <div className="about-main">

        <div className="about-heading">

          <span className="about-small">
            DIGITAL GROWTH AGENCY · NEW ZEALAND
          </span>

          <h2>
            We build the
            <br />
            <span>digital side</span>
            <br />
            of your business.
          </h2>

        </div>


        <div className="about-copy">

          <p className="about-lead">
            Your business already has something worth building.
            We make sure the digital side reflects it.
          </p>

          <p>
            Roll’n Media brings strategy, technology, creative thinking
            and performance together to create digital systems that
            help businesses get found, get chosen and keep growing.
          </p>

          <p>
            From websites and search to paid media, automation and AI,
            every piece is built with a purpose — and connected to the
            bigger picture.
          </p>

        </div>

      </div>


      {/* ================= PRINCIPLES ================= */}

      <div className="about-principles">

        <div className="about-principle">
          <span>01</span>

          <strong>THINK FIRST</strong>

          <p>
            Understand the business, the customer and the opportunity
            before deciding what needs to be built.
          </p>
        </div>


        <div className="about-principle">
          <span>02</span>

          <strong>BUILD WITH PURPOSE</strong>

          <p>
            Every website, campaign and system should solve a problem
            and move the business towards a measurable outcome.
          </p>
        </div>


        <div className="about-principle">
          <span>03</span>

          <strong>KEEP IMPROVING</strong>

          <p>
            Launch is only the beginning. Data, behaviour and results
            show us where the next opportunity is.
          </p>
        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="about-bottom">

        <span>ROLL’N MEDIA</span>

        <p>
          Digital systems built to move
          <br />
          your business forward.
        </p>

        <span>2026</span>

      </div>

    </section>
  );
}
