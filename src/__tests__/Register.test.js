import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useAuthValue } from "../components/Registration/AuthContext";
import Register from "../components/Registration/Register";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../components/Registration/AuthContext", () => ({
  useAuthValue: jest.fn(),
}));

beforeEach(() => {
  useAuthValue.mockReturnValue({
    currentUser: null,
  });
});
afterEach(() => {
  jest.clearAllMocks();
});

describe("Register component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("handles email and password input", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>,
    );
    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });
  it("displays an error message for invalid email and password", async () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>,
    );
    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");

    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });

    const errorMessage = await waitFor(() =>
      screen.getByText("Invalid email addresss."),
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
