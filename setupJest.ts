import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
// changes default behavior of fetchMock to use the real 'fetch' implementation and not mock responses
fetchMock.dontMock();
