import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function TvDropDown() {
  const TopRatedHandleClick = () => {};
  const UpcomingHandleClick = () => {};

  return (
    <DropdownButton
      id="tv-dropdown"
      title="Tv Shows"
      drop="down-centered"
      autoClose="inside"
      data-bs-theme="dark"
    >
      <Dropdown.Item onClick={TopRatedHandleClick} href="/top-rated-tv-shows">
        Top Rated
      </Dropdown.Item>
      <Dropdown.Item onClick={UpcomingHandleClick} href="/upcoming-tv-shows">
        Upcoming
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default TvDropDown;
