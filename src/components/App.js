import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/App.css";
import displayTrending from "./trending/Trending";
import { auth } from "./Registration/firebase";
import { AuthProvider } from "./Registration/AuthContext";
import Register from "./Registration/Register";
import VerifyEmail from "./Registration/VerifyEmail";
import Login from "./Registration/Login";
import Homepage from "./Homepage";

function App() {
  const [searchResults, setSearchResults] = useState({});
  const [showTrending, setShowTrending] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setShowTrending(false);
  };

  useEffect(() => {
    if (searchResults.results && searchResults.results.length === 0) {
      setShowTrending(true);
    }
  }, [searchResults]);
  return (
    <div className="App">
      <Toaster />
      <NavBar />
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Homepage
                handleSearchResults={handleSearchResults}
                showTrending={showTrending}
                searchResults={searchResults}
              />
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}
export default App;
