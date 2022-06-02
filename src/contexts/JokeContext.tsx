import React, { createContext, useContext, useState } from 'react'
import { apiJoke } from '../api/joke'
import { IJoke, JokeContextType } from '../@types/types.d.joke'

const JokeContext = createContext<JokeContextType | null>(null)

const JokeProvider: React.FC<IJoke> = ({ children }) => {
  const [joke, setJoke] = useState('')

  const getJoke = async () => {
    const randomJoke: string = await apiJoke.getRandom()
    setJoke(randomJoke)
    return randomJoke
  }

  return (
    <JokeContext.Provider value={{ joke, getJoke }}>
      {children}
    </JokeContext.Provider>
  )
}

const useJoke = () => {
  return useContext(JokeContext)
}

export { JokeProvider, useJoke }
