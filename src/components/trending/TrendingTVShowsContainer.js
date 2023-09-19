import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TrendingTVShows from "./TrendingTVShows";
import api from "../../api/api";
import "../../styles/trendingtvshowscontainer.css";

function TrendingTVContainer() {
  const [tvData, setTvData] = useState([]);
  const maxResults = 3;
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

  if (tvData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="trending-tv-title">Trending TV Shows In The Last Day</div>
      {tvData.slice(0, maxResults).map((data) => (
        <div key={data.id} className="trending-item">
          <TrendingTVShows
            title={data.original_name}
            posterpath={data.poster_path}
            key={data.id}
          />
        </div>
      ))}
    </div>
  );
}

export default TrendingTVContainer;
