import React, { Component } from 'react'
import { connect } from 'react-redux'

import { guessWord } from './actions/index'
export class UnconnectedInput extends Component {
    constructor(props){
        super(props)
        this.state = {currentGuess: null}
        this.submitGuessedWord = this.submitGuessedWord.bind(this)
    }

    submitGuessedWord(event) {
        event.preventDefault()
        const guessedWord = this.state.currentGuess
        //*Making sure that the word passed in the input box is a string
        if(guessedWord && guessedWord.length > 0)
        this.props.guessWord(guessedWord)
        this.setState({currentGuess: ''})
    }
    
    render() {
        const contents = this.props.success
            ? null
            : (
                <form className='form-inline'>
                    <input
                        data-test='input-box'
                        className='mb-2 mx-sm-3'
                        id='word-guess'
                        type='text'
                        value={this.state.currentGuess}
                        onChange={event => this.setState({currentGuess: event.target.value})}
                        placholder='enter guess'
                    ></input>
                    <button
                        data-test='submit-button'
                        className='btn btn-primary mb-2'
                        type='submit'
                        onClick={(event) => this.submitGuessedWord(event)}
                    >
                        Submit
                    </button>
                </form>
            )
        return (
            <div data-test='component-input'>
                {contents}
            </div>
        )
    }
}

const mapStateToProps = ({ success }) => {
    return { success }
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)