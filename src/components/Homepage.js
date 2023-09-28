import React from "react";
import watchItLogo from "../images/watch-it.png";
import SearchResultsCard from "./SearchResultsCard";
import SearchBar from "./SearchBar";
import displayTrending from "./trending/Trending";

function Homepage({ handleSearchResults, showTrending, searchResults }) {
  return (
    <div>
      <img className="watch-it-logo" src={watchItLogo} alt="Watch It Logo" />
      <SearchBar setSearchResults={handleSearchResults} />{" "}
      {showTrending && displayTrending()}
      <SearchResultsCard results={searchResults.results} />
    </div>
  );
}

export default Homepage;
