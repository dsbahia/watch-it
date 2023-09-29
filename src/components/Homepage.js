import React from "react";
import SearchResultsCard from "./SearchResultsCard";
import SearchBar from "./SearchBar";
import displayTrending from "./trending/Trending";
import WatchItLogo from "./WatchItLogo";

function Homepage({ handleSearchResults, showTrending, searchResults }) {
  return (
    <div>
      <WatchItLogo />
      <SearchBar setSearchResults={handleSearchResults} />{" "}
      {showTrending && displayTrending()}
      <SearchResultsCard results={searchResults.results} />
    </div>
  );
}

export default Homepage;
