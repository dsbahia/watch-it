import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignInAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import MovieDropDown from "./DropDowns/MovieDropDown";
import TvDropDown from "./DropDowns/TvDropDown";
import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-items">
        <Link className="nav-link" to="/">
          <FontAwesomeIcon icon={faSearch} className="navbar-icon" /> Search
        </Link>

        <Link className="nav-link" to="/register">
          <FontAwesomeIcon icon={faUser} className="navbar-icon" /> Register
        </Link>

        <Link className="nav-link" to="/login">
          <FontAwesomeIcon icon={faSignInAlt} className="navbar-icon" /> Login
        </Link>

        <MovieDropDown />
        <TvDropDown />
      </div>
    </div>
  );
}

export default NavBar;
