import React from "react";
import { MemoryRouter, Link } from "react-router-dom";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";
import "@testing-library/jest-dom/extend-expect";

describe("NavBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a link with the correct className", () => {
    const { container } = render(
      <MemoryRouter>
        <Link to="/" className="item-upcoming">
          Upcoming
        </Link>
      </MemoryRouter>,
    );
    const linkElement = container.querySelector("a");

    expect(linkElement).toHaveClass("item-upcoming");
  });

  it("renders the link with the correct route", () => {
    const { container } = render(
      <MemoryRouter>
        <Link to="/" className="item-upcoming">
          {" "}
          Upcoming{" "}
        </Link>
      </MemoryRouter>,
    );
    const linkElement = container.querySelector("a");

    expect(linkElement).toHaveAttribute("href", "/");
  });
});
