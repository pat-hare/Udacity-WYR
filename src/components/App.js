import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import AnswerQuestion from './AnswerQuestion'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div>
          {this.props.loading === true
            ? <Route path='/' exact component={Login} />
            : <Fragment>
                <Route path='/home' component={Home} />
                <Route path='/questions/:id' component={AnswerQuestion} />
                <Route path='/add' component={AddQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
              </Fragment>}
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ setUser }) {
  return {
    loading: setUser === null
  }
}

export default connect(mapStateToProps)(App);
