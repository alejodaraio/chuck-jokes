import React, { Fragment } from 'react'
import { IStringValue } from '../@types/types.d.stringValue'

const Joke: React.FC<IStringValue> = ({ value }) => {
  return (
    <Fragment>
      <h1>Chuck says:</h1>
      {value}
    </Fragment>
  )
}

export default Joke
