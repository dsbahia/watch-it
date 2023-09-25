import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import TopRatedTvShow from "./TopRatedMovies";
import api from "../../api/api";
import "../../styles/topratedmoviescontainer.css";

function TopRatedTvShowContainer() {
  const [moviesData, setMoviesData] = useState([]);
  const [maxResults, setMaxResults] = useState(9);

  useEffect(() => {
    async function fetchTopRatedTvShow() {
      try {
        const data = await api.topRatedTvShows();
        setMoviesData(data.results);
      } catch (error) {
        const errorMsg = "An error occurred. Please try again later.";
        toast.error(errorMsg, {
          duration: 5000,
        });
      }
    }
    fetchTopRatedTvShow();
  }, []);

  const handleShowMore = () => {
    setMaxResults(maxResults + 6);
  };
  return (
    <div className="top-rated-container">
      <div className="top-rated-movie-title">Top Rated Tv Shows</div>
      <div className="top-rated-results">
        {moviesData.slice(0, maxResults).map((data) => (
          <div key={data.id} className="top-rated-item">
            <TopRatedTvShow
              title={data.original_name}
              posterpath={data.poster_path}
              movieId={data.id}
            />
          </div>
        ))}
      </div>{" "}
      {maxResults < moviesData.length && (
        <button
          type="button"
          className="show-more-button"
          onClick={handleShowMore}
        >
          <FontAwesomeIcon
            icon={faCircleChevronDown}
            size="2xl"
            style={{ color: "#393E46" }}
          />
        </button>
      )}
    </div>
  );
}

export default TopRatedTvShowContainer;
