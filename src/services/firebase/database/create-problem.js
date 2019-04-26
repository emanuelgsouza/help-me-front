import factoryProblem from 'src/domains/Problems/support/factory-data'
import firestore from './firestore'

const createProblem = async (problem, user) => {
  const model = factoryProblem(user, problem)
  const documentReference = firestore.collection('problems').doc()
  model['uid'] = documentReference.id

  return documentReference.set(model)
}

export default createProblem
