import React, { useEffect } from "react";
import { useJoke } from "../contexts/JokeContext";
import Joke from "../components/Joke";

export default () => {
  const [{ isFetching, joke }, { getJoke }] = useJoke();

  useEffect(() => {
    getJoke();
  }, []);

  return isFetching ? <div>Loading</div> : <Joke value={joke} />;
};
