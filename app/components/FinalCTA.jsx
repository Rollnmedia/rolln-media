import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contact">

      <div className="final-cta-top">
        <span>05 / NEXT MOVE</span>
        <span>ROLL’N MEDIA · NEW ZEALAND</span>
      </div>

      <div className="final-cta-content">

        <span className="final-cta-eyebrow">
          THERE’S ALWAYS A GAP.
        </span>

        <h2>
          Is your digital presence
          <br />
          <span>keeping up?</span>
        </h2>

        <p>
          Your business might already be doing great things.
          The question is whether your digital presence is
          showing the world.
        </p>

        <a href="mailto:hello@rollnmedia.co.nz" className="gap-button">
          SHOW ME THE GAP
          <span>↗</span>
        </a>

      </div>

      <div className="final-cta-bottom">
        <span>WEB · SEARCH · GROWTH · AUTOMATION</span>
        <span>LET’S MAKE IT WORK.</span>
      </div>

    </section>
  );
}
