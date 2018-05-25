import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { question } = this.props
    const { optionOne, optionTwo, author } = question
    console.log(this.props)
    return (
      <div>
        {optionOne.text} OR {optionTwo.text} by {author}
      </div>
    )
  }
}

function mapStateToProps ({ setUser, questions }, { id }) {
  return {
    setUser,
    question: questions[id]
  }
}

export default connect(mapStateToProps)(Question)
