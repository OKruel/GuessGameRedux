import { storeFactory } from '../test/testUtils'
import { guessWord } from './actions/index'

describe('guessWord action dispatcher', () => {
    const secretWord = 'party'
    const wrongGuess = 'train'

    describe('no guessed words previously', () => {
        let store;
        const initialState = { secretWord }
        beforeEach(() => {
            store = storeFactory(initialState)
        });
        test('updates state correctly for unsuccessful guesses', () => {
            store.dispatch(guessWord(wrongGuess))
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [
                    {
                        guessedWord: wrongGuess,
                        letterMatchCount: 3
                    }
                ]
            }
            expect(newState).toEqual(expectedState)
        })
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord))
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            }
            expect(newState).toEqual(expectedState)
        })
    })

    describe('some guessed words', () => {
        let store;
        const guessedWords = [{guessedWord: 'agile',letterMatchCount: 1}]
        const initialState = { secretWord, guessedWords }
        beforeEach(() => {
            store = storeFactory(initialState)
        });        
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(wrongGuess))
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [
                    ...guessedWords,
                    {
                        guessedWord: wrongGuess,
                        letterMatchCount: 3
                    }
                ]
            }
            expect(newState).toEqual(expectedState)
        })
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord))
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [
                    ...guessedWords,
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            }
            expect(newState).toEqual(expectedState)
        })
    })
})
