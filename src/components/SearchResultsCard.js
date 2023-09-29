import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import SearchCard from "./SearchCard";
import "../styles/searchresultscard.css";

function SearchResultsCard({ results }) {
  useEffect(() => {
    if (results && results.length === 0) {
      const noResultsMsg = "No Results Found";

      toast.error(noResultsMsg, {
        duration: 5000,
      });
    }
  }, [results]);

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="search-results-card" data-testid="search-results-card">
      {results.map((data) => (
        <div key={data.id} className="item">
          <SearchCard
            title={data.original_title}
            posterpath={data.poster_path}
            key={data.id}
          />
        </div>
      ))}
    </div>
  );
}

export default SearchResultsCard;
