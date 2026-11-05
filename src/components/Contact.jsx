
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-card" id="contact">

      <h2>Contact</h2>

      <p className="contact-intro">
        Let's connect! I'm always interested in
        learning, collaborating and exploring
        new opportunities.
      </p>

      <div className="contact-links">

        {/* GitHub */}
        <a
          href="https://github.com/RitikaJoshi-2807"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div className="contact-icon">GH</div>

          <div>
            <h3>GitHub</h3>
            <p>Explore my repositories</p>
          </div>

          <span className="contact-arrow">↗</span>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ritikajoshi2807@gmail.com&su=Portfolio%20Enquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div className="contact-icon">@</div>

          <div>
            <h3>Email</h3>
            <p>Send me a message</p>
          </div>

          <span className="contact-arrow">↗</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/ritikajoshi2807/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div className="contact-icon">IG</div>

          <div>
            <h3>Instagram</h3>
            <p>Connect with me on Instagram</p>
          </div>

          <span className="contact-arrow">↗</span>
        </a>

        {/* Medium */}
        <a
          href="https://medium.com/@ritikajoshi2807"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div className="contact-icon">M</div>

          <div>
            <h3>Medium</h3>
            <p>Read my articles and stories</p>
          </div>

          <span className="contact-arrow">↗</span>
        </a>

      </div>

      <div className="contact-bottom">
        Looking forward to connecting with you!
      </div>

    </section>
  );
}

export default Contact;
