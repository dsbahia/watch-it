import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as star2 } from "@fortawesome/free-regular-svg-icons";
import "../styles/favourite.css";

function Favourite() {
  const [isFav, setIsFav] = useState(true);

  const toggleIcon = () => {
    setIsFav(!isFav);
  };
  return (
    <button className="fav-btn" type="button" onClick={toggleIcon}>
      <FontAwesomeIcon icon={isFav ? star2 : faStar} />
    </button>
  );
}

export default Favourite;
