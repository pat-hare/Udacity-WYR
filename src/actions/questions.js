import { saveAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function answerQuestion ({ qid, authedUser, answer }) {
  return {
    type: SAVE_ANSWER,
    qid,
    authedUser,
    answer
  }
}

export function handleAnswerQuestion (info) {
  return(dispatch) => {
    return saveAnswer(info)
      .then(() => dispatch(answerQuestion(info)))
      .catch((e) => {
        console.warn('Error in handleAnswerQuestion: ', e)
        alert('There was an error in answering the question. Try again.')
      })
  }
}
