import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { apiJoke } from "../api/joke";

const JokeContext = createContext(undefined);

const JokeProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [joke, setJoke] = useState(null);

  const getJoke = async () => {
    setIsFetching(true);
    const data = await apiJoke.getRandom();

    if (data) {
      setJoke(data);
      setIsFetching(false);
    }
  };

  const state = [{ isFetching, joke }, { getJoke }];

  return <JokeContext.Provider value={state}>{children}</JokeContext.Provider>;
};

const useJoke = () => {
  const context = useContext(JokeContext);
  if (context === undefined) {
    throw new Error("useJoke can only be used inside JokeContext");
  }
  return context;
};

JokeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { JokeProvider, useJoke };
