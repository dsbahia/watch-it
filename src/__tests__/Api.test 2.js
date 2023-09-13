import searchMovies from "../api/api";

describe("searchMovies Function", () => {
  it("should return a response with status code 200 for a valid query", async () => {
    const response = await searchMovies();
    expect(response.status).toBe(200);
  });

  it("should return a response with total_results equal to 0 for no query", async () => {
    const response = await searchMovies();
    expect(response.status).toBe(200);
    expect(response.data.total_results).toBe(0);
  });

  it("should return Batman-related movie information for a 'Batman' query", async () => {
    const query = "Batman";
    const response = await searchMovies(query);
    expect(response.status).toBe(200);

    const movieInfo = response.data.results[0];
    expect(movieInfo.poster_path).toBe("/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg");
    expect(movieInfo.release_date).toBe("1989-06-21");
  });
});
