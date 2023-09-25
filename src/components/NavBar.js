import React from "react";
import { Link } from "react-router-dom";
import MovieDropDown from "./DropDowns/MovieDropDown";
import TvDropDown from "./DropDowns/TvDropDown";
import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-links-item" />

      <Link className="item-home" to="/">
        Home
      </Link>

      <Link className="item-upcoming" to="/">
        Register
      </Link>

      <Link className="item-upcoming" to="/">
        Login
      </Link>

      <MovieDropDown />
      <TvDropDown />
    </div>
  );
}

export default NavBar;
