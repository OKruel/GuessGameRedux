import { actionTypes } from '../actions'
import successReducer from './successReducer'

test('returns default initial state of false when no action is called', () => {
    const newState = successReducer(undefined, {})
    expect(newState).toBe(false)
})
test('returns state of true upon receiving action of type CRRECT_GUESS', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
    expect(newState).toBe(true)
})