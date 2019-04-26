import firestore from './firestore'

/**
 * @method getUser
 * @param  {String} uidUser
 * @return {Promise<Object>}
 */
const getUser = uidUser => {
  return firestore
    .collection('users')
    .doc(uidUser)
    .get()
    .then(user => {
      if (user.exists) {
        return user.data()
      }

      return null
    })
}

export default getUser
