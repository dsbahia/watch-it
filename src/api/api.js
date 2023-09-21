import axios from "axios";

async function searchMovies(query) {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie?language=en-GB&region=GB",
      {
        params: {
          query,
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return null;
  }
}

async function trendingMovies() {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day",
      {
        params: {
          language: "en-GB",
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return null;
  }
}

async function trendingTVShows() {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day",
      {
        params: {
          language: "en-GB",
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return null;
  }
}

async function searchMovieById(type, id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return null;
  }
}

export default {
  searchMovies,
  trendingMovies,
  trendingTVShows,
  searchMovieById,
};
