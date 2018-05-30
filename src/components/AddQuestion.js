import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { generateUID } from '../utils/api'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    author: this.props.setUser,
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
    this.props.dispatch(handleAddQuestion(this.state))
    this.props.history.push('/home')
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

function mapStateToProps ({ setUser }) {
  return {
    setUser,
  }
}

export default connect(mapStateToProps)(AddQuestion)
