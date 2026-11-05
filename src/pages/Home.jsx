
import ProfileCard from "../components/ProfileCard";
import "./Home.css";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Internships from "../components/Internships";

function Home() {
  return (
    <main className="home-container" id="home">
      <div className="home-layout">

        {/* LEFT SIDEBAR */}
        <aside className="left-sidebar">
          <ProfileCard />
        </aside>

        {/* MAIN CONTENT */}
        <section className="main-feed">

          {/* WELCOME SECTION */}
          <div className="welcome-card">
            <h2>Hello, I'm Ritika! 👋</h2>

            <p>
              I'm a Computer Science student with a keen interest
              in technology, software development, and creating
              meaningful digital experiences. I enjoy exploring
              new technologies and turning ideas into practical
              solutions that address real-world challenges.
            </p>

            <p>
              Through my projects and internship experiences at
              ISRO (IIRS) and ColoredCow, I've explored web
              development, geospatial technologies, and
              collaborative problem-solving.
            </p>

            <p>
              Take a look around to discover my journey,
              technical skills, projects, and experiences.
              I'm always open to learning, connecting, and
              exploring new opportunities!
            </p>
          </div>

          {/* PORTFOLIO SECTIONS */}
          <About />

          <Education />

          <Internships />

          <Skills />

          <Projects />

          <Contact />

          {/* CURRENTLY WORKING ON - END OF PAGE */}
          <section className="working-card" id="currently-working">

            <div className="working-header">
              <div>
                <span className="working-label">
                  CURRENTLY BUILDING
                </span>
                <h2>What I'm Working On</h2>
              </div>

              <span className="project-status">
                In Progress
              </span>
            </div>

            <h3 className="working-title">FoodLoop 🍃</h3>

            <p className="working-subtitle">
              A Food Rescue and Redistribution Platform
            </p>

            <p className="working-description">
              I'm currently building FoodLoop, a web-based
              platform aimed at reducing food waste by
              connecting food donors, NGOs, recipients, and
              volunteers through a common platform.
            </p>

            <p className="working-description">
              The idea is to make surplus food easier to
              discover, reserve, and redistribute to people
              who need it. The platform is designed to support
              food listings, reservations, rescue coordination,
              and impact tracking.
            </p>

            <div className="working-features">
              <h4>Key Features I'm Exploring</h4>

              <ul>
                <li>Food donors can list surplus food.</li>
                <li>Recipients can explore available food listings.</li>
                <li>Food reservations and quantity management.</li>
                <li>Volunteer-based pickup and delivery coordination.</li>
                <li>Tracking food rescued and community impact.</li>
              </ul>
            </div>

            <div className="working-tags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>CSS3</span>
              <span>Frontend Development</span>
              <span>Social Impact</span>
            </div>

            <div className="working-footer">
              <span>Building with purpose, one feature at a time. 💚</span>
            </div>

          </section>

        </section>

        {/* RIGHT SIDEBAR */}
        
        <div className="right-card highlights-card">
        <h3>Profile Highlights</h3>

        <p className="highlight-intro">
            Computer Science graduate | Developer | Tech Enthusiast
        </p>

        <div className="highlight-item">
            <span className="highlight-icon">💻</span>
            <div>
            <h4>Web Development</h4>
            <p>React.js · Vue.js · JavaScript</p>
            </div>
        </div>

        <div className="highlight-item">
            <span className="highlight-icon">🌍</span>
            <div>
            <h4>Geospatial Technology</h4>
            <p>GIS · Leaflet.js · GeoJSON</p>
            </div>
        </div>

        <div className="highlight-item">
            <span className="highlight-icon">⚙️</span>
            <div>
            <h4>Backend & Databases</h4>
            <p>Python · Flask · PostgreSQL</p>
            </div>
        </div>

        <div className="highlight-item">
            <span className="highlight-icon">🚀</span>
            <div>
            <h4>Professional Experience</h4>
            <p>ISRO (IIRS) · ColoredCow</p>
            </div>
        </div>

        <div className="highlight-item">
            <span className="highlight-icon">✨</span>
            <div>
            <h4>Core Strengths</h4>
            <p>Problem Solving · Adaptability · Teamwork</p>
            </div>
        </div>
        </div>


      </div>
    </main>
  );
}

export default Home;
