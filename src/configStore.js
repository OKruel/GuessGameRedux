import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'

export const middlewares = [ReduxThunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store