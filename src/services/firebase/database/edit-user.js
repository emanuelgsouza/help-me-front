import firestore from './firestore'

const editUser = (userUid, model) => {
  return firestore
    .collection('users')
    .doc(userUid)
    .update(model)
}

export default editUser
