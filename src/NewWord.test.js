import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../test/testUtils'

import NewWord, { refreshPage } from './NewWord'

const setup = () => {
    const wrapper = shallow(<NewWord />)
    return wrapper
}

describe('newWord component', () => {
    let wrapper;
    
    test('should render the button', () => {
        wrapper = setup()
        const button = findByTestAttr(wrapper, 'button-new-word')
        expect(button.length).toBe(1)
    });
    test('should call refresh page function upon clicking the button', () => {
        wrapper = setup()
        const refreshPageMock = jest.fn()
        findByTestAttr(wrapper, 'button-new-word').simulate('click', refreshPageMock())
        expect(refreshPageMock).toHaveBeenCalledTimes(1)
    });
});