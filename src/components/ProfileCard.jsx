import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="profile-card">

      <div className="profile-cover"></div>

      <div className="profile-details">

        <img
          src="/images/profile.png"
          alt="Ritika Joshi"
          className="profile-image"
        />

        <h2>Ritika Joshi</h2>

        <p className="profile-headline">
          Full-Stack Web Developer | 
        </p>

        <p className="profile-location">
          India
        </p>

        <div className="profile-separator"></div>

        <div className="profile-stat">
          <span>GitHub Profile</span>

          <a
            href="https://github.com/RitikaJoshi-2807"
            target="_blank"
            rel="noreferrer"
          >
            View Profile ↗
          </a>
        </div>

        <div className="profile-stat">
          <span>Featured Projects</span>
          <strong>2</strong>
        </div>

        <div className="profile-separator"></div>

        <p className="profile-footer">
          Open to learning and opportunities
        </p>

      </div>
    </div>
  );
}

export default ProfileCard;