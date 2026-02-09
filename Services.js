export default function Services() {
  return (
    <section id="services" className="services-section">

      <h2 className="section-title">OUR SERVICES</h2>

      <div className="services-container">

        {/* Service 1 */}
        <div className="service-card">
          <div className="icon">🤖</div>
          <h3>STEM Robotics Labs</h3>
          <p>Transforming K-12 classrooms into innovation labs.</p>

          <ul>
            <li>Complete Lab Setup</li>
            <li>Robotics & AI Tools</li>
            <li>Teacher Training</li>
            <li>Creativity & Problem Solving</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <div className="icon">🏛️</div>
          <h3>Center of Excellence</h3>
          <p>Advanced innovation hubs for colleges.</p>

          <ul>
            <li>Robotics & AI Labs</li>
            <li>IoT & Industry 4.0</li>
            <li>Research & Development</li>
            <li>Startup Incubation</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <div className="icon">🚀</div>
          <h3>Student Innovation</h3>
          <p>Beyond the classroom learning events.</p>

          <ul>
            <li>Hackathons & Bootcamps</li>
            <li>Robotics Competitions</li>
            <li>Research Guidance</li>
            <li>Product Development</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
