import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import watchItLogo from "../images/watch-it.png";
import SearchBar from "./Search/SearchBar";
import SearchResultsCard from "./Search/SearchResultsCard";
import displayTrending from "./trending/Trending";
import TopRatedMoviesContainer from "./TopRated/TopRatedMoviesContainer";
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
      <Routes>
        <Route path="/top-rated-movies" element={<TopRatedMoviesContainer />} />
        <Route path="/" element={showTrending && displayTrending()} />
      </Routes>
      <SearchResultsCard results={searchResults.results} />
      <Footer />
    </div>
  );
}

export default App;
