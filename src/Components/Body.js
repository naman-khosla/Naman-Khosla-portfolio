import "./Bodytest.css";
import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";

export default function Body() {
  return (
    <div className="body">
      <img src="images/body/profile_picture.png" className="profile_picture" />
      <div>
        <img src="images/body/name_logo.svg" className="name_logo" />
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>1.5 year</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>10+ Completed Projects</small>
          </article>
        </div>
        <p className="test">
          With a knack for innovative thinking, I excel in turning abstract
          ideas into practical business solutions. I thrive in team
          environments, using motivational techniques to foster a space where
          ideas flow freely. My relentless drive to lead and innovate keeps me
          ahead of the curve, setting trends rather than following them.
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </div>
  );
}
