import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "./firebase";
import { useAuthValue } from "./AuthContext";
import "../../styles/forms.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();

  const navigate = useNavigate();

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords do not match");
      }
    }
    return isValid;
  };

  const register = async (e) => {
    e.preventDefault();
    setError("");

    if (validatePassword()) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(auth.currentUser);
        setTimeActive(true);
        navigate("/verify-email");
      } catch (err) {
        setError("");

        const errorMap = {
          "auth/email-already-in-use": "Email is already in use.",
          "auth/invalid-email": "Invalid email address.",
          "auth/weak-password":
            "Password is too weak. Please choose a stronger password.",
        };

        const errorMessage =
          errorMap[err.code] || "An error occurred. Please try again later.";
        toast.error(errorMessage);
      }

      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Register</h1>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={register} name="registration_form">
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />

          <input
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />

          <input
            type="password"
            value={confirmPassword}
            required
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="auth-input"
          />

          <button type="submit" className="auth-button">
            Register
          </button>
        </form>
        <span>
          Already have an account?
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
