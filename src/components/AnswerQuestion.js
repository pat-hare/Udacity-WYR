import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnswerQuestion extends Component {
  render() {
    const { questionID } = this.props
    const { optionOne, optionTwo, author } = this.props.questions[questionID]
    return (
      <div>
        <div>
          <h2>{optionOne.text}</h2>
        </div>
        <button>
          X
        </button>
        <span>
          <h3>OR</h3>
        </span>
        <div>
          <h2>{optionTwo.text}</h2>
        </div>
        <button>
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

//const mapDispatchToProps = dispatch => ({
//  actions: bindActionCreators(Actions, dispatch)
//})

export default connect(mapStateToProps)(AnswerQuestion)
