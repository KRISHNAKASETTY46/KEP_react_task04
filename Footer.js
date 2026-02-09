export default function Footer() {
  return (
    <footer className="main-footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-about">
          <h3>KESHAVA ELITE PROJECTS</h3>
          <p>
            Empowering Future Innovators Through
            Robotics & STEM Excellence.
          </p>
        </div>

        {/* Middle */}
        <div className="footer-links">
          <h4>Quick Links</h4>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-social">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>

            <a
              href="https://www.linkedin.com/company/keshava-elite-projects/"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Keshava Elite Projects Pvt. Ltd. All Rights Reserved.
      </div>

    </footer>
  );
}
