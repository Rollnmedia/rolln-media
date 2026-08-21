import "./Work.css";

const projects = [
  {
    category: "PROPERTY MANAGEMENT · NEW ZEALAND",
    title: "Rent My Home",
    description:
      "A complete digital growth system combining website development, SEO, visual communication and conversion-focused strategy for a New Zealand property management brand.",

    images: [
      {
        src: "/work/rmh-01.jpg",
        label: "01 · WEBSITE VIEW",
        note: "DIGITAL EXPERIENCE",
      },
      {
        src: "/work/rmh-02.jpg",
        label: "02 · WEBSITE / DESIGN",
        note: "UI · STRUCTURE · CONVERSION",
      },
      {
        src: "/work/rmh-03.jpg",
        label: "03 · GRAPHICS",
        note: "CONTENT · BRAND COMMUNICATION",
      },
      {
        src: "/work/rmh-04.jpg",
        label: "04 · RESULT",
        note: "AFTER 1 MONTH",
      },
    ],
  },

  {
    category: "E-COMMERCE · INDIA",
    title: "Godswing",
    description:
      "An e-commerce experience built around a stronger visual identity, product presentation and a clearer path from discovery to purchase.",

    images: [
      {
        src: "/work/godswing-01.jpg",
        label: "01 · WEBSITE VIEW",
        note: "E-COMMERCE EXPERIENCE",
      },
      {
        src: "/work/godswing-02.jpg",
        label: "02 · WEBSITE / DESIGN",
        note: "UI · PRODUCT · EXPERIENCE",
      },
      {
        src: "/work/godswing-03.jpg",
        label: "03 · GRAPHICS",
        note: "CONTENT · VISUAL SYSTEM",
      },
      {
        src: "/work/godswing-04.jpg",
        label: "04 · RESULT",
        note: "AFTER 1 MONTH",
      },
    ],
  },
];

export default function Work() {
  return (
    <section className="work-section" id="work">

      <div className="work-heading">

        <h2>
          It's not
          <br />
          <span>theory.</span>
        </h2>

        <p>
          Real businesses. Real challenges. Real digital work built
          to create visibility, improve experience and drive growth.
        </p>

      </div>


      <div className="work-list">

        {projects.map((project) => (

          <article
            className="project"
            key={project.title}
          >

            <div className="project-meta">

              <span>
                {project.category}
              </span>

            </div>


            <div className="project-title">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

            </div>


            <div className="project-gallery">

              {project.images.map((image) => (

                <div
                  className="project-image"
                  key={image.src}
                >

                  <img
                    src={image.src}
                    alt={`${project.title} — ${image.label}`}
                    loading="lazy"
                  />

                  <div className="project-image-info">

                    <span className="project-image-label">
                      {image.label}
                    </span>

                    <span className="project-image-note">
                      {image.note}
                    </span>

                  </div>

                </div>

              ))}

            </div>


            <div className="project-bottom">

              <span>
                {project.title}
              </span>

              <span>
                SWIPE →
              </span>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}
