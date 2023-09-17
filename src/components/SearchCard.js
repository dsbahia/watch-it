import React from "react";
import "../styles/searchcard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import NoImagePlaceholder from "../images/No-Image-Placeholder.svg.png";

function SearchCard({ title, posterpath, overview }) {
  if (posterpath === null) {
    return (
      <div className="search-card">
        <div className="poster-card">
          {" "}
          <img
            className="poster-img"
            alt={`${title} Movie poster`}
            src={NoImagePlaceholder}
          />
        </div>
        <div className="title-card-">{title}</div>
        <div className="overview-card">{overview}</div>
        <div className="more-details">
          <Link className="more-details-link" to="/">
            More Details
            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="search-card">
      <div className="poster-card">
        {" "}
        <img
          className="poster-img"
          alt={`${title} Movie poster`}
          src={`https://image.tmdb.org/t/p/original/${posterpath}`}
        />
      </div>
      <div className="title-card">{title}</div>
      <div className="overview-card">{overview}</div>
      <div className="more-details">
        <Link className="more-details-link" to="/">
          More Details
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default SearchCard;
