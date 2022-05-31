import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ExampleContext = createContext(undefined);

const ExampleProvider = ({ text, children }) => {
  const [currentText, setText] = useState(text);

  return (
    <ExampleContext.Provider value={{ currentText, setText }}>
      {children}
    </ExampleContext.Provider>
  );
};

const useExampleContext = () => {
  return useContext(ExampleContext);
};

ExampleProvider.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { ExampleProvider, useExampleContext };
