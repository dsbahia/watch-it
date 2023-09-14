import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-links-item" />

      <Link className="item-upcoming" to="/">
        Upcoming
      </Link>

      <Link className="item-trending" to="trending">
        Trending
      </Link>
    </div>
  );
}

export default NavBar;
