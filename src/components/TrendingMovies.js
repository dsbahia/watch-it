import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/trending.css";
import NoImagePlaceholder from "../images/No-Image-Placeholder.png";

function TrendingMovie({ posterpath, title }) {
  const posterCheck = () => {
    if (posterpath === null) {
      return NoImagePlaceholder;
    }
    return `https://image.tmdb.org/t/p/original/${posterpath}`;
  };
  return (
    <div className="trending">
      <div className="trending-poster">
        {" "}
        <img
          className="trending-poster-img"
          alt={`${title} Movie poster`}
          src={posterCheck()}
        />
      </div>
      <div className="trending-title">{title}</div>
      <div className="more-details">
        <Link className="more-details-link" to="/">
          See More Trending
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default TrendingMovie;
