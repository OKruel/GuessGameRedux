import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input, { UnconnectedInput } from './Input'

const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />).dive().dive()
    // console.log(wrapper.debug())
    return wrapper
}
// setup()

describe('renders', () => {
    describe('word has NOT been guessed', () => {
        let wrapper
        beforeEach(() => {
            const initialState = { success: false }
            wrapper = setup(initialState)
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)

        })
        test('renders input box', () => {
            const component = findByTestAttr(wrapper, 'input-box')
            expect(component.length).toBe(1)

        })
        test('renders submit button', () => {
            const component = findByTestAttr(wrapper, 'submit-button')
            expect(component.length).toBe(1)
        })
    })

    describe('word HAS been guessed', () => {
        let wrapper
        beforeEach(() => {
            const initialState = { success: true }
            wrapper = setup(initialState)
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('DOES NOT renders input box', () => {
            const component = findByTestAttr(wrapper, 'input-box')
            expect(component.length).toBe(0)
        })
        test('DOES NOT renders submit button', () => {
            const component = findByTestAttr(wrapper, 'submit-button')
            expect(component.length).toBe(0)
        })
    })

})

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true
        const wrapper = setup({ success })
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(true)
    });
    test('guessWord action creator is function in the props ', () => {
        const wrapper = setup()
        const guessWordProp = wrapper.instance().props.guessWord
        expect(guessWordProp).toBeInstanceOf(Function)
    });
})

describe('Input form calls action creator GUESSWORD', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = 'train'
    beforeEach(() => {
        //*Create a mock function to action creator GUESSWORD
        guessWordMock = jest.fn()
        //*Set the props to pass to unconnected shallow component
        const props = {
            guessWord: guessWordMock,
            success: false,
            guessedWords: []
        }
        //*Created the unconnected shallow component with the set up props
        wrapper = shallow(<UnconnectedInput {...props} />)

        //*Add value to the input box
        wrapper.setState({currentGuess: guessedWord})

        //*Found the button in the component and clicked it
        const button = findByTestAttr(wrapper, 'submit-button')
        button.simulate('click', {preventDefault() {}})
    });
    test('when button is clicked should call a GUESS WORD action creator', () => {
        const guessWordCallCount = guessWordMock.mock.calls.length
        expect(guessWordCallCount).toBe(1)
    });
    test('check if the button, when clicked, pass the correct arguments', () => {
        console.log(guessWordMock.mock.calls[0])
        const guessWordArg = guessWordMock.mock.calls[0][0]
        expect(guessWordArg).toBe(guessedWord)        
    });
    test('should delete the content of the input box with the submit button', () => {
        expect(wrapper.state('currentGuess')).toBe('')
    });
});