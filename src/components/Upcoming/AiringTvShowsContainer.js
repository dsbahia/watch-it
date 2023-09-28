import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import AiringTvShow from "./AiringTvShows";
import api from "../../api/api";
import "../../styles/topratedmoviescontainer.css";

function AiringTvShowContainer() {
  const [moviesData, setMoviesData] = useState([]);
  const [movieTrailers, setMovieTrailers] = useState({});
  const [maxResults, setMaxResults] = useState(9);

  useEffect(() => {
    async function fetchAiringTvShows() {
      try {
        const data = await api.airingTvShows();
        setMoviesData(data.results);
        const trailers = {};
        await Promise.all(
          data.results.map(async (tv) => {
            const trailerData = await api.tvTrailer(tv.id);

            if (trailerData.results && Array.isArray(trailerData.results)) {
              const trailer = trailerData.results.find(
                (item) => item.type === "Trailer",
              );
              if (trailer) {
                const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
                trailers[tv.id] = trailerUrl;
              }
            } else {
              console.error("Unexpected trailerData structure:", trailerData);
            }
          }),
        );
        setMovieTrailers(trailers);
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
              tvshowTrailer={movieTrailers[data.id]}
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
