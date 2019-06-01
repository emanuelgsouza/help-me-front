import firestore from './firestore'
import loadValues from './helpers/load-values'

const loadUsers = () => {
  return firestore
    .collection('users')
    .where('deleted', '==', false)
    .get()
    .then(loadValues)
}

export default loadUsers
