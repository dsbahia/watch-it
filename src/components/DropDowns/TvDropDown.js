import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function TvDropDown() {
  return (
    <DropdownButton
      id="tv-dropdown"
      title="Tv Shows"
      drop="down-centered"
      autoClose="inside"
      variant="secondary"
      data-bs-theme="dark"
      class="bg-transparent"
    >
      <Dropdown.Item href="/top-rated-tv-shows">Top Rated</Dropdown.Item>
      <Dropdown.Item href="/airing-tv-shows">Airing</Dropdown.Item>
    </DropdownButton>
  );
}

export default TvDropDown;
