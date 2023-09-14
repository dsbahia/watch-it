import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import UpComing from "./UpComing";
import Trending from "./Trending";
import watchItLogo from "../images/watch-it.png";
import SearchCard from "./SearchCard";
import "../styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState();
  return (
    <div className="App">
      <img className="watch-it-logo" src={watchItLogo} alt="Watch It Logo" />
      <SearchBar setSearchResults={setSearchResults} />
      <SearchCard />
      <NavBar />
      <Routes>
        <Route path="/" element={UpComing} />
        <Route path="trending" element={Trending} />
      </Routes>
    </div>
  );
}

export default App;
