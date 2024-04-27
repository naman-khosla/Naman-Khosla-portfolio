import React, { useState } from "react";
import "./Resume_Section_4.css"; // Make sure to create and import your CSS

const Resume_Section_4 = () => {
  const [isFirstPage, setIsFirstPage] = useState(true);

  const togglePage = () => {
    setIsFirstPage(!isFirstPage);
  };

  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1NfOuXLVTlpgwXXsKEfuKYaJM0qFiIPwu";

  return (
    <div className="resume-section">
      <h1>My Resume</h1>
      <div className="resume_container" onClick={togglePage}>
        {isFirstPage ? (
          <img
            className="resume_page"
            src="images/Assets/resume_pg_1.svg"
            alt="resume page 1"
          />
        ) : (
          <img
            className="resume_page"
            src="images/Assets/resume_pg_2.svg"
            alt="resume page 2"
          />
        )}
      </div>
      <a href={resumeUrl} download="My_Resume.pdf" className="download-button">
        Download Resume
      </a>
    </div>
  );
};

export default Resume_Section_4;
