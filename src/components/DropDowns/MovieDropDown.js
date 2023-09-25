import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function MovieDropDown() {
  return (
    <DropdownButton id="item-movie-dropdown" title="Movies">
      <Dropdown.Item href="/top-rated-movies">Top Rated</Dropdown.Item>
      <Dropdown.Item href="/upcoming-movies">Upcoming</Dropdown.Item>
    </DropdownButton>
  );
}

export default MovieDropDown;
