import React from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import watchItLogo from "../images/watch-it.png";

function App() {
  return (
    <div className="App">
      <img className="watch-it-logo" src={watchItLogo} alt="Watch It Logo" />
      <SearchBar />
    </div>
  );
}

export default App;
