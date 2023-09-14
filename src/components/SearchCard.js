import React from "react";
import "../styles/searchcard.css";

function SearchCard({ title, posterpath, overview }) {
  return (
    <div className="search-card">
      <div className="poster-card">{posterpath}</div>
      <div className="title-card">{title}</div>
      <div className="overview-card">{overview}</div>
    </div>
  );
}

export default SearchCard;
