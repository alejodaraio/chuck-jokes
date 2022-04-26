import React, { createContext, useContext, useState } from "react";

const JokeContext = createContext(undefined);

const JokeProvider = ({ children }) => {
    const [isFetching, setIsFetching] = useState(false);
    const [joke, setJoke] = useState(null);

    const getJoke = async () => {
        setIsFetching(true);
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await response.json();

        if (data) {
            setJoke(data.value);
            setIsFetching(false);
        }
    }

    const state = [
        { isFetching, joke },
        { getJoke },
    ];

    return (
        <JokeContext.Provider value={state}>
            {children}
        </JokeContext.Provider>
    )
}

const useJoke = () => {
    const context = useContext(JokeContext);
    if (context === undefined) {
        throw new Error('useJoke can only be used inside JokeContext');
    }
    return context;
}

export {
    JokeProvider,
    useJoke
}