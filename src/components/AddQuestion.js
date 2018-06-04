import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { generateUID } from '../utils/api'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    author: this.props.setUser,
    id: generateUID(),
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
    console.log('AddQuestion Submit', this.state)
    this.props.history.push('/home')
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      id: generateUID()
    }))
  }
  render() {
    const { optionOneText, optionTwoText } = this.state
    return (
      <div>
        <h2>Would You Rather</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder='Option One'
            value={optionOneText}
            onChange={this.handleChangeOne}
          />
          <textarea
            placeholder='Option Two'
            value={optionTwoText}
            onChange={this.handleChangeTwo}
          />

          <button
            type='submit'
            disabled={optionOneText === '' || optionTwoText === ''}>
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
