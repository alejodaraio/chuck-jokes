import { apiJoke } from './joke'

describe('Joke API.', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.doMock()
  })

  it('should return a value.', async () => {
    const mock = 'This is a fake joke.'
    fetchMock.mockResponseOnce(JSON.stringify({ value: mock }))
    const apiResponse = await apiJoke.getRandom()
    expect(apiResponse).toEqual(mock)
  })

  it('should return empty data.', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(''))
    const apiResponse = await apiJoke.getRandom()
    expect(apiResponse).toEqual('')
  })

  it('should catch API Error.', async () => {
    const error_message = 'API is down'
    fetchMock.mockImplementationOnce(() => Promise.reject(error_message))

    const apiResponse = await apiJoke.getRandom()
    expect(apiResponse).toBe(error_message)
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.chucknorris.io/jokes/random'
    )
  })
})
