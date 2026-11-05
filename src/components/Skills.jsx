
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Vue.js",
      "React Router",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Python",
      "Django",
      "Flask",
      "Django REST Framework",
      "REST API Development",
    ],
  },
  {
    title: "Database Management",
    skills: [
      "PostgreSQL",
      "SQLite",
      "SQLAlchemy",
    ],
  },
  {
    title: "Geospatial & Data Technologies",
    skills: [
      "Leaflet.js",
      "GeoJSON",
      "OpenStreetMap",
      "Pandas",
      "Excel Data Processing",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "Axios",
      "Postman",
    ],
  },
  {
    title: "Core Skills",
    skills: [
      "Problem Solving",
      "Debugging",
      "API Integration",
      "Database Design",
      "Full-Stack Development",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-card" id="skills">
      <h2>Skills</h2>

      <p className="skills-subtitle">
        Technologies and tools I use to build web applications
      </p>

      {skillGroups.map((group) => (
        <div className="skill-group" key={group.title}>
          <h3>{group.title}</h3>

          <div className="skills-list">
            {group.skills.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
