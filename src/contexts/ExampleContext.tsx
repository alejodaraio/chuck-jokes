import React, { createContext, useContext, useState } from 'react'
import { IExample, ExampleContextType } from '../@types/types.d.example'

const ExampleContext = createContext<ExampleContextType | null>(null)

const ExampleProvider: React.FC<IExample> = ({ text, children }) => {
  const [currentText, setText] = useState(text)

  return (
    <ExampleContext.Provider value={{ currentText, setText }}>
      {children}
    </ExampleContext.Provider>
  )
}

const useExampleContext = () => {
  return useContext(ExampleContext)
}

export { ExampleProvider, useExampleContext }
