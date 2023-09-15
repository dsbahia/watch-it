import React from "react";
import SearchCard from "./SearchCard";
import "../styles/searchresultscard.css";

function SearchResultsCard({ results }) {
  if (!results || results.length === 0) {
    return <p>No Results</p>;
  }

  return (
    <div className="search-results-card">
      {results.map((data) => (
        <div key={data.id} className="item">
          <SearchCard
            title={data.original_title}
            posterpath={data.poster_path}
            overview={data.overview}
            key={data.id}
          />
        </div>
      ))}
    </div>
  );
}

export default SearchResultsCard;
