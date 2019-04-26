import firestore from './firestore'

const editProblem = (problemUid, model) => {
  return firestore
    .collection('problems')
    .doc(problemUid)
    .update(model)
}

export default editProblem
