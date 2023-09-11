import React, { useState } from 'react';
import '../styles/searchbar.css';

const SearchBar = () => {
  const [value, setValue] = useState();
  
  return (
    <div className='search-bar'>
      <form className='search-form'>
        <input 
         className='search-input'
         type='text'
         onChange={(e) => setValue(e.target.value)} 
        />
        <button className='search-btn' type='submit'>
           Go!
        </button>
      </form>
    </div>
     
  )
}

export default SearchBar;