import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'
import GuessCount from './GuessCount'
import NewWord from './NewWord'

import { getSecretWord } from './actions/index'

export class UnconnectedApp extends Component {
  componentDidMount(){
    this.props.getSecretWord()
  }
  
  render() {
    return (
      <div className='container'>
        <h1>Guess Word Game</h1>
        <div>The secret word is: {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        {this.props.success?<NewWord/>:<></> }
        <Input/>
        <GuessedWords guessedWords={this.props.guessedWords} />
        {this.props.guessedWords.length > 0? <GuessCount ></GuessCount>: <></> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {success, guessedWords, secretWord} = state
  return {success, guessedWords, secretWord}
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
