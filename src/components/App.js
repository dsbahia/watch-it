import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import UpComing from "./UpComing";
import TrendingMovieContainer from "./TrendingMoviesContainer";
import watchItLogo from "../images/watch-it.png";
import SearchResultsCard from "./SearchResultsCard";
import Footer from "./Footer";
import "../styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState({});
  const [trendingResults, setTrendingResults] = useState({});

  return (
    <div className="App">
      <Toaster />
      <NavBar />
      <img className="watch-it-logo" src={watchItLogo} alt="Watch It Logo" />
      <SearchBar setSearchResults={setSearchResults} />{" "}
      <Routes>
        <Route path="/" element={<UpComing />} />
      </Routes>
      <TrendingMovieContainer trendingResults={trendingResults.results} />
      <SearchResultsCard results={searchResults.results} />
      <Footer />
    </div>
  );
}

export default App;
