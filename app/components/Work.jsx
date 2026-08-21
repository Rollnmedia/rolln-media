import "./Work.css";

const projects = [
  {
    category: "PROPERTY MANAGEMENT · NEW ZEALAND",
    title: "Rent My Home",
    description:
      "A complete digital growth system combining website development, SEO and conversion-focused strategy for a New Zealand property management brand.",
    images: [
      "/work/rmh-01.jpg",
      "/work/rmh-02.jpg",
      "/work/rmh-03.jpg",
      "/work/rmh-04.jpg",
    ],
  },
  {
    category: "DIGITAL GROWTH · NEW ZEALAND",
    title: "Project Two",
    description:
      "A digital experience designed around clarity, performance and a stronger path from attention to action.",
    images: [
      "/work/project-02-01.jpg",
      "/work/project-02-02.jpg",
      "/work/project-02-03.jpg",
    ],
  },
];

export default function Work() {
  return (
    <section className="work-section" id="Portfolio">

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

              {project.images.map((image, index) => (

                <div
                  className="project-image"
                  key={image}
                >

                  <img
                    src={image}
                    alt={`${project.title} — project view ${index + 1}`}
                    loading="lazy"
                  />

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
