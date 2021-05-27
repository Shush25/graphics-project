import React from "react";
import { Link } from "react-router-dom";

import "./menu.styles.scss";

const Menu = () => (
  <div
    className={`header1`}
    data-aos="custom-slideDown"
    data-aos-duration="900"
  >
    <Link className="logo-container" to="/">
      <img
        src={require("../../assets/logo.png")}
        className="logo"
        alt="not here ?"
      />
    </Link>
    <nav className="temp">
      <ul className="menu">
        <li>
          <Link className="options" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="options" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Menu;
