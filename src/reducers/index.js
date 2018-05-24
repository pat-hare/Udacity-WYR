import { combineReducers } from 'redux'
import setUser from './setUser'
import questions from './questions'
import users from './users'

export default combineReducers({
  setUser,
  questions,
  users
})
