import database from './database'

const editProblem = (problemUid, model) => {
  return database
    .ref(`/problems/${problemUid}`)
    .update(model)
}

export default editProblem
