import searchMovies from "../api/api";

describe("searchMovies Function", () => {
  it("should return movie information for a valid query", async () => {
    const query = "Batman";
    const data = await searchMovies(query);
    
    expect(data).not.toBeNull();
    expect(data.results.length).toBeGreaterThan(0);
    expect(data.results[0].title).toBe("Batman");
  });

  it("should return no results for an empty query", async () => {
    const query = "";
    const data = await searchMovies(query);

    expect(data).not.toBeNull();
    expect(data.results).toEqual([]);
  });

  it("should return an error response for an invalid query", async () => {
    const query = "InvalidMovie123";
    const data = await searchMovies(query);

    expect(data.results).toEqual([]);
  });
});
