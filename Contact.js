export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <h2 className="contact-title">CONTACT US</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Get in Touch</h3>

          <p>
            Whether you are a school looking for a lab, a college needing a CoE,
            or a student wanting to learn, we are here to help.
          </p>

          <div className="contact-item">
            <strong>📍 Location</strong>
            <p>Andhra Pradesh, India</p>
          </div>

          <div className="contact-item">
            <strong>📧 Email</strong>
            <p>info@keshavaeliteprojects.com</p>
          </div>

          <div className="contact-item">
            <strong>🌐 Website</strong>
            <p>www.keshavaeliteprojects.com</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h3>Send a Message</h3>

          <form onSubmit={(e) => e.preventDefault()}>

            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <input type="text" placeholder="Phone Number" />

            <textarea placeholder="How can we help you?" required />

            <button type="submit">Send Message</button>

          </form>
        </div>

      </div>

    </section>
  );
}
