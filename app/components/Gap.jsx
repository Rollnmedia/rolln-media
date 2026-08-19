import "./Gap.css";

export default function Gap() {
  return (
    <section className="gap-section">

      <div className="gap-top">
        <span>01 / THE GAP</span>
        <span>WHAT YOU BUILD · WHAT THEY SEE</span>
      </div>

      <div className="gap-heading">
        <h2>
          Your business
          <br />
          <span>deserves to be found.</span>
        </h2>

        <p>
          You can have a great product, great people and great
          service. But none of that matters if the digital experience
          doesn't communicate it.
        </p>
      </div>

      <div className="gap-visual">

        <div className="gap-side gap-business">
          <span>WHAT YOU DO</span>

          <div className="gap-items">
            <p>Great service</p>
            <p>Real experience</p>
            <p>Good people</p>
            <p>Happy customers</p>
          </div>
        </div>

        <div className="gap-middle">
          <span>THE</span>
          <strong>GAP</strong>
        </div>

        <div className="gap-side gap-digital">
          <span>WHAT THEY SEE</span>

          <div className="gap-items">
            <p>Low visibility</p>
            <p>Unclear messaging</p>
            <p>Outdated experience</p>
            <p>No obvious next step</p>
          </div>
        </div>

      </div>

      <div className="gap-bottom">
        <span>01</span>

        <p>
          That's where we work.
        </p>

        <span>02</span>
      </div>

    </section>
  );
}
