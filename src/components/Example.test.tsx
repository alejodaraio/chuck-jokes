import React from 'react'
import renderer from 'react-test-renderer'
import Example from '../components/Example'
import { ExampleProvider } from '../contexts/ExampleContext'
import Joke from './Joke'

describe('Example Component test.', () => {
  it('should match with Snapshot.', () => {
    const mockValue = 'This is an example test'
    const component = renderer.create(<Example value={mockValue} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
