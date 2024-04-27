import React from "react";
import {
  SiPython,
  SiJavascript,
  SiMicrosoftexcel,
  SiAdobephotoshop,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAdobe,
  SiR,
  SiGoogleanalytics,
  SiTableau,
} from "react-icons/si";
import { BsServer } from "react-icons/bs";

import "./Resume_Section_3.css"; // Make sure you have the correct path to your CSS file

const skills = [
  { name: "C#", Icon: SiCsharp },
  { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "SQL", Icon: BsServer }, // Assuming you are using Excel icon for SQL
  { name: "Excel", Icon: SiMicrosoftexcel },
  { name: "Google Analytics", Icon: SiGoogleanalytics },
  { name: "FormIT PRO", Icon: SiAdobe }, // Replace with the actual FormIT PRO icon
  { name: "R", Icon: SiR },
  { name: "Adobe Analytics", Icon: SiAdobe },
  { name: "HTML and CSS", Icon: SiHtml5 }, // Assuming you use the HTML5 icon to represent both
  { name: "Tableau", Icon: SiTableau },
  { name: "ReactJS and Native", Icon: SiReact }, // Using React icon as a placeholder
];

export default function Resume_Section_3() {
  return (
    <div id="skill_layout">
      <img src="images/Assets/programs_text_image.svg" className="programs" />
      <div className="honeycomb_layout">
        {skills.map((skill, index) => (
          <div className="hexagon_skill" key={index}>
            <div className="skill_container">
              <skill.Icon className="skill_icon" />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
