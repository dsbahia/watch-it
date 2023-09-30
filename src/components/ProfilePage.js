import React from "react";
import { signOut } from "firebase/auth";
import { useAuthValue } from "./Registration/AuthContext";
import { auth } from "./Registration/firebase";

function Profile() {
  const { currentUser } = useAuthValue();
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
        <button type="button" onClick={() => signOut(auth)}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
export default Profile;
