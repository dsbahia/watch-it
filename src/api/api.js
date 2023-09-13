import axios from "axios";

async function searchMovies(query) {
  try {
    const response = await axios.get(
      `${process.env.WATCH_IT_TMDB_BASE_URL}/search/movie`,
      {
        params: {
          query,
        },
        headers: {
          Authorization: `Bearer ${process.env.WATCH_IT_TMDB_BEARER_TOKEN}`,
        },
      },
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("API request failed:", error);
    throw new Error("Failed to fetch data from the API");
  }
}

export default searchMovies;