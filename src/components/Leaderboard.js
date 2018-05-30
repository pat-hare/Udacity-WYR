import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    console.log(this.props)
    return(
      <ul>
        {this.props.users.map((user) => (
          <li key={user.id}>
            <img src={user.avatarURL} alt={`Avatar for {user.name}`} />

            <div>
              <h2>{user.name}</h2>
              <p>{user.questions} Questions</p>
              <p>{user.answers} Answers</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users: Object.keys(users)
      .map((id) => {
        const { name, avatarURL, questions, answers } = users[id]

        return {
          id,
          name,
          avatarURL,
          questions: questions.length,
          answers: Object.keys(answers).length
        }
      })
    .sort((a,b) => b.answers + b.questions > a.answers + a.questions)
  }
}

export default connect(mapStateToProps)(Leaderboard)
