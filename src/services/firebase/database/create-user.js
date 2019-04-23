import moment from 'moment'
import { isNil } from 'lodash'
import factoryUser from 'src/domains/User/factory-user'
import database from './database'
import getUser from './get-user'

const setUser = user => {
  const _user = factoryUser(user)

  const created = moment().format('x')
  _user['created'] = created

  return database
    .ref(`users/${user.uid}`)
    .set(user)
    .then(data => data.val())
}

export default (userFromGoogle) => {
  return getUser(userFromGoogle.uid)
    .then(_user => {
      if (isNil(_user)) {
        return setUser(_user)
      }

      return _user
    })
}
