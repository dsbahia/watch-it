import React from "react";
import { render, screen } from "@testing-library/react";
import UpcomingMoviesContainer from "../../components/Upcoming/UpcomingMoviesContainer";

describe("UpcomingMoviesContainer", () => {
  it("should render without errors", () => {
    render(<UpcomingMoviesContainer />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<UpcomingMoviesContainer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a list of upcoming movies", async () => {
    render(<UpcomingMoviesContainer />);

    const movieList = await screen.findByTestId("movie-list");

    expect(movieList).toBeInTheDocument();
  });
});
