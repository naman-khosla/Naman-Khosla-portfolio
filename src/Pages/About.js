import React from "react";
import "./About.css"; // Make sure to create an About.css file for styling
import About_Section_1 from "../Components/About_Section_1.js";
import About_Section_2 from "../Components/About_Section_2.js";

function About() {
  return (
    <div className="About_Page">
      <About_Section_1 />
      <About_Section_2 />
    </div>
  );
}

export default About;
