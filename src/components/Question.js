import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {
  render() {
    const { question } = this.props
    const { optionOne, optionTwo, author } = question
    return (
      <div>
        <Link to={`questions/${question.id}`}>
          {optionOne.text} OR {optionTwo.text} by {author}
        </Link>
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
