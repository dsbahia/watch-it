import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../images/tmdb-footer-icon.png";

describe("Footer", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct TMDB acknowledgemnt statement", () => {
    const statement = screen.getByText(
      "This product uses the TMDB API but is not endorsed or certified by TMDB",
    );

    expect(statement).toBeInTheDocument();
  });

  it("displays TMDB Logo", async () => {
    const correctLogo = getByText("TMDB logo");

    expect(correctLogo).toBeInTheDocument();
    expect(correctLogo.src).toContain(logo);
  });

  it("renders the github link with the correct route", () => {
    const anchorTag = getByText("GitHub");

    expect(anchorTag).toBeInTheDocument();
    expect(anchorTag).toHaveAttribute(
      "href",
      "https://github.com/dsbahia/watch-it",
    );
  });
});
