import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Naman Khosla
      </a>
      <ul className="permalinks">
        <li>
          <a href="/homepage">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Resume</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Skills</a>
        </li>
        <li>
          <a href="#contact">Hobbies</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/qut-data-analyst/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/naman-khosla"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; N1150721 Naman Khosla 2024. All rights reserved. QUT IFN666
        </small>
      </div>
    </footer>
  );
};

export default Footer;
