import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { generateUID } from '../utils/api'

class AddQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    author: this.props.setUser,
    id: generateUID()
  }
  handleChangeOne = (e) => {
    const optionOne = e.target.value
    this.setState(() => ({
      optionOne: optionOne
    }))
  }
  handleChangeTwo = (e) => {
    const optionTwo = e.target.value
    this.setState(() => ({
      optionTwo: optionTwo
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddQuestion(this.state))
    this.props.history.push('/home')
    this.setState(() => ({
      optionOne: '',
      optionTwo: ''
    }))
  }
  render() {
    return (
      <div>
        <h2>Would You Rather</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder='Option One'
            value={this.state.optionOne}
            onChange={this.handleChangeOne}
          />
          <textarea
            placeholder='Option Two'
            value={this.state.optionTwo}
            onChange={this.handleChangeTwo}
          />

          <button
            type='submit'
            disabled={this.state.optionOne === '' || this.state.optionTwo === ''}>
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
