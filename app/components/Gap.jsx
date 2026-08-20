import "./Gap.css";

export default function Gap() {
  return (
    <section className="gap-section" id="gap">

      {/* ================= HEADER ================= */}

      <div className="gap-intro">

        <div className="gap-kicker">
          <span></span>
          THE DIGITAL GAP
        </div>

        <div className="gap-heading">

          <h2>
            Your business
            <br />
            <span>deserves to be found.</span>
          </h2>

          <p>
            You might have great people, great service and a business
            worth talking about. But if your digital presence doesn't
            communicate that clearly, potential customers move on.
          </p>

        </div>

      </div>


      {/* ================= GAP VISUAL ================= */}

      <div className="gap-visual">

        {/* BUSINESS SIDE */}

        <div className="gap-side gap-business">

          <div className="gap-side-heading">
            <span className="gap-index">01</span>

            <div>
              <small>WHAT YOU DO</small>
              <h3>Your business</h3>
            </div>
          </div>

          <div className="gap-items">

            <div className="gap-item">
              <span>01</span>
              <p>Great service</p>
              <i>↗</i>
            </div>

            <div className="gap-item">
              <span>02</span>
              <p>Real experience</p>
              <i>↗</i>
            </div>

            <div className="gap-item">
              <span>03</span>
              <p>Good people</p>
              <i>↗</i>
            </div>

            <div className="gap-item">
              <span>04</span>
              <p>Happy customers</p>
              <i>↗</i>
            </div>

          </div>

        </div>


        {/* ================= CENTRE GAP ================= */}

        <div className="gap-core">

          <div className="gap-core-line"></div>

          <div className="gap-core-orbit orbit-one"></div>
          <div className="gap-core-orbit orbit-two"></div>

          <div className="gap-core-mark">
            <span>↗</span>
          </div>

          <small>THE</small>

          <strong>GAP</strong>

          <p>
            Between what
            <br />
            you offer and
            <br />
            what they see.
          </p>

        </div>


        {/* DIGITAL SIDE */}

        <div className="gap-side gap-digital">

          <div className="gap-side-heading">

            <span className="gap-index">02</span>

            <div>
              <small>WHAT THEY SEE</small>
              <h3>Your digital presence</h3>
            </div>

          </div>


          <div className="gap-items">

            <div className="gap-item">
              <span>01</span>
              <p>Hard to find</p>
              <i>↗</i>
            </div>

            <div className="gap-item">
              <span>02</span>
              <p>Unclear messaging</p>
              <i>↗</i>
            </div>

            <div className="gap-item">
              <span>03</span>
              <p>Outdated experience</p>
              <i>↗</i>
            </div>

            <div className="gap-item">
              <span>04</span>
              <p>No clear next step</p>
              <i>↗</i>
            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM STATEMENT ================= */}

      <div className="gap-bottom">

        <div className="gap-bottom-line"></div>

        <p>
          That's the gap we help close.
        </p>

        <span>
          FIND · CHOOSE · GROW
        </span>

      </div>

    </section>
  );
}
