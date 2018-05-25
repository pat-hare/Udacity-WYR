import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

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
            : <Route path='/home' component={Home} />}
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
