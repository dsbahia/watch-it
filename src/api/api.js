import axios from "axios";

async function searchMovies(query) {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          query,
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      },
    );
    console.log(response);
    return response;
  } catch (error) {
    throw new Error("Failed to fetch data from the API", error);
  }
}

export default searchMovies;
