import React from "react";
import { render, screen } from "@testing-library/react";
import AiringTvShowContainer from "../../components/Upcoming/AiringTvShowsContainer";

describe("AiringTvShowsContainer", () => {
  it("should render without errors", () => {
    render(<AiringTvShowContainer />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<AiringTvShowContainer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a list of top rated movies", async () => {
    render(<AiringTvShowContainer />);

    const movieList = await screen.findByTestId("tv-list");

    expect(movieList).toBeInTheDocument();
  });
});
