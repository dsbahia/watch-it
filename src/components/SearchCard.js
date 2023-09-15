import React from "react";
import "../styles/searchcard.css";
import { Link } from "react-router-dom";

function SearchCard({ title, posterpath, overview }) {
  return (
    <div className="search-card">
      <div className="poster-card">
        {" "}
        <img
          alt="Movie poster"
          src={`https://image.tmdb.org/t/p/w92/${posterpath}`}
        />
      </div>
      <div className="title-card">{title}</div>
      <div className="overview-card">{overview}</div>
      <div className="more-details">
        <Link className="more-details-link" to="/">
          More Details
        </Link>
      </div>
    </div>
  );
}

export default SearchCard;
