import { saveAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (info) {
  return(dispatch, getState) => {
    return saveQuestion({
      ...info,
      author: getState().setUser
    })
      .then(() => dispatch(addQuestion(info)))
      .catch((e) => {
        console.warn('Error in handleAddQuestion: ', e)
        alert('There was an error in submitting the question. Try Again.')
      })
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
