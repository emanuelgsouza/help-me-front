import database from './database'
import { returnKey } from './helpers'
import moment from 'moment'

const createProblem = async (problem, user) => {
  const key = returnKey('problems')
  const created = moment().format('x')
  problem['user_uid'] = user.uid
  problem['created'] = created
  problem['uid'] = key

  const problemRegistered = database.ref('problems').child(key).set(problem)

  return problemRegistered
}

export default createProblem
