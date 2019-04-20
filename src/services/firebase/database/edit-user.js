import database from './database'

const editUser = (problemUid, model) => {
  return database
    .ref(`/users/${problemUid}`)
    .update(model)
}

export default editUser
