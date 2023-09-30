import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useAuthValue } from "../components/Registration/AuthContext";
import Login from "../components/Registration/Login";

jest.mock("../components/Registration/AuthContext", () => ({
  useAuthValue: jest.fn(),
}));

describe("Login component", () => {
  it("matches the snapshot", () => {
    useAuthValue.mockReturnValue({
      currentUser: null,
    });
    const { asFragment } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render without errors", () => {
    useAuthValue.mockReturnValue({
      currentUser: null,
    });

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");
    const loginButton = getByText("Login");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("handles email and password input", () => {
    useAuthValue.mockReturnValue({
      currentUser: null,
    });
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });
});
