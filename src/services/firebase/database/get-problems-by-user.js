import firestore from './firestore'
import loadValues from './helpers/load-values'

const getProblemsByUser = userUid => {
  return firestore
    .collection('problems')
    .where('user_uid', '==', userUid)
    .get()
    .then(loadValues)
}

export default getProblemsByUser
