import React from "react";
import Container from "./style";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <div className="navbar">
        <p className="nav__logo">Best</p>
        <ul className="nav__list">
          <li className="nav__item">Home</li>
          <Link to="/courses">
            <li className="nav__item">Courses</li>
          </Link>
          <li className="nav__item"> Webinar</li>
          <Link to="/price">
            <li className="nav__item">Pricing</li>
          </Link>
          <li className="nav__item">
            <select id="languages">
              <option value="Eng">Eng</option>
              <option value="Rus">Rus</option>
              <option value="Uzb">Uzb </option>
            </select>
          </li>
          <li className="nav__item-btn">
            <Link to="/login">
              <button className="nav__btn">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Navbar;
