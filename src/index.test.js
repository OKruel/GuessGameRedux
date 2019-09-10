import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import { Provider } from 'react-redux'
import store from './configStore'

test('renders propertly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
})

test('were created with the root div', () => {
    const props = {store}
    const wrapper = shallow(<Provider {...props}/>)
    expect(wrapper).toMatchSnapshot()
})