import database from './database'

const editUser = (userUid, model) => {
  return database
    .ref(`/users/${userUid}`)
    .update(model)
}

export default editUser
