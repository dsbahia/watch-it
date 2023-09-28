import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-links-item" />

      <Link className="item-upcoming" to="/Register">
        Register
      </Link>

      <Link className="item-upcoming" to="/Login">
        Login
      </Link>

      <Link className="item-upcoming" to="/">
        Movies
      </Link>

      <Link className="item-upcoming" to="/">
        TV Shows
      </Link>
    </div>
  );
}

export default NavBar;
