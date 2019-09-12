import { combineReducers } from 'redux'
import success from './successReducer'
import guessedWords from './guessedWordReducer'
import secretWord from './sercretWordReducer'

const rootReducer = combineReducers(
    {
        success,
        guessedWords,
        secretWord
    }
)

export default rootReducer