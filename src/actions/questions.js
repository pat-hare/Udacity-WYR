import { _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function answerQuestion ({ setUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    qid,
    setUser,
    answer
  }
}

export function handleAnswerQuestion (info) {
  return(dispatch) => {
    dispatch(answerQuestion(info))

    return _saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAnswerQuestion: ', e)
        alert('There was an error in answering the question. Try again.')
      })
  }
}
