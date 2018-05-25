import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Would You Rather</h3>
        <ul>
          {this.props.questions.map((id) => (
            <li key={id}>
              <div>QUESTION: {id}</div>
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
