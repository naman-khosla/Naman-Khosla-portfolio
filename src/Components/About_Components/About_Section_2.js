import React from "react";
import "./About_Section_2.css";

export default function About_Section_2() {
  return (
    <div className="about_section_2_shell">
      <div className="about_section_2_heading_container">
        <div className="section_2_heading_container_text">
          <h>EDUCATIONAL BACKGROUND</h>
        </div>
      </div>

      <div className="about_section_2_education_container">
        <div className="education_card_1">
          <img
            src="images/Assets/amity_logo.svg"
            className="logo"
            alt="Amity University logo"
          />
          <h1>Bachelor of Business Administration</h1>
          <p>2018-2021</p>
        </div>
        <div className="education_card_2">
          <img src="images/Assets/uq_logo.svg" className="logo" alt="UQ logo" />
          <h1>Graduate Cert. in Business & Information System</h1>
          <p>2022-2023</p>
        </div>
        <div className="education_card_3">
          <img
            src="images/Assets/qut_logo.svg"
            className="logo"
            alt="QUT logo"
          />
          <h1>Master of Data Analytics</h1>
          <p>2023-2024</p>
        </div>
      </div>

      <div className="about_section_2_description_container">
        <div className="image_container">
          <img
            src="images/Assets/grad.svg"
            className="edu_icon"
            alt="education graphic"
          />
        </div>
        <div className="text_container">
          <p>
            My professional and academic pursuits are underpinned by a
            philosophy that blends perseverance with a passion for excellence.
            This philosophy has not only shaped my career but has also guided me
            through various life challenges, helping me to achieve a balanced
            and fulfilling life. My commitment to this balanced approach is
            reflected in my work, where I apply my skills in Python, SQL, and
            machine learning to transform raw data into meaningful, actionable
            insights.
          </p>
          <br></br>
          <p>
            Beyond the numbers and algorithms, I am a storyteller at heart,
            fascinated by the narratives data can reveal about human behavior,
            market trends, and technological advancements. My projects, ranging
            from AI-powered classifiers for plant identification to predictive
            models for healthcare, showcase my ability to navigate and elucidate
            the intricate dance of data.
          </p>
        </div>
      </div>
    </div>
  );
}
