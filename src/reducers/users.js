import { RECEIVE_USERS } from '../actions/users'
import { SAVE_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
  switch(action.type) {

    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }

    case SAVE_ANSWER :
      const { authedUser, qid , answer } = action
      const obj2 = state[authedUser].answers
      obj2[qid] = answer
      console.log(obj2)
      console.log('++++++++++++', state)
      console.log(state[authedUser].answers)
      console.log('id', action.qid, 'answer', action.answer)
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: obj2
        }
      }

    case ADD_QUESTION :
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.poll.id])
        }
      }
    default :
      return state
  }
}
