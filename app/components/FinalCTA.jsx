import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contact">

      <div className="final-cta-top">
        <span>THE NEXT MOVE</span>
        <span>ROLL’N MEDIA · NEW ZEALAND</span>
      </div>


      <div className="final-cta-content">

        <span className="final-cta-eyebrow">
          YOUR BUSINESS HAS MORE ROOM TO GROW.
        </span>

        <h2>
          Is your digital presence
          <br />
          <span>keeping up?</span>
        </h2>

        <p>
          Your business might already be doing great things.
          We help make sure your website, search presence and
          digital systems are working hard enough to show it.
        </p>

        <a
          href="mailto:hello@rollnmedia.co.nz"
          className="gap-button"
        >
          LET’S TALK
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
