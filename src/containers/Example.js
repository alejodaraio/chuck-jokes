import React from "react";
import { useExampleContext } from "../contexts/ExampleContext";

export default () => {
  const { currentText } = useExampleContext();

  return <h3>{currentText}</h3>;
};
