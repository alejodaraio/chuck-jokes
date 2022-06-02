import React, { useEffect } from 'react'
import { useJoke } from '../contexts/JokeContext'
import Joke from '../components/Joke'
import { JokeContextType } from '../@types/types.d.joke'

export default () => {
  const { joke, getJoke } = useJoke() as JokeContextType

  useEffect(() => {
    getJoke()
  }, [])

  return <Joke value={joke} />
}
