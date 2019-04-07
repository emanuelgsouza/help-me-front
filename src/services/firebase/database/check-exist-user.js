import { isNil } from 'lodash'
import database from './database'

export default (uidUser) => {
  return database
    .ref()
    .child('users')
    .child(uidUser)
    .once('value')
    .then(data => {
      const value = data.val()
      console.log({ value })
      return !isNil(value)
    })
}
