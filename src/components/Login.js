import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/setUser'

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Login:</h1>
        </div>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>
              <div className='loginBox'>
                <div>
                  <img src={user.avatarURL} alt={`Avatar for ${user.name}`}/>
                </div>
                <div>
                  <h2 className='username'>{user.name}</h2>
                </div>
                <button
                  className='loginButton'
                  onClick={() => this.props.actions.setUser(user.id) && this.props.history.push('/home')}>
                  Login
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users: Object.keys(users)
      .map((id) => {
        const { name, avatarURL } = users[id]

        return {
          id,
          name,
          avatarURL,
        }
      })
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
