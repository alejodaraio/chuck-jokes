import { render, waitFor, screen } from '@testing-library/react'
import Joke from './Joke';
import { JokeProvider } from "../contexts/JokeContext";

describe('Joke Container test.', () => {

    const chuckApiMock = {
        "id": "D5vpiDM9SIO0cEXkvpYB-A",
        "value": "Chuck Norris perportadly walked into a salon for a pedicure. Nine months later 17 redheaded baby boys were born in local hospitals."
    }

    beforeEach(() => {
        fetch.resetMocks();
        fetchMock.doMock();
    });

    it('should render a loading screen.', async () => {
        // Mock fetch api
        fetch.mockResponseOnce(JSON.stringify(null));

        render(
            <JokeProvider>
                <Joke />
            </JokeProvider>
        );
        
        await waitFor(() => expect(screen.getByText('Loading')).toBeTruthy());
    });

    it('should render a Joke sentence.', async () => {
        // Mock fetch api
        fetch.mockResponseOnce(JSON.stringify(chuckApiMock));

        render(
            <JokeProvider>
                <Joke />
            </JokeProvider>
        );

        await waitFor(() => expect(screen.getByText(chuckApiMock.value)).toBeTruthy());
    });
});