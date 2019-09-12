import React from 'react';
import App from './App';

import { shallow } from 'enzyme'
import { storeFactory } from '../test/testUtils'

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<App store={store} />).dive().dive()
  // console.log(wrapper.debug())
  return wrapper
}
describe('Testing Redux properties', () => {
  test('has access to SUCCESS state', () => {
    const success = true
    const wrapper = setup({ success })
    const successProps = wrapper.instance().props.success
    expect(successProps).toBe(success)
  });
  test('has access to SECRET WORD state', () => {
    const secretWord = 'party'
    const wrapper = setup({ secretWord })
    const secretWordProps = wrapper.instance().props.secretWord
    expect(secretWordProps).toBe(secretWord)
  });
  test('has access to GUESSED WORDS state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
    const wrapper = setup({ guessedWords })
    const guessedWordsProps = wrapper.instance().props.guessedWords
    expect(guessedWordsProps).toBe(guessedWords)
  });
  test('has access to GET SECRET WORD action creator as a prop', () => {
    const wrapper = setup()
    const getSecretWordProps = wrapper.instance().props.getSecretWord
    expect(getSecretWordProps).toBeInstanceOf(Function)
  });
});
