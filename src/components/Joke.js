import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Joke = ({ value }) => {
  return (
    <Fragment>
      <h1>Chuck says:</h1>
      {value}
    </Fragment>
  );
};

Joke.propTypes = {
  value: PropTypes.string,
};

export default Joke;
