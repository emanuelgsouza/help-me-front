import database from './database'
import checkExistUser from './check-exist-user'
import moment from 'moment'

const setUser = user => {
  const created = moment.utc().format('YYYY-MM-DD HH:mm:ss')
  user['created'] = created

  return database
    .ref(`users/${user.uid}`)
    .set(user)
    .then(data => data.val())
}

export default (user) => {
  return checkExistUser(user.uid)
    .then(hasUser => {
      if (!hasUser) {
        return setUser(user)
      }
    })
}
