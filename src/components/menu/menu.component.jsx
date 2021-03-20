import React from "react";
import { Link } from "react-router-dom";

import "./menu.styles.scss";

const Menu = () => (
  <div
    className={`header1`}
    data-aos="custom-slideDown"
    data-aos-duration="900"
  >
    <Link className="logo-container" to="/graphics-project">
      <img
        src={require("../../assets/logo.png")}
        className="logo"
        alt="not here ?"
      />
    </Link>
    <nav className="temp">
      <ul className="menu">
        <li>
          <Link className="options" to="/graphics-project">
            HOME
          </Link>
        </li>
        <li>
          <Link className="options" to="/graphics-project/about">
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Menu;
