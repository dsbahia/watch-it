import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="../images/TMDB.jpg" alt="TMDB logo" />
        </div>
        <div className="footer-links">
          <a href="https://www.themoviedb.org/about">About TMDB</a>
          <a href="https://developer.themoviedb.org/docs">Getting started</a>
          <a href="https://github.com/dsbahia/watch-it">Developers Github</a>
        </div>
      </div>
      <p className="TMDB-info">Thank you to The Movie Database for the API</p>
    </footer>
  );
}
export default Footer;
