import React from 'react'
import{ shallow } from 'enzyme'

import Congrats from './Congrats'
import { findByTestAttr, checkProps } from '../test/testUtils'


const defaultProps = {success: false}

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps} />)
}

test('render without errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)
})

test('renders no text when success prop is false', () => {
    const wrapper = setup({success: false})
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
})

test('renders non-empty congrats message when success prop is true', () => {
    const wrapper = setup({success: true})
    const component = findByTestAttr(wrapper, 'congrats-message')
    expect(component.text().lenght).not.toBe(0)

})

test('does not throw a warning with expected props', () => {
    const expectedProps = {success: false}
    checkProps(Congrats, expectedProps)
}) 