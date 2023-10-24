import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import designs from "./footer.module.css"



const Footer = () => {
  return (
    <footer id={designs.footer}>
      <div className={designs.cont}>
        <div><h1>Muhammed Thasleem</h1>
        <h4>Full Stack Developer</h4></div>
        <div className={designs.menu}>
          <ul>
          <li> <a href="#firstPage">Home</a></li>
                <li> <a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                </ul>
        </div>
        <div className={designs.links}>
        <a href="https://github.com/muhammedthasleem" className={designs.iconLink}>
          <FontAwesomeIcon icon={faGithub} className={designs.icon} />
        </a>
        <a href="https://linkedin.com/in/muhammed-thasleem" className={designs.iconLink}>
          <FontAwesomeIcon icon={faLinkedin} className={designs.icon} />
        </a>
      </div>
      </div>
      
      <div className={designs.copy}>
        &copy; {new Date().getFullYear()} Muhammed Thasleem. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
