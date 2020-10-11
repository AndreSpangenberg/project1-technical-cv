import React from "react";
import "./footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub

} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
      <div className='social-container'>
            <h1>Socail Media:</h1>
            <a>
                href="https://www.facebook.com/andre.spangenberg.54"
                className="Facebook social"
            </a>
            <FontAwesomeIcon icon={faFacebook} size= '2x' />
            <a>
                href="https://www.instagram.com/andre_spangenberg/"
                className="Instagram social"
            </a>
            <FontAwesomeIcon icon={faInstagram} size= '2x' />
            <a>
                href="https://www.linkedin.com/feed/"
                className="LinkedIn social"
            </a>
            <FontAwesomeIcon icon={faLinkedin} size= '2x' />
            <a>
                href="https://github.com/AndreSpangenberg/technical-CV"
                className="GitHub social"
            </a>
            <FontAwesomeIcon icon={faGithub} size= '2x' />
        </div>
      <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Andre Spangenberg Technical CV | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;