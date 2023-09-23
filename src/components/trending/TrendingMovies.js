import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import MoreDetails from "../MoreDetails";
import "../../styles/trending.css";
import NoImagePlaceholder from "../../images/No-Image-Placeholder.png";

function TrendingMovie({ posterpath, title, movieId }) {
  const [isShown, setIsShown] = useState(false);
  const type = "movie";

  const handleClick = () => {
    setIsShown((current) => !current);
  };
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
        <button
          className="more-details-link"
          type="button"
          onClick={handleClick}
        >
          More Details
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        </button>
        {isShown ? <MoreDetails type={type} id={movieId} /> : null}
      </div>
    </div>
  );
}

export default TrendingMovie;
