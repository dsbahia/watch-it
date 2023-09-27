import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import watchItLogo from "../images/watch-it.png";
import SearchResultsCard from "./SearchResultsCard";
import Footer from "./Footer";
import "../styles/App.css";
import displayTrending from "./trending/Trending";
import { auth } from "./Registration/firebase";
import { AuthProvider } from "./Registration/AuthContext";
import Profile from "./Registration/Profile";
import Register from "./Registration/Register";
import VerifyEmail from "./Registration/VerifyEmail";
import Login from "./Registration/Login";
import PrivateRoute from "./Registration/PrivateRoute";

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
      <img className="watch-it-logo" src={watchItLogo} alt="Watch It Logo" />
      <SearchBar setSearchResults={handleSearchResults} />{" "}
      {showTrending && displayTrending()}
      <SearchResultsCard results={searchResults.results} />
      <Footer />
      <Router>
        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <Routes>
            <PrivateRoute exact path="/" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/verify-email" component={VerifyEmail} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
export default App;
