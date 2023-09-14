import React, { useState } from "react";
import searchMovies from "../api/api";
import "../styles/searchbar.css";

function SearchBar({ setSearchResults }) {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults(searchMovies(value));
    console.log(value);
  };

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
          data-testid="search-input"
        />
        <button className="search-button" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
