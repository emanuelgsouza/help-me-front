import database from './database'

/**
 * @method getUser
 * @param  {String} uidUser
 * @return {Promise<Object>}
 */
const getUser = uidUser => {
  return database
    .ref()
    .child('users')
    .child(uidUser)
    .once('value')
    .then(data => data.val())
}

export default getUser
