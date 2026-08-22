import "./Engine.css";

export default function Engine() {
  const systems = [
    {
      title: "STRATEGY",
      text: "Research, positioning and a clear direction for sustainable digital growth.",
    },
    {
      title: "WEB",
      text: "Websites and digital experiences designed to turn attention into action.",
    },
    {
      title: "SEARCH",
      text: "SEO and search visibility that put your business in front of the right people.",
    },
    {
      title: "PAID",
      text: "Performance campaigns built around measurable traffic, leads and growth.",
    },
    {
      title: "DATA",
      text: "Tracking and insights that show what is working and where to improve.",
    },
    {
      title: "AUTOMATION",
      text: "AI-powered tools and workflows that make your business faster and more efficient.",
    },
  ];

  const growthStages = [
    {
      number: "01",
      title: "BE FOUND.",
      heading: "Get discovered.",
      description:
        "Being good at what you do isn't enough if nobody can find you.",
      text:
        "We help put your business in front of the right people — wherever they're looking.",

      services: [
        {
          title: "WEB",
          text: "Websites built to attract, inform and convert.",
        },
        {
          title: "SEARCH",
          text: "SEO and search visibility that help customers find you.",
        },
        {
          title: "PAID",
          text: "Campaigns that put your business in front of people ready to act.",
        },
      ],
    },

    {
      number: "02",
      title: "BE CHOSEN.",
      heading: "Make the right impression.",
      description:
        "Getting attention is one thing. Turning it into action is another.",
      text:
        "We make the digital experience clearer, stronger and easier to choose.",

      services: [
        {
          title: "STRATEGY",
          text: "Positioning and direction built around your customers.",
        },
        {
          title: "EXPERIENCE",
          text: "Digital experiences designed to build trust and create action.",
        },
        {
          title: "CONVERSION",
          text: "Clear journeys that turn attention into enquiries and customers.",
        },
      ],
    },

    {
      number: "03",
      title: "BE REMEMBERED.",
      heading: "Give them a reason to come back.",
      description:
        "The best digital presence isn't just noticed.",
      text:
        "It's remembered.",

      services: [
        {
          title: "CONTENT",
          text: "Ideas and communication people actually want to engage with.",
        },
        {
          title: "BRAND",
          text: "A digital identity that feels recognisable and worth remembering.",
        },
        {
          title: "AUTOMATION",
          text: "Smarter systems that keep your business moving behind the scenes.",
        },
      ],
    },
  ];

  return (
    <section className="engine-section" id="services">

      {/* =====================================================
          ENGINE INTRO
      ===================================================== */}

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


      {/* =====================================================
          ENGINE SYSTEM
      ===================================================== */}

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


      {/* =====================================================
          GROWTH FLOW
      ===================================================== */}

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


      {/* =====================================================
          GROWTH STAGES
      ===================================================== */}

      <div className="engine-stages">

        {growthStages.map((stage) => (

          <article
            className="engine-stage"
            key={stage.number}
          >

            {/* ================= STAGE TOP ================= */}

            <div className="engine-stage-top">

              <span className="engine-stage-number">
                {stage.number}
              </span>

              <span className="engine-stage-title">
                {stage.title}
              </span>

            </div>


            {/* ================= STAGE CONTENT ================= */}

            <div className="engine-stage-main">

              <div className="engine-stage-heading">

                <h3>
                  {stage.heading}
                </h3>

                <p className="engine-stage-description">
                  {stage.description}
                </p>

                <p className="engine-stage-text">
                  {stage.text}
                </p>

              </div>


              {/* ================= SERVICES ================= */}

              <div className="engine-stage-services">

                {stage.services.map((service) => (

                  <div
                    className="engine-stage-service"
                    key={service.title}
                  >

                    <span className="engine-service-title">
                      {service.title}
                    </span>

                    <p>
                      {service.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </article>

        ))}

      </div>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <div className="engine-start">

        <div className="engine-start-copy">

          <span className="engine-start-label">
            START WITH WHAT YOU NEED.
          </span>

          <p>
            One service. Several. Or the bigger picture.
          </p>

        </div>


        <div className="engine-start-action">

          <span>
            You choose where we start.
          </span>

          <a href="#contact">
            START A CONVERSATION
            <b>↗</b>
          </a>

        </div>

      </div>

    </section>
  );
}
