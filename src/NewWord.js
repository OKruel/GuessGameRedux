import React from 'react'

export const refreshPage = () => window.location.reload(false)

const NewWord = () => {
    return (
        <div>
            <button
                data-test='button-new-word'
                className='btn btn-primary'
                onClick={() => refreshPage()}
            >New Game</button>
        </div>
    )
}

export default NewWord