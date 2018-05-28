import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/questions'
import { bindActionCreators } from 'redux'

class AnswerQuestion extends Component {
  render() {
    console.log('-----Props: ', this.props)
    const { questionID, setUser } = this.props
    const { optionOne, optionTwo, author } = this.props.questions[questionID]
    const optionOneStr = 'optionOne'
    const optionTwoStr = 'optionTwo'
    return (
      <div>
        <div>
          <h2>{optionOne.text}</h2>
        </div>
        <button
          className='loginButton'
          onClick={() => this.props.actions.handleAnswerQuestion({setUser, answer: optionOneStr, qid: questionID}) && this.props.history.push('/home')}>
          X
        </button>
        <span>
          <h3>OR</h3>
        </span>
        <div>
          <h2>{optionTwo.text}</h2>
        </div>
        <button
          className='loginButton'
          onClick={() => this.props.actions.handleAnswerQuestion({setUser, answer: optionTwoStr, qid: questionID}) && this.props.history.push('/home')}>
          X
        </button>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, setUser }) {
  const URLPath = window.location.pathname.split('/')
  const questionID = URLPath[2]

  return {
    questionID: questionID,
    questions: questions,
    users,
    setUser
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion)
