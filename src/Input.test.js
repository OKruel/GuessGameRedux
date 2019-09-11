import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAtrr, storeFactory } from '../test/testUtils'
import Input from './Input'

const setup = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive()
    // console.log(wrapper.debug())
    return wrapper
}
// setup()

describe('renders', () => {
    describe('word has NOT been guessed', () => {
        test('renders component without error', () => {
            
            
        })
        test('renders input box', () => {

        })
        test('renders submit button', () => {

        })
    })

    describe('word HAS been guessed', () => {
        test('renders component without error', () => {
            
        })
        test('DOES NOT renders input box', () => {

        })
        test('DOES NOT renders submit button', () => {

        })
    })

})

describe('update state', () => {

})