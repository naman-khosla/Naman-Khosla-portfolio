import React from "react";
import "./About_Section_1.css"; // Make sure to create an About.css file for styling

export default function About_Section_1() {
  return (
    <div className="about_shell">
      <div className="about_container_left">
        <div className="about_heading_image">
          <img
            src="./images/about_me/about_text_image.svg"
            alt="About"
            className="about-header-image"
          />
        </div>
        <div className="about_text">
          <p>
            Hello, I'm Naman Khosla, a dedicated Data Analyst deeply engaged in
            uncovering insights from complex datasets to drive strategic
            business decisions and innovations. I am a perpetual learner with
            academic ties to prestigious institutions like the University of
            Queensland and Queensland University of Technology, where my journey
            into the realm of data analytics and business intelligence has been
            both rigorous and rewarding.
          </p>
        </div>
      </div>
      <div className="about_container_right">
        {/* <div className="about-image">
          <img
            src="./images/about_me/about_me_pic.svg"
            alt="Naman Khosla"
            className="about_picture"
          />
        </div> */}
      </div>
    </div>
  );
}
