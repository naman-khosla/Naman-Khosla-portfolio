import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";

function NavbarButton({ button_type, setMenuOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const defaultImage = `images/navbar_buttons/${button_type}_button.svg`;
  const hoverImage = `images/navbar_buttons/${button_type}_button_hover.svg`;
  const linkPath = button_type === "homepage" ? "/" : `/${button_type}`;

  return (
    <Link
      to={linkPath}
      className={`navbar_button_${button_type}`}
      onClick={() => setMenuOpen(false)}
    >
      <img
        src={isHovered ? hoverImage : defaultImage}
        alt={button_type}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: "auto", maxHeight: "80px" }}
      />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navbarClass = scrolled ? "navbar_test" : "navbar_shell";

  return (
    <div className={navbarClass}>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img
          className="main_logo"
          src="images/navbar_buttons/main_logo.png"
          alt="main logo"
        />
      </Link>
      <div
        className={menuOpen ? "navbar_buttons_open" : "navbar_buttons_close"}
      >
        <NavbarButton button_type="homepage" setMenuOpen={setMenuOpen} />
        <NavbarButton button_type="about" setMenuOpen={setMenuOpen} />
        <NavbarButton button_type="resume" setMenuOpen={setMenuOpen} />
        <NavbarButton button_type="portfolio" setMenuOpen={setMenuOpen} />
        <NavbarButton button_type="Interests" setMenuOpen={setMenuOpen} />
      </div>
      <button className="hambutton" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoMdCloseCircle /> : <GiHamburgerMenu />}
      </button>
    </div>
  );
}
