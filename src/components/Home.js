import React, { Component } from 'react';
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
  state = {
    toggleUnanswered: true
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
    console.log(this.props, this.state)
    return (
      <div>
        <h3>Would You Rather - {this.props.setUser}</h3>
        <span>
          <button>
            Unanswered
          </button>
        </span>
        <span>
          <button>
            Answered
          </button>
        </span>
        <ul>
          {this.props.questions.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
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
