import React, { Component } from "react";

//Images
import GitLab from "../images/GitLab.png";
import GitHub from "../images/GitHub.png";
import Linkedin from "../images/linkedin.png";
import Instagram from "../images/instagram.png";


class Footer extends Component {
  render() {
    return (
      <footer className="fixed-bottom background">
        <ul className="SocialMedia">
          <li>
            <a
              className="SocialMediaIcons"
              href="https://gitlab.com/CourtneyGosselin"
            >
              <img src={GitLab} alt="GitLab" />
            </a>
          </li>
          <li>
            <a
              className="SocialMediaIcons"
              href="https://github.com/CourtneyGosselin"
            >
              <img src={GitHub} alt="GitHub" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/courtneygosselin/"
              className="SocialMediaIcons"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/courtney.gosselin/"
              className="SocialMediaIcons"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
