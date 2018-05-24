import { SET_USER } from '../actions/setUser'

export default function setUser (state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.id
    default:
      return state
  }
}
