import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { apiJoke } from "../api/joke";

const JokeContext = createContext(undefined);

const JokeProvider = ({ children }) => {
  const [joke, setJoke] = useState(null);

  const getJoke = async () => {
    const data = await apiJoke.getRandom();
    if (data) {
      setJoke(data);
    }
  };

  const state = [{ joke }, { getJoke }];

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
