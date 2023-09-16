import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchCard from "../components/SearchCard";

describe("SearchCard", () => {
  const title = "guardians of the galaxy";
  const posterpath =
    "https://image.tmdb.org/t/p/w92//r2J02Z2OpNTctfOSN1Ydgii51I3.jpg";
  const overview = "Peter Quill, still reeling from the loss of Gamora";

  const { asFragment, getByText } = render(
    <BrowserRouter>
      <SearchCard title={title} posterpath={posterpath} overview={overview} />,
    </BrowserRouter>,
  );

  it("renders  correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays componenent with props that were provided", () => {
    expect(getByText(title)).toBeInTheDocument();

    expect(getByText(overview)).toBeInTheDocument();

    expect(getByText(posterpath)).toBeInTheDocument();
  });
});
