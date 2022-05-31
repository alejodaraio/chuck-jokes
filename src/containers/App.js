import React from "react";
import { ExampleProvider } from "../contexts/ExampleContext";
import { JokeProvider } from "../contexts/JokeContext";
import Example from "./Example";
import Joke from "./Joke";
import UpdateExample from "./UpdateExample";

export default () => {
  return (
    <div>
      <JokeProvider>
        <Joke />
      </JokeProvider>

      <ExampleProvider text={"Default example text"}>
        <Example />
        <UpdateExample />
      </ExampleProvider>
    </div>
  );
};
