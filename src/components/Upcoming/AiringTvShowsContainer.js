import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import AiringTvShow from "./AiringTvShows";
import api from "../../api/api";
import "../../styles/topratedmoviescontainer.css";

function AiringTvShowContainer() {
  const [moviesData, setMoviesData] = useState([]);
  const [maxResults, setMaxResults] = useState(9);

  useEffect(() => {
    async function fetchAiringTvShows() {
      const currentDate = new Date();
      const futureDate = new Date();

      futureDate.setDate(currentDate.getDate() + 1);

      const formattedCurrentDate = currentDate.toISOString().split("T")[0];
      const formattedFutureDate = futureDate.toISOString().split("T")[0];

      const apiUrl = "https://api.themoviedb.org/3/tv/on_the_air";
      const params = new URLSearchParams({
        "air_date.gte": formattedCurrentDate,
        "air_date.lte": formattedFutureDate,
        include_adult: "false",
        include_null_first_air_dates: "false",
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
        with_origin_country: "GB",
      });
      try {
        const data = await api.makeRequest(apiUrl, params);
        setMoviesData(data.results);
      } catch (error) {
        const errorMsg = "An error occurred. Please try again later.";
        toast.error(errorMsg, {
          duration: 5000,
        });
      }
    }
    fetchAiringTvShows();
  }, []);

  const handleShowMore = () => {
    setMaxResults(maxResults + 6);
  };
  return (
    <div className="top-rated-container">
      <div className="top-rated-movie-title">Airing Tv Shows</div>
      <div className="top-rated-results">
        {moviesData.slice(0, maxResults).map((data) => (
          <div key={data.id} className="top-rated-item">
            <AiringTvShow
              title={data.original_name}
              posterpath={data.poster_path}
              tvId={data.id}
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

export default AiringTvShowContainer;
