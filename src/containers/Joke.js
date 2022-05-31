import React, { useEffect } from "react";
import { useJoke } from "../contexts/JokeContext";
import Joke from "../components/Joke";

export default () => {
  const [{ joke }, { getJoke }] = useJoke();

  useEffect(() => {
    getJoke();
  }, []);

  return <Joke value={joke} />;
};
