import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import MoreDetails from "../MoreDetails";
import NoImagePlaceholder from "../../images/No-Image-Placeholder.png";
import "../../styles/topratedmovies.css";

function AiringTvShow({ posterpath, title, tvId }) {
  const [isShown, setIsShown] = useState(false);
  const type = "tv";

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
        <img
          className="top-rated-poster-img"
          alt={`${title} Tv Show poster`}
          src={posterCheck()}
        />
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
        {isShown ? <MoreDetails type={type} id={tvId} /> : null}
      </div>
    </div>
  );
}

export default AiringTvShow;
