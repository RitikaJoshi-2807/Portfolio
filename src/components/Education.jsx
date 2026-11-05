
import "./Education.css";

const educationData = [
  {
    type: "college",
    institution: "THDC IHET",
    university: "Uttarakhand Technical University",
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Computer Science and Engineering",
    duration: "2021 – 2025",
    score: "8.5",
    scoreLabel: "CGPA",
    scoreMax: "/ 10",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Development",
      "Software Engineering"
    ]
  },
  {
    type: "school",
    institution: "Divine Light School",
    university: "Central Board of Secondary Education (CBSE)",
    degree: "Class XII – Senior Secondary",
    specialization: "Science (PCM)",
    score: "95.6",
    scoreLabel: "Percentage",
    scoreMax: "%",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics"
    ]
  }
];

function Education() {
  return (
    <section className="education-card" id="education">

      <div className="education-heading">
        <h2>Education</h2>
        <span className="education-heading-icon">🎓</span>
      </div>

      <div className="education-list">

        {educationData.map((item, index) => (
          <div className="education-item" key={index}>

            <div className="education-logo">
              {item.type === "college" ? "🎓" : "🏫"}
            </div>

            <div className="education-details">

              <h3>{item.institution}</h3>

              <p className="education-university">
                {item.university}
              </p>

              <p className="education-degree">
                {item.degree} – {item.specialization}
              </p>

              {item.duration && (
                <p className="education-duration">
                  {item.duration}
                </p>
              )}

              {/* Academic Score */}
              <div className="cgpa-container">

                <div className="cgpa-info">
                  <span className="cgpa-label">
                    Academic Performance
                  </span>

                  <span className="cgpa-value">
                    {item.score}
                    <small> {item.scoreMax}</small>
                  </span>
                </div>

                <div className="cgpa-progress">
                  <div
                    className="cgpa-progress-fill"
                    style={{
                      width: `${
                        item.type === "college"
                          ? Number(item.score) * 10
                          : Number(item.score)
                      }%`
                    }}
                  ></div>
                </div>

              </div>

              {/* Subjects / Coursework */}
              <div className="coursework-section">

                <h4>
                  {item.type === "college"
                    ? "Relevant Coursework"
                    : "Subjects"}
                </h4>

                <div className="coursework-tags">
                  {item.coursework.map((course, courseIndex) => (
                    <span key={courseIndex}>
                      {course}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Education;
