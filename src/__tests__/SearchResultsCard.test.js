import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchResultsCard from "../components/SearchResultsCard";

jest.mock("react-hot-toast", () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe("SearchResultsCard", () => {
  const results = [
    {
      id: 1,
      original_title: "The Hunger Games",
      poster_path:
        "https://image.tmdb.org/t/p/original//4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
      overview:
        "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
    },

    {
      id: 2,
      original_title: "Star Wars",
      poster_path:
        "https://image.tmdb.org/t/p/original//6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      overview:
        "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire.",
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SearchResultsCard results={results} />
      </MemoryRouter>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("renders SearchResultsCard with results", () => {
    render(
      <MemoryRouter>
        <SearchResultsCard results={results} />
      </MemoryRouter>,
    );

    results.forEach((data) => {
      expect(screen.getByText(data.original_title)).toBeInTheDocument();
      expect(screen.getByText(data.overview)).toBeInTheDocument();
      expect(
        screen.getByAltText(`${data.original_title} Movie poster`),
      ).toBeInTheDocument();
    });
  });

  it("renders nothing if no results", () => {
    render(
      <MemoryRouter>
        <SearchResultsCard results={[]} />
      </MemoryRouter>,
    );

    expect(screen.queryByTestId("search-results-card")).toBeNull();
  });
});
