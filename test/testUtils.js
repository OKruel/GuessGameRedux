import checkPropTypes from 'check-prop-types'

import { createStore, applyMiddleware } from 'redux'
import { middlewares } from '../src/configStore'

import rootReducer from '../src/reducers/index'


export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares) )
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        confirmingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined()
}

