import React from "react";
import "./ProfessionSnap.css";
import { GiLaptop } from "react-icons/gi";
import { BiSolidLayer } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

const ProfessionalSnap = () => {
  const professionalAspects = [
    {
      title: "Data Analyst",
      description: "Transforming data into actionable insights.",
      icon: GiLaptop,
    },
    {
      title: "Key Skills",
      description: "Machine Learning, Data Visualization, Statistical Analysis",
      icon: GiSkills,
    },
    {
      title: "Latest Projects",
      description: "Innovative solutions to complex data challenges.",
      icon: BiSolidLayer,
    },
  ];

  return (
    <div className="professional_snap_shell">
      <h className="header">
        AN OVERVIEW OF MY PROFESSION JOURNEY & KEY COMPETENCIES
      </h>
      <div className="professional_card_container">
        {professionalAspects.map((aspect, index) => (
          <div key={index} className="card">
            <aspect.icon className="icons" />
            <h3 className="card-title">{aspect.title}</h3>
            <p className="card-description">{aspect.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSnap;
