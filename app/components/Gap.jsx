import "./Gap.css";

export default function Gap() {
  return (
    <section className="gap-section">

      {/* ================= HEADING ================= */}

      <div className="gap-heading">

        <h2>
          Your business
          <br />
          <span>deserves to be seen.</span>
        </h2>

        <p>
          You may have the right service, the right people and a
          business worth choosing. But if customers cannot find you,
          understand you or trust what they see, the opportunity is
          already being lost.
        </p>

      </div>


      {/* ================= GAP VISUAL ================= */}

      <div className="gap-visual">

        <div className="gap-side gap-business">

          <span>WHAT YOU BRING</span>

          <div className="gap-items">

            <p>Great service</p>

            <p>Real expertise</p>

            <p>Strong reputation</p>

            <p>Happy customers</p>

          </div>

        </div>


        <div className="gap-middle">

          <span>THE</span>

          <strong>GAP</strong>

        </div>


        <div className="gap-side gap-digital">

          <span>WHAT CUSTOMERS EXPERIENCE</span>

          <div className="gap-items">

            <p>Hard to find</p>

            <p>Unclear message</p>

            <p>Outdated presence</p>

            <p>No clear next step</p>

          </div>

        </div>

      </div>


      {/* ================= CLOSING ================= */}

      <div className="gap-bottom">

        <span></span>

        <p>
          We close the gap between how good your business is
          and how clearly the digital world sees it.
        </p>

        <span></span>

      </div>

    </section>
  );
}
