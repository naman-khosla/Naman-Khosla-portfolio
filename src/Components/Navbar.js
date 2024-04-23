import "./Navbar.css";
import { useState } from "react";

function NavbarButton({ button_type }) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultImage = `images/navbar_buttons/${button_type}_button.svg`;
  const hoverImage = `images/navbar_buttons/${button_type}_button_hover.svg`;

  return (
    <div
      className="nav_button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? hoverImage : defaultImage}
        alt="logo"
        style={{ width: "auto", height: "80px" }}
      />
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="main_logo" src="images/navbar_buttons/main_logo.png" />
      <NavbarButton button_type="homepage" />
      <NavbarButton button_type="about" />
      <NavbarButton button_type="resume" />
      <NavbarButton button_type="portfolio" />
      <NavbarButton button_type="hobbies" />
    </div>
  );
}
