import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TrendingMovie from "./TrendingMovies";
import api from "../api/api";
import "../styles/trendingmoviescontainer.css";

function TrendingMovieContainer() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await api.trendingMovies();
        setMoviesData(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTrendingMovies();
  }, []);

  if (moviesData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="trending-movie-container"
      data-testid="trending-movie-container"
    >
      <div className="trending-movie-title">Trending Movies</div>
      {moviesData.slice(0, 6).map((data) => (
        <div key={data.id} className="trending-item">
          <TrendingMovie
            title={data.original_title}
            posterpath={data.poster_path}
            key={data.id}
          />
        </div>
      ))}
    </div>
  );
}

export default TrendingMovieContainer;
