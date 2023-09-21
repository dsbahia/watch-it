import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import NavBar from "./NavBar";
import watchItLogo from "../images/watch-it.png";
import SearchBar from "./Search/SearchBar";
import SearchResultsCard from "./Search/SearchResultsCard";
import displayTrending from "./trending/Trending";
import Footer from "./Footer";
import "../styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState({});
  const [showTrending, setShowTrending] = useState(true);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setShowTrending(false);
  };

  useEffect(() => {
    if (searchResults.results && searchResults.results.length === 0) {
      setShowTrending(true);
    }
  }, [searchResults]);
  return (
    <div className="App">
      <Toaster />
      <NavBar />
      <img className="watch-it-logo" src={watchItLogo} alt="Watch It Logo" />
      <SearchBar setSearchResults={handleSearchResults} />{" "}
      {showTrending && displayTrending()}
      <SearchResultsCard results={searchResults.results} />
      <Footer />
    </div>
  );
}

export default App;
