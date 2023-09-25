import axios from "axios";

async function makeRequest(url, params) {
  try {
    const response = await axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
}

async function searchMovies(query) {
  const apiUrl = "https://api.themoviedb.org/3/search/movie";
  const params = {
    query,
    language: "en-GB",
    region: "GB",
  };
  return makeRequest(apiUrl, params);
}

async function trendingMovies() {
  const apiUrl = "https://api.themoviedb.org/3/trending/movie/day";
  const params = {
    language: "en-GB",
  };
  return makeRequest(apiUrl, params);
}

async function trendingTVShows() {
  const apiUrl = "https://api.themoviedb.org/3/trending/tv/day";
  const params = {
    language: "en-GB",
  };
  return makeRequest(apiUrl, params);
}

async function searchMovieById(type, id) {
  const apiUrl = `https://api.themoviedb.org/3/${type}/${id}`;
  return makeRequest(apiUrl);
}

async function topRatedMovies() {
  const apiUrl = "https://api.themoviedb.org/3/movie/top_rated";
  const params = {
    language: "en-GB",
  };
  return makeRequest(apiUrl, params);
}

async function topRatedTvShows() {
  const apiUrl = "https://api.themoviedb.org/3/tv/top_rated";
  const params = {
    language: "en-GB",
  };
  return makeRequest(apiUrl, params);
}

async function upcomingMovies() {
  const apiUrl = "https://api.themoviedb.org/3/movie/upcoming";
  const params = {
    language: "en-GB",
  };
  return makeRequest(apiUrl, params);
}

async function airingTvShows() {
  const apiUrl = "https://api.themoviedb.org/3/tv/on_the_air";
  const params = {
    language: "en-GB",
  };
  return makeRequest(apiUrl, params);
}

export default {
  makeRequest,
  searchMovies,
  trendingMovies,
  trendingTVShows,
  searchMovieById,
  topRatedMovies,
  topRatedTvShows,
  upcomingMovies,
  airingTvShows,
};
