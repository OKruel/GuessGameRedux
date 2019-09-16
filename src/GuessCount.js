import React from 'react'
import { connect } from 'react-redux'

const GuessCount = props => {
    return (
        <div data-test='component-guess-count'>
            Total Guesses: {props.guessedWords.length}
            {/* {console.log(props)} */}
        </div>
    )
}

export default connect(state => state)(GuessCount) 