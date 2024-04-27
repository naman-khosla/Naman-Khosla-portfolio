import React from "react";
import "./Portfolio_Section_1.css";
import { Link } from "react-router-dom";

export default function Portfolio_Section_1() {
  return (
    <div className="Portfolio_Section_1_shell">
      <div className="Portfolio_Section_1_container_left">
        <div className="Portfolio_Section_1_image">
          <img
            src="/images/Assets/Portfolio_text_image.svg"
            className="text_image"
          />
          <h2>Passion for the Code</h2>
          <p>
            Hello! This section of my website is dedicated to my personal
            Portfolio_Section_1 and passion projects. One of my core pursuits
            outside of professional work is advocating for mental health
            awareness and support. As the content creator for Counsellor Ananya
            Maheshwari's Instagram accoun
          </p>
        </div>
      </div>
      <div className="Portfolio_Section_1_container_right"></div>
    </div>
  );
}
