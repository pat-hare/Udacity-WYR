import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/questions'
import { bindActionCreators } from 'redux'

class AnswerQuestion extends Component {
  render() {
    const { questionID, setUser } = this.props
    const { optionOne, optionTwo } = this.props.questions[questionID]
    const optionOneStr = 'optionOne'
    const optionTwoStr = 'optionTwo'
    console.log(this.props)
    return (
      <div>
        <div>
          <h2>{optionOne.text}</h2>
        </div>
        <button
          className='loginButton'
          onClick={() => this.props.actions.handleAnswerQuestion({authedUser: setUser, answer: optionOneStr, qid: questionID}) && this.props.history.push('/home')}>
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
          onClick={() => this.props.actions.handleAnswerQuestion({authedUser: setUser, answer: optionTwoStr, qid: questionID}) && this.props.history.push('/home')}>
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
  const authorQ = questions[questionID]
  const author = users[authorQ.author]
  console.log(author)
  return {
    questionID: questionID,
    questions: questions,
    author: author,
    users,
    setUser,

  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion)
