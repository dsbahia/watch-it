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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDAyNGMwMjk0ZGRjM2Q4MzE4OWI5NmRiNWE4OTIxNCIsInN1YiI6IjY0ZjhmNTA4NGNjYzUwMTg2NWIyNGQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y4Bn1fM0Hu-Ux06lSwVeVRNIcSmyo2ylr20GC16beBs",
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
