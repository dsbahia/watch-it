import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchCard from "../components/SearchCard";

describe("SearchCard", () => {
  const title = "Guardians of the Galaxy";
  const posterpath =
    "https://image.tmdb.org/t/p/w92//r2J02Z2OpNTctfOSN1Ydgii51I3.jpg";
  const overview = "Peter Quill, still reeling from the loss of Gamora";

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SearchCard title={title} posterpath={posterpath} overview={overview} />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays component with provided props", () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <SearchCard title={title} posterpath={posterpath} overview={overview} />
      </MemoryRouter>,
    );

    const posterImage = getByAltText(`${title} Movie poster`);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(overview)).toBeInTheDocument();
    expect(getByAltText(`${title} Movie poster`)).toBeInTheDocument();
    expect(posterImage).toHaveAttribute(
      "src",
      `https://image.tmdb.org/t/p/original/${posterpath}`,
    );
  });
});
