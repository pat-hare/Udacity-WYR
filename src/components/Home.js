import React, { Component } from 'react';
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
  render() {
    console.log(this.props)
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

function mapStateToProps ({ questions, setUser }) {
  return {
    questions: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    setUser: setUser
  }
}

export default connect(mapStateToProps)(Home);
