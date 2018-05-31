import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import AnswerQuestion from './AnswerQuestion'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import four0four from './404'

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
                <Redirect from='*' to='/' />
                <Route path='404' component={four0four} />
              </Switch>
            : <Switch>
                <Route path='/home' component={Home} />
                <Route path='/questions/:id' component={AnswerQuestion} />
                <Route path='/add' component={AddQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Redirect from='*' to='/404' />
                <Route path='404' component={four0four} />
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
