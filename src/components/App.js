import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import UpComing from "./UpComing";
import Trending from "./Trending";
import watchItLogo from "../images/watch-it.png";
import SearchResultsCard from "./SearchResultsCard";
import "../styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState({});

  return (
    <div className="App">
      <Toaster />

      <Routes>
        <Route path="/" element={UpComing} />
        <Route path="trending" element={Trending} />
      </Routes>
      <img className="watch-it-logo" src={watchItLogo} alt="Watch It Logo" />
      <SearchBar setSearchResults={setSearchResults} />
      <SearchResultsCard results={searchResults.results} />
    </div>
  );
}

export default App;
