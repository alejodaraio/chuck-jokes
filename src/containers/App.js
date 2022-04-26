import React from 'react';
import { JokeProvider } from "../contexts/JokeContext";
import Joke from "./Joke";

export default () => {
    return (
        <div>
            <JokeProvider>
                <Joke />
            </JokeProvider>
        </div>
    )
}