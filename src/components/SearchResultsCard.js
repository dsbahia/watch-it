import React from "react";
import SearchCard from "./SearchCard";
import "../styles/searchresultscard.css";

function SearchResultsCard({ results }) {
  if (!results || results.length === 0) {
    return <p>No Results</p>;
  }
  console.log(results);
  return (
    <div className="search-results-card">
      {results.map((data) => (
        <SearchCard
          title={data.original_title}
          posterpath={data.poster_path}
          overview={data.overview}
          key={data.id}
        />
      ))}
    </div>
  );
}

export default SearchResultsCard;
