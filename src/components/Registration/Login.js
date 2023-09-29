import { React, useState } from "react";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthValue } from "./AuthContext";
import "../../styles/forms.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        } else {
          navigate("/");
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Log in</h1>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={login} name="login_form">
          <input
            type="email"
            value={email}
            required
            placeholder="Enter your email"
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

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <span>
          Don&apos;t have an account?
          <Link to="/register">Create one here</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
