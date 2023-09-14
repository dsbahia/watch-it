import React, { useState, useEffect } from "react";
import "../styles/searchresultscard.css";

function SearchResultsCard() {
  const initialState = {
    searchResults: [],
  };

  const [searchResults, setSearchResults] = useState(
    initialState.searchResults,
  );

  useEffect(() => {
    
  }, [])
  return <div>SearchResultsCard</div>;
}

export default SearchResultsCard;
