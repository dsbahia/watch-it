import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthValue } from "../components/Registration/AuthContext";
import Login from "../components/Registration/Login";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-hot-toast", () => ({
  toast: {
    error: jest.fn(),
  },
}));

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

describe("Login component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render without errors", () => {
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

  it("displays an error message for invalid email and password", async () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");
    const submitButton = getByText("Login");

    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        "Incorrect email or password. Please try again.",
      );
    });
  });

  it("displays an error if not not connected to firebase", async () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");
    const submitButton = getByText("Login");

    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        "An error occurred. Please try again later.",
      );
    });
  });
});
