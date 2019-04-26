import { isNil } from 'lodash'
import { FILTER_OPTIONS } from 'src/domains/Problems/constants'
import { loadValues } from './helpers'
import firestore from './firestore'
import getProblemsByUser from './get-problems-by-user'

/**
 * @method getProblems
 * @return {Promise<Array<Object>>}
 */
const getProblems = ({ filter, userUid, status, recently }) => {
  let query = firestore.collection('problems')

  if (!isNil(status)) {
    if (status !== FILTER_OPTIONS.NOTHING) {
      query = query.where('problem_status', '==', status)
    }
  }

  if (recently) {
    return query
      .where('approved', '==', false)
      .get()
      .then(loadValues)
  }

  if (filter === FILTER_OPTIONS.NOTHING) {
    return query
      .where('approved', '==', true)
      .get()
      .then(loadValues)
  }

  if (filter === FILTER_OPTIONS.WITHOUT_SOLUTION) {
    return query
      .where('approved', '==', true)
      .where('suggestion', '==', '')
      .get()
      .then(loadValues)
  }

  return getProblemsByUser(userUid, status)
}

export default getProblems
