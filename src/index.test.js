import React from 'react'
import {shallow} from 'enzyme'

import App from './App'

test('renders propertly', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot()
})