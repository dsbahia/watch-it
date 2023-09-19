import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TrendingMovie from "./TrendingMovies";
import api from "../../api/api";
import "../../styles/trendingmoviescontainer.css";

function TrendingMovieContainer() {
  const [moviesData, setMoviesData] = useState([]);
  const maxResults = 3;
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await api.trendingMovies();
        setMoviesData(data.results);
      } catch (error) {
        const errorMsg = "An error occurred. Please try again later.";
        toast.error(errorMsg, {
          duration: 5000,
        });
      }
    }
    fetchTrendingMovies();
  }, []);

  if (moviesData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="trending-movie-title">
        Trending Movies In The Last Day
      </div>
      {moviesData.slice(0, maxResults).map((data) => (
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
