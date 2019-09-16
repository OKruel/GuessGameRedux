import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import GuessCount from './GuessCount'


const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<GuessCount store={store}/>).dive().dive()
    // console.log(wrapper.debug())
    return wrapper
}

const setup2 = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<GuessCount store={store}/>)
    // console.log(wrapper.debug())
    return wrapper
}

setup()
setup2()


describe('Guess Count component', () => {
    let wrapper;
    beforeEach(() => {
         wrapper = setup()
    });
    test('should render correctly', () => {
        const component = findByTestAttr(wrapper, 'component-guess-count')
        expect(component.length).toBe(1)
    });
    test('should have access to guessedWords prop from Redux State', () => {
        wrapper = setup2()
        const guessedWordsProps = wrapper.props().children.props.guessedWords
        // console.log(wrapper.props().children.props.guessedWords)
        expect(guessedWordsProps).not.toBe(undefined)
    });
});