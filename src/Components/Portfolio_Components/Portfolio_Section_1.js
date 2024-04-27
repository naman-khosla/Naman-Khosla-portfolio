import React from "react";
import "./Portfolio_Section_1.css"; // Make sure the CSS file name matches the import

export default function Portfolio_Section_1() {
  // Component names should be in PascalCase
  return (
    <div className="portfolio-section-1-shell">
      <div className="portfolio-section-1-container-left">
        <div className="portfolio-section-1-image">
          <img
            src="/images/Assets/portfolio_text_image.svg"
            className="text-image"
            alt="Portfolio Introduction"
          />
          <h2>Passion for the Code</h2>
          <p>
            Here, you'll find a selection of projects that I've worked on, which
            showcase my skills and experience in various aspects of software
            development and data analysis. From developing Deep Learning
            applications to data-driven insights, each project reflects my
            commitment to quality and efficiency. Dive in to see the work I've
            done, the problems I've solved, and the value I've created. Enjoy
            browsing through my GitHub repositories, and feel free to reach out
            if you have any questions or would like to discuss potential
            collaborations.
          </p>
        </div>
      </div>
      <div className="portfolio-section-1-container-right"></div>
    </div>
  );
}
