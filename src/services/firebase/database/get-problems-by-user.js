import database from './database'

const getProblemsByUser = userUid => {
  return new Promise((resolve, reject) => {
    return database
      .ref('problems')
      .orderByChild('user_uid')
      .equalTo(userUid)
      .on('value', data => {
        resolve(data.val())
      })
  })
}

export default getProblemsByUser
