import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {

    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

    case SAVE_ANSWER :
      const { answer, qid, authedUser } = action
      const question = state[qid]
      return {
        ...state,
        [qid]: {
          ...question,
          [answer]: {votes: question[answer].votes.concat([authedUser]), text: question[answer].text}
        }
      }

    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: {id:action.question.id, author: action.question.author, timestamp: Date.now(), optionOne: {votes: [], text: action.question.optionOneText}, optionTwo: {votes: [], text: action.question.optionTwoText}},
      }

    default :
      return state
  }
}
