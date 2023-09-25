import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function TvDropDown() {
  return (
    <DropdownButton id="item-tv-dropdown" title="Tv Shows">
      <Dropdown.Item href="/top-rated-tv-shows">Top Rated</Dropdown.Item>
      <Dropdown.Item href="/upcoming-tv-shows">Upcoming</Dropdown.Item>
    </DropdownButton>
  );
}

export default TvDropDown;
