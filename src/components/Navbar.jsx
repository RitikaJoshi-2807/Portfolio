import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-left">
          <div className="linkedin-logo">in</div>

          <input
            type="text"
            placeholder="Search"
            className="navbar-search"
          />
        </div>

        <nav className="navbar-links">
          <a href="#home" className="nav-item active">
            <span>⌂</span>
            <small>Home</small>
          </a>

          <a href="#about" className="nav-item">
            <span>♙</span>
            <small>About</small>
          </a>

          <a href="#education" className="nav-item">
            <span>▤</span>
            <small>Education</small>
          </a>

          <a href="#skills" className="nav-item">
            <span>◇</span>
            <small>Skills</small>
          </a>

          <a href="#projects" className="nav-item">
            <span>▣</span>
            <small>Projects</small>
          </a>

          <a href="#contact" className="nav-item">
            <span>✉</span>
            <small>Contact</small>
          </a>

          <a href="#internships" className="nav-item">
            <span>🔧</span>
            <small>Internships</small>
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;