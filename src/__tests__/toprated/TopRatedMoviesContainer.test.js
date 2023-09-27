import React from "react";
import { render, screen } from "@testing-library/react";
import TopRatedMoviesContainer from "../../components/TopRated/TopRatedMoviesContainer";

describe("TopRatedMoviesContainer", () => {
  it("should render without errors", () => {
    render(<TopRatedMoviesContainer />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<TopRatedMoviesContainer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a list of top rated movies", async () => {
    render(<TopRatedMoviesContainer />);

    const movieList = await screen.findByTestId("movie-list");

    expect(movieList).toBeInTheDocument();
  });
});