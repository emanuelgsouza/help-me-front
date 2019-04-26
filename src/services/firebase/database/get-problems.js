import { FILTER_OPTIONS } from 'src/domains/Problems/constants'
import { loadValues } from './helpers'
import firestore from './firestore'
import getProblemsByUser from './get-problems-by-user'

/**
 * @method getProblems
 * @return {Promise<Array<Object>>}
 */
const getProblems = ({ filter, userUid, recently }) => {
  if (recently) {
    return firestore
      .collection('problems')
      .where('approved', '==', false)
      .get()
      .then(loadValues)
  }

  if (filter === FILTER_OPTIONS.NOTHING) {
    return firestore
      .collection('problems')
      .where('approved', '==', true)
      .get()
      .then(loadValues)
  }

  if (filter === FILTER_OPTIONS.WITHOUT_SOLUTION) {
    return firestore
      .collection('problems')
      .where('approved', '==', true)
      .where('suggestion', '==', '')
      .get()
      .then(loadValues)
  }

  return getProblemsByUser(userUid)
}

export default getProblems
