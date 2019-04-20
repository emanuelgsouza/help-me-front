import database from './database'
import { returnKey } from './helpers'
import { factoryProblem } from 'src/domains/Problems/support/factory-data'

const createProblem = async (problem, user) => {
  const model = factoryProblem(user, problem)
  const key = returnKey('problems')
  model['uid'] = key

  const problemRegistered = database.ref('problems').child(key).set(problem)

  return problemRegistered
}

export default createProblem
