import "./Gap.css";

export default function Gap() {
  return (
    <section className="gap-section">

      <div className="gap-top">
        <span>01 / THE GAP</span>
        <span>BUSINESS × DIGITAL</span>
      </div>

      <div className="gap-heading">
        <h2>
          Great businesses
          <br />
          <span>deserve to be seen.</span>
        </h2>

        <p>
          You can have the product, the people and the reputation.
          But if the digital experience doesn't communicate that,
          there's a gap between what you've built and what customers see.
        </p>
      </div>


      <div className="gap-visual">

        <div className="gap-side gap-business">
          <span className="gap-number">01</span>

          <h3>
            WHAT YOU'VE
            <br />
            BUILT
          </h3>

          <div className="gap-items">
            <span>Great service</span>
            <span>Real experience</span>
            <span>Happy customers</span>
            <span>Strong reputation</span>
          </div>
        </div>


        <div className="gap-center">

          <div className="gap-line"></div>

          <div className="gap-node">
            <span></span>
          </div>

          <small>THE GAP</small>

        </div>


        <div className="gap-side gap-digital">
          <span className="gap-number">02</span>

          <h3>
            WHAT THEY
            <br />
            SEE
          </h3>

          <div className="gap-items">
            <span>Search visibility</span>
            <span>Website experience</span>
            <span>Clear messaging</span>
            <span>Easy action</span>
          </div>
        </div>

      </div>


      <div className="gap-bottom">
        <strong>
          That's where we work.
        </strong>

        <span>We close the distance between the business and the screen.</span>
      </div>

    </section>
  );
}
