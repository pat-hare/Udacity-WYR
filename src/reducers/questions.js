import { RECEIVE_QUESTIONS, SAVE_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
      
    case SAVE_ANSWER :
      const { answer, qid, setUser } = action
      const question = state[qid]
      const votes = answer + 'Votes'

      return {
        ...state,
        [action.qid]: {
          ...question,
          [votes]: question[votes].concat([setUser])
        }
      }

    default :
      return state
  }
}
