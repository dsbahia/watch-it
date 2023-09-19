import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import TrendingMovie from "./TrendingMovies";
import "../styles/searchresultscard.css";

function TrendingMovieContainer({ trendingResults }) {
  useEffect(() => {
    if (trendingResults && trendingResults.length === 0) {
      const noResultsMsg = "No Results Found";

      toast.error(noResultsMsg, {
        duration: 5000,
      });
    }
  }, [trendingResults]);

  if (!trendingResults || trendingResults.length === 0) {
    return null;
  }

  const firstTwoResults = trendingResults.slice(0, 2);

  return (
    <div
      className="trending-movie-container"
      data-testid="trending-movie-container"
    >
      {firstTwoResults.map((data) => (
        <div key={data.id} className="item">
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
