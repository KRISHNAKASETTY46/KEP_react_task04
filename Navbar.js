import { Link } from "react-router-dom";
import logo from "../assets/kep_logo.png";

export default function Navbar() {

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>KESHAVA ELITE PROJECTS</span>
      </div>

      <nav>
        <a href="#home">Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#impact">Impact</a>
<a href="#contact">Contact</a>

      </nav>
    </header>
  );
}
