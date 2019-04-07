import database from './database'

export default (userUid, problemUid) => {
  const updates = {}

  updates[`users/${userUid}`] = problemUid
  return database.ref().update(updates)
}
