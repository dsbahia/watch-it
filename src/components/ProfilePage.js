import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthValue } from "./Registration/AuthContext";
import { auth } from "./Registration/firebase";

function Profile() {
  const { currentUser } = useAuthValue();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to the "/" route after signing out
    } catch (error) {
      console.error("Sign out error", error);
    }
  };
  return (
    <div className="center">
      <div className="profile">
        <h1>Profile</h1>
        <p>
          <strong>Email: </strong>
          {currentUser?.email}{" "}
        </p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}{" "}
        </p>
        <button type="button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
export default Profile;
