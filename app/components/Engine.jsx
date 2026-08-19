import "./Engine.css";

export default function Engine() {
  const systems = [
    {
      number: "01",
      title: "STRATEGY",
      text: "Research, positioning and a clear digital direction."
    },
    {
      number: "02",
      title: "WEB",
      text: "Websites, applications and digital experiences built to convert."
    },
    {
      number: "03",
      title: "SEARCH",
      text: "SEO and search visibility that put your business in front of intent."
    },
    {
      number: "04",
      title: "PAID",
      text: "Performance campaigns designed around measurable outcomes."
    },
    {
      number: "05",
      title: "DATA",
      text: "Tracking, insights and feedback that show what is actually working."
    },
    {
      number: "06",
      title: "AUTOMATION",
      text: "AI tools, agents and workflows that make the system work smarter."
    }
  ];

  return (
    <section className="engine-section">

      <div className="engine-top">
        <span>02 / THE ENGINE</span>
        <span>ONE SYSTEM · MULTIPLE MOVING PARTS</span>
      </div>


      <div className="engine-intro">

        <div>
          <h2>
            Built as a system.
            <br />
            <span>Not a collection of services.</span>
          </h2>
        </div>

        <p>
          The strongest digital growth doesn't come from isolated
          tactics. It comes from the pieces working together —
          continuously learning, improving and moving the business forward.
        </p>

      </div>


      <div className="engine-system">

        <div className="engine-ring"></div>

        <div className="engine-core">
          <span>ROLL'N</span>
          <strong>ENGINE</strong>
          <small>GROWTH SYSTEM</small>
        </div>


        <div className="engine-orbit orbit-one"></div>
        <div className="engine-orbit orbit-two"></div>


        {systems.map((system, index) => (
          <div
            className={`engine-node engine-node-${index + 1}`}
            key={system.number}
          >
            <span className="engine-number">
              {system.number}
            </span>

            <strong>
              {system.title}
            </strong>

            <p>
              {system.text}
            </p>
          </div>
        ))}

      </div>


      <div className="engine-flow">

        <span>ATTENTION</span>
        <i>→</i>

        <span>INTENT</span>
        <i>→</i>

        <span>EXPERIENCE</span>
        <i>→</i>

        <span>ACTION</span>
        <i>→</i>

        <span>GROWTH</span>

      </div>

    </section>
  );
}
