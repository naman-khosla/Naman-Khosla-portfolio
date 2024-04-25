import "./Navbar.css";
import { useState, useEffect } from "react";
function NavbarButton({ button_type }) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultImage = `images/navbar_buttons/${button_type}_button.svg`;
  const hoverImage = `images/navbar_buttons/${button_type}_button_hover.svg`;

  return (
    <div
      className={`navbar_button_${button_type}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? hoverImage : defaultImage}
        alt="logo"
        style={{ width: "auto", maxHeight: "80px" }}
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (scrolled) {
    return (
      <div className="navbar_test">
        <img
          className="main_logo_test"
          src="images/navbar_buttons/main_logo.png"
          alt="mainlogo"
        />
        <div className="navbar_buttons_test">
          <NavbarButton button_type="homepage" />
          <NavbarButton button_type="about" />
          <NavbarButton button_type="resume" />
          <NavbarButton button_type="portfolio" />
          <NavbarButton button_type="hobbies" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar_shell">
        <img
          className="main_logo"
          src="images/navbar_buttons/main_logo.png"
          alt="main logo"
        />
        <div className="navbar_buttons">
          <NavbarButton button_type="homepage" />
          <NavbarButton button_type="about" />
          <NavbarButton button_type="resume" />
          <NavbarButton button_type="portfolio" />
          <NavbarButton button_type="hobbies" />
        </div>
      </div>
    );
  }
}
