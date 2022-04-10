import React from "react";

import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import circle from "../../assets/images/circle.svg";
import dots from "../../assets/images/dots.svg";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV shows</a>
            </li>
            <li>
              <a href="#">Animations</a>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          <div className="header__action">
            <img src={search} />
          </div>
          <div className="header__action">
            <img src={circle} />
          </div>
          <div className="header__action">
            <img src={dots} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
