import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../components/Registration/Login";

import firebase from "../components/Registration/firebase";

jest.mock("../components/Registration/firebase");

describe("Login Component", () => {
    beforeEach(() => {
        firebase.mockClear();
    });
  it("should render the login form", () => {
    const { getByText, getByPlaceholderText } = render(<Login />);

    // Ensure that the form elements are rendered
    expect(getByText("Log in")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter your password")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByText("Don't have an account?")).toBeInTheDocument();
  });

  it("should show an error message on incorrect login credentials", async () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<Login />);
    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");
    const loginButton = getByRole("button", { name: "Login" });

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "incorrectpassword" } });

    fireEvent.click(loginButton);

    // Wait for error message to appear
    await waitFor(() => {
      expect(
        getByText("Incorrect email or password. Please try again."),
      ).toBeInTheDocument();
    });
  });

  // You can add more tests for other scenarios here
});
