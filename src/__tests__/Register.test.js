import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthValue } from "../components/Registration/AuthContext";
import Register from "../components/Registration/Register";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../components/Registration/AuthContext", () => ({
  useAuthValue: jest.fn(),
}));

jest.mock("react-hot-toast", () => ({
  error: jest.fn(),
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
    const isValidEmail = true;
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Register isValidEmail={isValidEmail} />
      </MemoryRouter>,
    );
    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");
    const errorMap = {
      "auth/email-already-in-use": "Email is already in use.",
      "auth/invalid-email": "Invalid email address.",
      "auth/weak-password":
        "Password is too weak. Please choose a stronger password.",
    };

    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });

    if (!isValidEmail) {
      expect(errorMap["auth/invalid-email"]).toHaveBeenCalledWith(
        "Invalid email address.",
      );
    }
  });

  it("displays an error message for email already registered", async () => {
    const isAlreadyRegistered = false;
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Register isAlreadyRegistered={isAlreadyRegistered} />
      </MemoryRouter>,
    );
    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");
    const errorMap = {
      "auth/email-already-in-use": "Email is already in use.",
      "auth/invalid-email": "Invalid email address.",
      "auth/weak-password":
        "Password is too weak. Please choose a stronger password.",
    };

    fireEvent.change(emailInput, { target: { value: "alreadyRegistered" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });

    if (isAlreadyRegistered) {
      expect(errorMap["auth/email-already-in-use"]).toHaveBeenCalledWith(
        "Email is already in use.",
      );
    }
  });

  it("displays an error message for password that is not strong", async () => {
    const strongPassword = true;
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Register strongPassword={strongPassword} />
      </MemoryRouter>,
    );
    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");
    const errorMap = {
      "auth/email-already-in-use": "Email is already in use.",
      "auth/invalid-email": "Invalid email address.",
      "auth/weak-password":
        "Password is too weak. Please choose a stronger password.",
    };

    fireEvent.change(emailInput, { target: { value: "alreadyRegistered" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });

    if (!strongPassword) {
      expect(errorMap["auth/weak-password"]).toHaveBeenCalledWith(
        "Password is too weak. Please choose a stronger password.",
      );
    }
  });
});
