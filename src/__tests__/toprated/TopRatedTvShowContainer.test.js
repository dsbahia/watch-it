import React from "react";
import { render, screen } from "@testing-library/react";
import TopRatedTvShowContainer from "../../components/TopRated/TopRatedTvShowContainer";

describe("TopRatedTvShowContainer", () => {
  it("should render without errors", () => {
    render(<TopRatedTvShowContainer />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<TopRatedTvShowContainer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a list of top rated movies", async () => {
    render(<TopRatedTvShowContainer />);

    const movieList = await screen.findByTestId("tv-list");

    expect(movieList).toBeInTheDocument();
  });
});