import firestore from './firestore'

const getProblemStatuses = () => {
  return firestore
    .collection('problem_statuses')
    .get()
    .then(QuerySnapshoot => QuerySnapshoot.docs.map(doc => doc.data()))
}

export default getProblemStatuses
