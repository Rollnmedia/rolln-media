import "./Work.css";

const projects = [
  {
    number: "01",
    category: "PROPERTY MANAGEMENT · NEW ZEALAND",
    title: "Rent My Home",
    description:
      "Website, SEO and digital growth work for a New Zealand property management brand.",
    images: [
      "/work/rmh-01.jpg",
      "/work/rmh-02.jpg",
      "/work/rmh-03.jpg",
      "/work/rmh-04.jpg",
    ],
  },
  {
    number: "02",
    category: "DIGITAL GROWTH · NEW ZEALAND",
    title: "Project Two",
    description:
      "A digital experience built around clarity, performance and growth.",
    images: [
      "/work/project-02-01.jpg",
      "/work/project-02-02.jpg",
      "/work/project-02-03.jpg",
    ],
  },
];

export default function Work() {
  return (
    <section className="work-section">

      <div className="work-top">
        <span>03 / SELECTED WORK</span>
        <span>REAL BUSINESSES · REAL DIGITAL SYSTEMS</span>
      </div>


      <div className="work-heading">

        <h2>
          It's not
          <br />
          <span>theory.</span>
        </h2>

        <p>
          Here's what happens when strategy, design and
          digital growth are put to work.
        </p>

      </div>


      <div className="work-list">

        {projects.map((project) => (

          <article className="project" key={project.number}>

            <div className="project-meta">

              <span>{project.number}</span>

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
                    alt={`${project.title} project ${index + 1}`}
                  />

                </div>

              ))}

            </div>


            <div className="project-bottom">

              <span>
                {project.images.length} SCREENS
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
