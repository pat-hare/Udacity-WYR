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
    const { questionID, setUser } = this.props
    const { optionOne, optionTwo } = this.props.questions[questionID]
    const optionOneStr = 'optionOne'
    const optionTwoStr = 'optionTwo'
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
        <div>
          <h2>{optionOne.text}</h2>
          {this.state.answered || this.props.question.optionOne.votes.includes(setUser) || this.props.question.optionTwo.votes.includes(setUser)
            ? <div>
                <p className={this.state.classOne}>{this.props.question.optionOne.votes.length} votes</p>
                <p className={this.state.classOne}>{getPercentage(this.props.question.optionOne.votes.length, (this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length))}%</p>
              </div>
            : <p></p>}
        </div>
        <button
          className='loginButton'
          onClick={() => this.props.actions.handleAnswerQuestion({authedUser: setUser, answer: optionOneStr, qid: questionID}) && this.setState({ answered: true, classOne: 'active' })}
          disabled={this.state.answered || this.props.question.optionOne.votes.includes(setUser) || this.props.question.optionTwo.votes.includes(setUser)}>
          X
        </button>

        <span>
          <h3>OR</h3>
        </span>

        <div>
          <h2>{optionTwo.text}</h2>
          {this.state.answered || this.props.question.optionOne.votes.includes(setUser) || this.props.question.optionTwo.votes.includes(setUser)
            ? <div>
                <p className={this.state.classTwo}>{this.props.question.optionTwo.votes.length} votes</p>
                <p className={this.state.classTwo}>{getPercentage(this.props.question.optionTwo.votes.length, (this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length))}</p>
              </div>
            : <p></p>}
        </div>
        <button
          className='loginButton'
          onClick={() => this.props.actions.handleAnswerQuestion({authedUser: setUser, answer: optionTwoStr, qid: questionID}) && this.setState({ answered: true, classTwo: 'active' })}
          disabled={this.state.answered || this.props.question.optionOne.votes.includes(setUser) || this.props.question.optionTwo.votes.includes(setUser)}>
          X
        </button>

        <span>
          <h3>BY</h3>
        </span>

        <div>
          <img src={this.props.author.avatarURL} alt={`Avatar for ${this.props.author.name}`}/>
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
  console.log(author)
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
