const projects = [
  {
    title: "Drenla",
    image: "/images/projects/drenla.PNG",
    description:
      "A creative design agency website that showcases how ideas are transformed into impactful digital experiences.",
  },
  {
    title: "Gado Cartoons",
    image: "/images/projects/gadocartoons.PNG",
    description:
      "An e-commerce website for selling editorial cartoons, showcasing original artwork with a clean layout designed to highlight visual storytelling.",
  },
  {
    title: "SPX FLow Events",
    image: "/images/projects/spxflow.PNG",
    description:
      "An event management website designed to plan, organize, and showcase all kinds of events through a clear and engaging digital experience.",
  },
  {
    title: "Inhouse Africa",
    image: "/images/projects/inhouseafrica.PNG",
    description:
      "A corporate compliance platform that supports businesses with registration, tax compliance, HR, payroll management, and essential administrative services.",
  },
  {
    title: "RTR Chauffeurs",
    image: "/images/projects/rtrchauffeurs.PNG",
    description:
      "A luxury chauffeur service website tailored for VIP clients, highlighting executive travel, premium vehicles, and a refined, high-end experience.",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-content">
        <h2 className="section-title autoShow">
          <span>02.</span> Some Things I've Built
          <div className="title-line"></div>
        </h2>

        {projects.map((project) => (
          <div className="project-item" key={project.title}>
            <div className="project-image autoShow">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-info autoShow">
              <p className="featured">Featured Project</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="tech-stack">
                JavaScript &nbsp; HTML &amp; CSS &nbsp; Visual Studio Code
              </p>
              <div className="project-links">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
