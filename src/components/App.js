import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import AnswerQuestion from './AnswerQuestion'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div>
          {this.props.loading === true
            ? <div></div>
            : <Nav />}
          {this.props.loading === true
            ? <Switch>
                <Route path='/' exact component={Login} />
                <Route render={function () {
                  return <p>Not Found! <a href='/'>Click here to try again</a></p>
                }} />
              </Switch>
            : <Switch>
                <Route path='/home' component={Home} />
                <Route path='/questions/:id' component={AnswerQuestion} />
                <Route path='/add' component={AddQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
              </Switch>}
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
