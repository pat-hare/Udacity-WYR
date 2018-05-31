import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
        <li>
          <NavLink to='/home'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/add'>
            Add Question
          </NavLink>
        </li>
        <li>
          <a href='/'>Logout</a>
        </li>
      </div>
    )
  }
}


export default (Nav)
