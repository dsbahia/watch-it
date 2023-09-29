import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import MoreDetails from "../MoreDetails";
import NoImagePlaceholder from "../../images/No-Image-Placeholder.png";
import "../../styles/topratedmovies.css";

function UpcomingMovies({ posterpath, title, movieId, movieTrailer }) {
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
    <div className="top-rated">
      <div className="top-rated-poster">
        {" "}
        {movieTrailer ? (
          <a href={movieTrailer} target="_blank" rel="noopener noreferrer">
            <img
              className="top-rated-poster-img"
              alt={`${title} Movie poster`}
              src={posterCheck()}
            />
          </a>
        ) : (
          <img
            className="top-rated-poster-img"
            alt={`${title} Movie poster`}
            src={posterCheck()}
          />
        )}
      </div>
      <div className="top-rated-title">{title}</div>
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

export default UpcomingMovies;