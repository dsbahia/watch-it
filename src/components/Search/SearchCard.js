import React, { useState } from "react";
import "../../styles/searchcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import MoreDetails from "../MoreDetails";
import NoImagePlaceholder from "../../images/No-Image-Placeholder.png";

function SearchCard({ title, posterpath, movieId }) {
  const [isShown, setIsShown] = useState(false);
  const movie = "movie";

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
    <div className="search-card">
      <div className="poster-card">
        {" "}
        <img
          className="poster-img"
          alt={`${title} Movie poster`}
          src={posterCheck()}
        />
      </div>
      <div className="title-card">{title}</div>
      <div className="more-details">
        <button
          className="more-details-link"
          type="button"
          onClick={handleClick}
        >
          More Details
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        </button>
        {isShown ? <MoreDetails type={movie} id={movieId} /> : null}
      </div>
    </div>
  );
}

export default SearchCard;
