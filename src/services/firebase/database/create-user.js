import moment from 'moment'
import { isNil } from 'lodash'
import factoryUser from 'src/domains/User/factory-user'
import getUser from './get-user'
import firestore from './firestore'

const setUser = user => {
  const _user = factoryUser(user)

  _user['created'] = moment().format('x')

  return firestore
    .collection('users')
    .doc(user.uid)
    .set(_user)
    .then(() => _user)
}

export default (userFromGoogle) => {
  return getUser(userFromGoogle.uid)
    .then(_user => {
      if (isNil(_user)) {
        return setUser(userFromGoogle)
      }

      return _user
    })
}
