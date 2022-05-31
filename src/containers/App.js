import React, { Suspense } from "react";
import { ExampleProvider } from "../contexts/ExampleContext";
import { JokeProvider } from "../contexts/JokeContext";
import Example from "./Example";
import UpdateExample from "./UpdateExample";

const Joke = React.lazy(() => import("./Joke"));

export default () => {
  return (
    <div>
      <Suspense fallback={<p>Suspense loading components....</p>}>
        <JokeProvider>
          <Joke />
        </JokeProvider>
      </Suspense>

      <ExampleProvider text={"Default example text"}>
        <Example />
        <UpdateExample />
      </ExampleProvider>
    </div>
  );
};
