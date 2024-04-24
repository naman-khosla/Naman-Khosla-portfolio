import "./Introduction.css";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FaFolderTree } from "react-icons/fa6";

export default function Introduction() {
  return (
    <div className="introduction_shell">
      <div className="introduction_left_box">
        <img
          src="images/body/profile_picture.png"
          className="profile_pic"
          alt="Naman Khosla profile pic"
        />
        <img
          src="images/body/name_logo.svg"
          className="name_logo"
          alt="Naman Khosla wordart"
        />
      </div>
      <div className="introduction_right_box">
        <div className="infographic_box_left">
          <MdOutlineAutoGraph className="award_icon" />
          <h5>Experience</h5>
          <p>1.5 years</p>
        </div>
        <div className="infographic_box_right">
          <FaFolderTree className="folder_icon" />
          <h5>Projects</h5>
          <p>10+ Completed Projects</p>
        </div>
        <text className="about_me1">
          With a knack for innovative thinking, I excel in turning abstract
          ideas into practical business solutions. I thrive in team
          environments, using motivational techniques to foster a space where
          ideas flow freely. My relentless drive to lead and innovate keeps me
          ahead of the curve, setting trends rather than following them.
        </text>
      </div>
    </div>
  );
}
