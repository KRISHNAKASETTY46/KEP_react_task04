import About from "./About";
import Services from "./Services";
import Impact from "./Impact";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <div id="home"></div>

      {/* HERO */}
      <section className="hero">
        <h1>Building India’s Next Generation of Engineers & Innovators</h1>
        <p>Empowering students through Robotics, AI & STEM Excellence.</p>
      </section>

      <About />
      <Services />
      <Impact />
      <Contact />
    </>
  );
}
