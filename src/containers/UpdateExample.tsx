import React, { ChangeEvent, Fragment } from 'react'
import { ExampleContextType } from '../@types/types.d.example'
import { useExampleContext } from '../contexts/ExampleContext'

export default () => {
  const { setText } = useExampleContext() as ExampleContextType

  const changeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <Fragment>
      <input
        placeholder="write a text to change the label"
        type="text"
        onChange={changeText}
      />
    </Fragment>
  )
}
