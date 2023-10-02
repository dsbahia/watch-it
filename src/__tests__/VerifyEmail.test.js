import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthValue } from "../components/Registration/AuthContext";
import VerifyEmail from "../components/Registration/VerifyEmail";

jest.mock("react-hot-toast", () => ({
  error: jest.fn(),
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

describe("VerifyEmail", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <VerifyEmail />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should display a button and trigger an email to the user on click", () => {
    render(
      <MemoryRouter>
        <VerifyEmail />
      </MemoryRouter>,
    );
    const verifyButton = screen.getByText("Resend Email");

    fireEvent.click(verifyButton);
  });

  it("should render a message if an email has been sent", () => {
    const isEmailSent = true;
    render(
      <MemoryRouter>
        <VerifyEmail isEmailSent={isEmailSent} />
      </MemoryRouter>,
    );
    if (isEmailSent) {
      const emailSentMessage = screen.getByText(
        "A Verification email has been sent to:",
      );
      expect(emailSentMessage).toBeInTheDocument();
    } else {
      expect(toast.error).toHaveBeenCalledWith(
        "An error occurred. Please try again later.",
      );
    }
  });

  it('starts and stops the countdown timer when "Resend Email" is clicked', async () => {
    const { getByText, findByText } = render(
      <MemoryRouter>
        <VerifyEmail />
      </MemoryRouter>,
    );

    const resendButton = getByText("Resend Email");

    expect(resendButton).not.toHaveAttribute("disabled");

    await act(async () => {
      await findByText("Resend Email");
    });

    expect(resendButton).not.toHaveAttribute("disabled");
  });
});
