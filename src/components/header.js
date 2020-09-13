import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../images/Logo3.0.png";


class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar fixed-top navbar-dark background">
          <a className="navbar-brand" href="http://gosselin.io">
           <img src={Logo} alt="Logo" className="Logo" />
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
