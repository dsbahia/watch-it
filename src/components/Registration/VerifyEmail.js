import { useState, useEffect } from "react";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "./AuthContext";
import "../../styles/verifyEmail.css";

function VerifyEmail() {
  const { currentUser } = useAuthValue();
  const [time, setTime] = useState([]);
  const [endTime, setEndTime] = useState([]);
  const { timeActive, setTimeActive } = useAuthValue();
  const navigate = useNavigate();

  const startWork = (e) => {
    e.preventDefault();
    const StartTime = {
      thisTime: new Date().toLocaleString(),
    };
    setTime(StartTime);
  };

  const finishWork = (e) => {
    e.preventDefault();
    const StopTime = {
      endTime: new Date().toLocaleString(),
    };
    setEndTime(StopTime);
  };
  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setTimeActive(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="center">
      <div className="verify-email">
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong>
          <br />
          <span>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <button
          type="button"
          onClick={resendEmailVerification}
          disabled={endTime.endTime}
        >
          Resend Email
          {timeActive && time}
        </button>
      </div>
    </div>
  );
}

export default VerifyEmail;
