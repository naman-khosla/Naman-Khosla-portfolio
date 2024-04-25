import "./Introduction_1.css";
import { Link } from "react-router-dom";

export default function Introduction_1() {
  return (
    <div className="intro_shell">
      <div className="intro_container">
        <div className="intro_body">
          <h className="naman">I'm Naman Khosla !</h>
          <Link to="/about_me">
            <img
              className="body_icon1"
              src="images/Assets/3.svg"
              alt="icon about"
            />
          </Link>
          <p className="intro_text">
            With a knack for innovative thinking, I excel in turning abstract
            ideas into practical business solutions. I thrive in team
            environments, using motivational techniques to foster a space where
            ideas flow freely. My relentless drive to lead and innovate keeps me
            ahead of the curve, setting trends rather than following them.
          </p>
        </div>
        <img
          src="images/body/profile_pic_1.svg"
          className="profile_pic_1"
          alt="naman khosla profile"
        />
      </div>
      <img className="body_icon2" src="images/Assets/4.svg" alt="icon 1" />
      <a href="/resume">
        <img
          className="body_icon3"
          src="images/Assets/5.svg"
          alt="icon resume"
        />
      </a>
    </div>
  );
}
