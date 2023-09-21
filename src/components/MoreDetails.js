import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "../styles/moredetails.css";
import api from "../api/api";

function MoreDetails({ type, id }) {
  const [moviesData, setMoviesData] = useState(false);

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const data = await api.searchMovieById(type, id);
        setMoviesData(data);
      } catch (error) {
        const errorMsg = "An error occurred. Please try again later.";
        toast.error(errorMsg, {
          duration: 5000,
        });
      }
    }
    fetchMovieById();
  }, [type, id]);

  if (moviesData === null) {
    return <div>Loading...</div>;
  }

  const genresList = moviesData.genres?.map((genre) => (
    <div key={genre.id}>{genre.name}</div>
  )); 
  const roundedRating = (Math.round(moviesData.vote_average * 10) /10);

  const lastEpisodeRuntime = moviesData.last_episode_to_air ? `${moviesData.last_episode_to_air.runtime} Minutes` : `${moviesData.runtime} minutes`;
  const budgetCheck = moviesData.budget != null ? `Budget: $ ${moviesData.budget}` : 'Budget information not available';
  const revenueCheck = moviesData.revenue != null ? `Revenue: $ ${moviesData.revenue}` : 'Revenue information not available';
  const releaseDateCheck = moviesData.first_air_date ? `First Episode Release Date: ${moviesData.first_air_date}` : `Release  Date: ${moviesData.release_date}`;

  return (
    <div className="more-details-container">
      <div className="more-details-overview">{moviesData.overview}</div>
      <div className="more-details-item">{budgetCheck}</div>
      <div className="more-details-item">{revenueCheck}</div>
      <div className="more-details-item">
        Genres:
        <div>{genresList}</div>
      </div>
      <div className="more-details-item">{releaseDateCheck}</div>
      <div className="more-details-item">Rating: {roundedRating}/10</div>
      <div className="more-details-item">Runtime: {lastEpisodeRuntime}</div>
    </div>
  );
}

export default MoreDetails;
