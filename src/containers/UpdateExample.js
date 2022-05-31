import React, { Fragment } from "react";
import { useExampleContext } from "../contexts/ExampleContext";

export default () => {
  const { setText } = useExampleContext();

  const changeText = (event) => {
    setText(event.target.value);
  };

  return (
    <Fragment>
      <input
        placeholder="write a text to change the label"
        type="text"
        onChange={changeText}
      />
    </Fragment>
  );
};
