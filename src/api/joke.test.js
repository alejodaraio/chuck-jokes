import { apiJoke } from "./joke";

describe("Joke API.", () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetchMock.doMock();
  });

  it("should return empty data.", async () => {
    fetch.mockResolvedValue({ json: () => null });
    const apiResponse = await apiJoke.getRandom();
    expect(apiResponse).toBeNull();
  });

  it("should catch API Error.", async () => {
    const error_message = "API is down";
    fetch.mockImplementationOnce(() => Promise.reject(error_message));

    const apiResponse = await apiJoke.getRandom();
    expect(apiResponse).toBe(error_message);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random"
    );
  });
});
