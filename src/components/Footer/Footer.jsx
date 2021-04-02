import React from "react";

import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
  faYoutube,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="nav-items-and-social-links">
        <div className="nav-items">
          <span>contact</span>
          <span>careeers</span>
          <span>stories</span>
          <span>news</span>
        </div>
        <div className="social-links">
          <FontAwesomeIcon className="social-icon" icon={faFacebookSquare} />
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
          <FontAwesomeIcon className="social-icon" icon={faYoutube} />
          <FontAwesomeIcon className="social-icon" icon={faTwitterSquare} />
          <FontAwesomeIcon className="social-icon" icon={faInstagram} />
        </div>
      </div>
      <div className="footer-link-container">
        <div className="footer-links">
          <h6 className="footer-links-heading">startups</h6>
          <h6>accelerators</h6>
          <h6>mentors</h6>
          <h6>get in touch</h6>
          <h6>inside Techstars</h6>
        </div>

        <div className="footer-links">
          <h6 className="footer-links-heading">corporations</h6>
          <h6>partnership</h6>
          <h6>membership</h6>
          <h6>sponsorship</h6>
        </div>

        <div className="footer-links">
          <h6 className="footer-links-heading">communities</h6>
          <h6>startup week</h6>
          <h6>startup weekend</h6>
          <h6>startup digest</h6>
          <h6>ecosystem development</h6>
        </div>

        <div className="footer-links">
          <h6 className="footer-links-heading">investors</h6>
          <h6>portfolio</h6>
        </div>

        <div className="footer-links">
          <h6 className="footer-links-heading">mission</h6>
          <h6>diversity &amp; inclusion</h6>
          <h6>code of conduct</h6>
          <h6>techstars foundation</h6>
        </div>

        <div className="footer-links">
          <h6 className="footer-links-heading">resources</h6>
          <h6>faq</h6>
          <h6>contact</h6>
          <h6>brand guidelines</h6>
        </div>
      </div>
      <span>techstars 2021 | priavacy policy | terms of use</span>
    </div>
  );
};

export default Footer;
