import React from "react";
import "./Resume_Section_3.css"; // This should be the path to your CSS file
// Import icons from react-icons or any other icon library you prefer
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

const SkillHexagon = ({ skillName, IconComponent }) => (
  <div className="hexagon-skill">
    <IconComponent className="skill-icon" />
    <p>{skillName}</p>
  </div>
);

const Resume_Section_3 = () => {
  const skills = [
    { name: "C#", Icon: SiCsharp },
    { name: "Python", Icon: SiPython },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "SQL", Icon: SiMicrosoftexcel }, // Assuming you are using Excel icon for SQL
    { name: "Excel", Icon: SiMicrosoftexcel },
    { name: "Google Analytics", Icon: SiGoogleanalytics },
    { name: "FormIT PRO", Icon: SiAdobe }, // Replace with the actual FormIT PRO icon
    { name: "R", Icon: SiR },
    { name: "Adobe Analytics", Icon: SiAdobe },
    { name: "HTML and CSS", Icon: SiHtml5 }, // Assuming you use the HTML5 icon to represent both
    { name: "Tableau", Icon: SiTableau },
    { name: "ReactJS and Native", Icon: SiReact }, // Using React icon as a placeholder
    // Continue adding other skills and their icons
  ];

  return (
    <div className="honeycomb-layout">
      {skills.map((skill, index) => (
        <SkillHexagon
          key={index}
          skillName={skill.name}
          IconComponent={skill.Icon}
        />
      ))}
    </div>
  );
};

export default Resume_Section_3;
