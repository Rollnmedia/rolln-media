import "./Engine.css";

export default function Engine() {
  const systems = [
    {
      title: "STRATEGY",
      text: "Research, positioning and a clear direction for sustainable digital growth."
    },
    {
      title: "WEB",
      text: "Websites and digital experiences designed to turn attention into action."
    },
    {
      title: "SEARCH",
      text: "SEO and search visibility that put your business in front of the right people."
    },
    {
      title: "PAID",
      text: "Performance campaigns built around measurable traffic, leads and growth."
    },
    {
      title: "DATA",
      text: "Tracking and insights that show what is working and where to improve."
    },
    {
      title: "AUTOMATION",
      text: "AI-powered tools and workflows that make your business faster and more efficient."
    }
  ];

  return (
    <section className="engine-section">

      <div className="engine-intro">

        <div>
          <h2>
            Built as a system.
            <br />
            <span>Not a collection of services.</span>
          </h2>
        </div>

        <p>
          Real digital growth doesn't come from disconnected tactics.
          It comes from the right pieces working together — creating
          momentum, learning from results and continuously moving
          your business forward.
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
            key={system.title}
          >

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
