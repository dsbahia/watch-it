import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  const { asFragment } = render(<SearchBar />);

  it("renders  correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("updates the value when user types", () => {
    const { getByTestId } = render(<SearchBar />);
    const inputElement = getByTestId("search-input");

    fireEvent.change(inputElement, { target: { value: "test input" } });
    expect(inputElement.value).toBe("test input");
  });
});
