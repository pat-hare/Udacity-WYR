import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveAnswer (info) {
  return _saveQuestionAnswer(info)
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function getPercentage (count, total) {
  return total === 0 ? 0 : parseInt(count / total * 100, 10)
}
