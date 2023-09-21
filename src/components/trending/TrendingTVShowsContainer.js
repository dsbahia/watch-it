import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import TrendingTVShows from "./TrendingTVShows";
import api from "../../api/api";
import "../../styles/trendingtvshowscontainer.css";

function TrendingTVShowsContainer() {
  const [tvData, setTvData] = useState([]);
  const [maxResults, setMaxResults] = useState(3);

  useEffect(() => {
    async function fetchTrendingTVShows() {
      try {
        const data = await api.trendingTVShows();
        setTvData(data.results);
      } catch (error) {
        const errorMsg = "An error occurred. Please try again later.";
        toast.error(errorMsg, {
          duration: 5000,
        });
      }
    }
    fetchTrendingTVShows();
  }, []);

  const handleShowMore = () => {
    setMaxResults(maxResults + 3);
  };

  return (
    <div>
      <div className="trending-tv-title">Trending TV Shows In The Last Day</div>
      {tvData.slice(0, maxResults).map((data) => (
        <div key={data.id} className="trending-item">
          <TrendingTVShows
            title={data.original_name}
            posterpath={data.poster_path}
            tvId={data.id}
          />
        </div>
      ))}
      {maxResults < tvData.length && ( // Display "Show More" button if there are more items
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

export default TrendingTVShowsContainer;
