import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function MovieDropDown() {
  return (
    <DropdownButton
      id="movie-dropdown"
      title="Movies"
      drop="down-centered"
      autoClose="inside"
      data-bs-theme="dark"
      variant="secondary"
      class="bg-transparent"
    >
      <Dropdown.Item href="/top-rated-movies">Top Rated</Dropdown.Item>
      <Dropdown.Item href="/upcoming-movies">Upcoming</Dropdown.Item>
    </DropdownButton>
  );
}

export default MovieDropDown;
