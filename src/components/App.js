import React from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import watchItLogo from "../images/watch-it.png";
import SearchCard from "./SearchCard";
import results from "../data/MovieData.json";

function App() {
  const { original_title, poster_path, overview } = results.results[0];
  return (
    <div className="App">
      <img className="watch-it-logo" src={watchItLogo} alt="Watch It Logo" />
      <SearchBar />
      <SearchCard
        title={original_title}
        posterpath={poster_path}
        overview={overview}
      />
    </div>
  );
}

export default App;
