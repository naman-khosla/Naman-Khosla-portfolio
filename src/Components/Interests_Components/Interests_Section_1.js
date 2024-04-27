import React from "react";
import "./Interests_Section_1.css";
import { Link } from "react-router-dom";

const flow = "https://www.instagram.com/flow_mentalhealth/";

export default function Interests_section_1() {
  return (
    <div className="interests_shell">
      <div className="interests_container_left">
        <div className="interest_image">
          <img
            src="/images/Assets/interests_text_image.svg"
            className="text_image"
          />
          <h2>Exploring Passions Beyond the Code</h2>
          <p>
            Hello! This section of my website is dedicated to my personal
            interests and passion projects. One of my core pursuits outside of
            professional work is advocating for mental health awareness and
            support. As the content creator for Counsellor Ananya Maheshwari's
            Instagram account <Link to={flow}>@flow_mentalhealth</Link>, I
            strive to inspire and educate on the importance of mental
            well-being. This platform allows me to merge my creativity with my
            commitment to making a positive impact on others' lives. Through
            engaging, informative content, I aim to foster a community where
            open discussions about mental health are not only encouraged but
            normalized. Here, you'll find a live flow of content from{" "}
            <Link to={flow}>@flow_mentalhealth</Link>, showcasing various
            initiatives, tips, and stories aimed at enhancing mental health
            awareness. Join me in spreading positivity and empowering insights
            as we navigate the complexities of mental well-being together.
          </p>
        </div>
      </div>
      <div className="interests_container_right"></div>
    </div>
  );
}
