import React, { Component } from 'react';
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
  state = {
    toggleUnanswered: true,
  }
  toggleAnswered = () => {
    this.setState(() => ({
      toggleUnanswered: false
    }))
  }
  toggleUnanswered = () => {
    this.setState(() => ({
      toggleUnanswered: true
    }))
  }

  render() {
    const { unansweredQuestions, answeredQuestions } = this.props
    const { toggleUnanswered } = this.state
    console.log(this.props, this.state)
    return (
      <div>
        <h3>Would You Rather - {this.props.setUser}</h3>
        <span>
          <button
            onClick={this.toggleUnanswered}>
            Unanswered
          </button>
        </span>
        <span>
          <button
            onClick={this.toggleAnswered}>
            Answered
          </button>
        </span>
        <ul>
          {toggleUnanswered
            ? unansweredQuestions.map((id) => (
                <li key={id}>
                  <Question id={id} />
                </li>))
            : answeredQuestions.map((id) => (
                <li key={id}>
                  <Question id={id} />
                </li>))
            }
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({ questions, users, setUser }) {
  const allQuestions = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  const answeredQuestionsIds = Object.keys(users[setUser].answers)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  const unansweredQuestionsIds = allQuestions.filter(val => !answeredQuestionsIds.includes(val))
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  return {
    questions: Object.keys(questions),
    answeredQuestions: answeredQuestionsIds,
    unansweredQuestions: unansweredQuestionsIds,
    setUser: setUser
  }
}

export default connect(mapStateToProps)(Home);
