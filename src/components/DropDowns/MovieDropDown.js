import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function MovieDropDown() {
  const TopRatedHandleClick = () => {};
  const UpcomingHandleClick = () => {};

  return (
    <DropdownButton
      id="movie-dropdown"
      title="Movies"
      drop="down-centered"
      autoClose="inside"
      data-bs-theme="dark"
    >
      <Dropdown.Item onClick={TopRatedHandleClick} href="/top-rated-movies">
        Top Rated
      </Dropdown.Item>
      <Dropdown.Item onClick={UpcomingHandleClick} href="/upcoming-movies">
        Upcoming
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default MovieDropDown;
