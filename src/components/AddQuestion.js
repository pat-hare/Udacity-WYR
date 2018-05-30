import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }
  handleChangeOne = (e) => {
    const optionOneText = e.target.value
    this.setState(() => ({
      optionOneText: optionOneText
    }))
  }
  handleChangeTwo = (e) => {
    const optionTwoText = e.target.value
    this.setState(() => ({
      optionTwoText: optionTwoText
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    console.log('New Q: ', optionOneText, 'OR', optionTwoText)
    this.props.dispatch(handleAddQuestion(this.state))
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: ''
    }))
  }
  render() {
    return (
      <div>
        <h2>Would You Rather</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder='Option One'
            value={this.state.optionOneText}
            onChange={this.handleChangeOne}
          />
          <textarea
            placeholder='Option Two'
            value={this.state.optionTwoText}
            onChange={this.handleChangeTwo}
          />

          <button
            type='submit'
            disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(AddQuestion)
