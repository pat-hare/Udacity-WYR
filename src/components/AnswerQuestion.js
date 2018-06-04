import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/questions'
import { bindActionCreators } from 'redux'
import { getPercentage } from '../utils/api'

class AnswerQuestion extends Component {
  state = {
    answered: false,
    classOne: 'notActive',
    classTwo: 'notActive',
  }
  render() {
    const { questionID, setUser, question, actions, author } = this.props
    const { optionOne, optionTwo } = this.props.questions[questionID]
    const { classOne, classTwo, answered } = this.state
    const optionOneStr = 'optionOne'
    const optionTwoStr = 'optionTwo'
    return (
      <div>
        <div>
          <h2>{optionOne.text}</h2>
          {answered || question.optionOne.votes.includes(setUser) || question.optionTwo.votes.includes(setUser)
            ? <div>
                <p className={classOne}>{question.optionOne.votes.length} votes</p>
                <p className={classOne}>{getPercentage(question.optionOne.votes.length, (question.optionOne.votes.length + question.optionTwo.votes.length))}%</p>
              </div>
            : <p></p>}
        </div>
        <button
          className='loginButton'
          onClick={() => actions.handleAnswerQuestion({authedUser: setUser, answer: optionOneStr, qid: questionID}) && this.setState({ answered: true, classOne: 'active' })}
          disabled={answered || question.optionOne.votes.includes(setUser) || question.optionTwo.votes.includes(setUser)}>
          X
        </button>

        <span>
          <h3>OR</h3>
        </span>

        <div>
          <h2>{optionTwo.text}</h2>
          {answered || question.optionOne.votes.includes(setUser) || question.optionTwo.votes.includes(setUser)
            ? <div>
                <p className={classTwo}>{question.optionTwo.votes.length} votes</p>
                <p className={classTwo}>{getPercentage(question.optionTwo.votes.length, (question.optionOne.votes.length + question.optionTwo.votes.length))}</p>
              </div>
            : <p></p>}
        </div>
        <button
          className='loginButton'
          onClick={() => actions.handleAnswerQuestion({authedUser: setUser, answer: optionTwoStr, qid: questionID}) && this.setState({ answered: true, classTwo: 'active' })}
          disabled={answered || question.optionOne.votes.includes(setUser) || question.optionTwo.votes.includes(setUser)}>
          X
        </button>

        <span>
          <h3>BY</h3>
        </span>

        <div>
          <img src={author.avatarURL} alt={`Avatar for ${author.name}`}/>
        </div>

      </div>
    )
  }
}

function mapStateToProps ({ questions, users, setUser }) {
  const URLPath = window.location.pathname.split('/')
  const questionID = URLPath[2]
  const questionState = questions[questionID]
  const author = users[questionState.author]
  return {
    questionID: questionID,
    questions: questions,
    author: author,
    question: questionState,
    users,
    setUser,

  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion)
