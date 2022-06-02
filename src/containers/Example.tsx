import React from 'react'
import { ExampleContextType } from '../@types/types.d.example'
import { useExampleContext } from '../contexts/ExampleContext'

export default () => {
  const { currentText } = useExampleContext() as ExampleContextType
  return <h3>{currentText}</h3>
}
