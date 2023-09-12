import React, { useState } from "react";
import "../styles/searchbar.css";

function SearchBar() {
  const [value, setValue] = useState();
  
  return (
    <div className="search-bar">
      <form className="search-form">
        <input 
         className="search-input"
         type="text"
         placeholder="Search"
         onChange={(e) => setValue(e.target.value)} 
        />
        <button className="search-button" type="submit">
           Go!
        </button>
      </form>
    </div>
     
  )
}

export default SearchBar;