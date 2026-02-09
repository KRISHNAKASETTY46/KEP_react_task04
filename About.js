export default function About() {
  return (
    <section className="section">

      <h2>About Us</h2>

      <p>
        Keshava Elite Projects is an educational technology organization specializing
        in STEM Robotics Labs for Schools and Center of Excellence (CoE) Programs for Colleges.
      </p>

      <p>
        We bridge the gap between classroom education and industry expectations through
        hands-on learning, innovation, and real-world projects.
      </p>

      {/* WHO WE ARE */}
      <section id="about" className="who-we-are">
        <div className="container">

          <h2>WHO WE ARE</h2>

          <p className="subtitle">
            Bringing world-class robotics and AI education to every student.
          </p>

          <div className="who-content">

            <div className="who-box">
              <h3>About Snapshot</h3>

              <p>
                Keshava Elite Projects is an ed-tech innovation organization
                specializing in STEM Robotics Labs for Schools and Center of
                Excellence (CoE) Programs for Colleges.
              </p>

              <p>
                We design ecosystems where students gain hands-on experience
                in AI, IoT, and Robotics.
              </p>

              <h4>Vision</h4>

              <p>
                To create India’s most impactful Robotics & STEM innovation ecosystem.
              </p>
            </div>

            <div className="who-box">
              <h3>Our Philosophy</h3>

              <ul className="philosophy-list">
                <li>Learning by Building</li>
                <li>Innovation over Memorization</li>
                <li>Projects over Theory</li>
                <li>Industry over Outdated Curriculum</li>
                <li>Access for Every Student</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="quote-section">
        <p className="quote-text">
          “Technology is shaping the future faster than ever. At Keshava Elite Projects,
          our mission is to ensure every student — regardless of background —
          gets the opportunity to learn, build, and innovate with Robotics and AI.”
        </p>

        <p className="quote-author">
          — Rakesh Veerapaneni<br />
          <span>Founder, Keshava Elite Projects</span>
        </p>
      </section>

    </section>
  );
}
