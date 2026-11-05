
import "./Internships.css";

function Internships() {
  return (
    <section className="internships-card" id="internships">

      <h2>Internships</h2>

      <div className="internship-list">

        {/* ColoredCow Internship */}
        <div className="internship-item">

          <div className="internship-logo coloredcow-logo">
            CC
          </div>

          <div className="internship-details">

            <h3>Internship – Agmarknet 2.0 Project</h3>

            <h4>ColoredCow</h4>

            <p className="internship-duration">
              19 December 2024 – 30 June 2025
            </p>

            <p className="internship-description">
              Worked collaboratively on the Agmarknet 2.0
              project, gaining experience in content strategy
              and content writing.
              
              Contributed to creating clear, engaging and
              purposeful content while helping communicate
              complex ideas in an accessible manner.
            </p>

            <div className="internship-tags">
              <span>Content Strategy</span>
              <span>Content Writing</span>
              <span>Communication</span>
              <span>Team Collaboration</span>
            </div>

          </div>
        </div>

        <div className="internship-divider"></div>

        {/* ISRO IIRS Internship */}
        <div className="internship-item">

          <div className="internship-logo isro-logo">
            ISRO
          </div>

          <div className="internship-details">

            <h3>Geospatial Soil Information System</h3>

            <h4>
              Indian Institute of Remote Sensing (IIRS),
              ISRO
            </h4>

            <p className="internship-duration">
              1 February 2025 – 31 March 2025
            </p>

            <p className="internship-description">
              Successfully completed an internship under
              the guidance of Dr. Suresh Kumar.

              Worked on developing a web-based application
              to visualise and analyse a geospatial soil
              database as part of the Geospatial Soil
              Information System project.
            </p>

            <div className="internship-tags">
              <span>Geospatial Technology</span>
              <span>Web Development</span>
              <span>GIS</span>
              <span>Data Visualisation</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Internships;
