
import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "HealthKosh",
    category: "Full-Stack Healthcare Web Application",
    description:
      "Developed a digital healthcare platform designed to connect patients, doctors, and administrators through dedicated role-based interfaces. Implemented user registration workflows, separate login pages for different user roles, and an email-based OTP verification system using Django. Built the frontend with React.js and developed backend APIs using Django REST Framework, with SQLite for data management.",
    technologies: [
      "React.js",
      "JavaScript",
      "Python",
      "Django",
      "Django REST Framework",
      "SQLite",
      "REST APIs",
      "CSS3",
      "Vite",
    ],
    github:
      "https://github.com/RitikaJoshi-2807/HealthKosh",
    icon: "H",
  },
  {
    id: 2,
    name: "GeoSpatial - Soil Information System",
    category: "Geospatial Technology",
    description:
      "Developed a full-stack geospatial web application to visualize, manage, and explore soil information across different geographical regions. Implemented interactive maps, state-wise geographical visualization, soil data filtering, dynamic data tables, and backend API integration. The platform uses geospatial datasets to support soil research, agricultural planning, and informed land management.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "Python",
      "Flask",
      "PostgreSQL",
      "Leaflet.js",
      "GeoJSON",
      "REST APIs",
      "Pandas",
    ],
    github:
      "https://github.com/RitikaJoshi-2807/GeoSpatial-SIS",
    icon: "G",
  },
];

function Projects() {
  return (
    <section className="projects-card" id="projects">

      <h2>Projects</h2>

      <p className="projects-subtitle">
        Some of the projects I've worked on
      </p>

      {projects.map((project) => (
        <article className="project-item" key={project.id}>

          <div className="project-icon">
            {project.icon}
          </div>

          <div className="project-details">

            <h3>{project.name}</h3>

            <p className="project-category">
              {project.category}
            </p>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github"
            >
              View on GitHub <span>↗</span>
            </a>

          </div>

        </article>
      ))}

    </section>
  );
}

export default Projects;
