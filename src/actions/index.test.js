import moxios from 'moxios'

import { storeFactory } from '../../test/testUtils'
import { getSecretWord } from './index'

describe('get Secret Word', () => {
    beforeEach(() => {
        moxios.install()
    });
    afterEach(() => {
        moxios.uninstall()
    })
    test('should return the word into the state ', () => {
        const secretWord = 'party'
        const store = storeFactory()

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: secretWord
            })
        })

        return store.dispatch(getSecretWord()).then(() => {
            const newState = store.getState()
            expect(newState.secretWord).toBe(secretWord)
        })
    });
});