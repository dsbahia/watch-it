import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import UpComing from "./UpComing";
import Trending from "./Trending";
import "../styles/App.css";

import watchItLogo from "../images/watch-it.png";

function App() {
  return (
    <div className="App">
      <img className="watch-it-logo" src={watchItLogo} alt="Watch It Logo" />
      <SearchBar />
      <NavBar />
      <Routes>
        <Route path="/" element={UpComing} />
        <Route path="trending" element={Trending} />
      </Routes>
    </div>
  );
}

export default App;
