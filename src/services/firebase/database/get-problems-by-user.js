import { isNil } from 'lodash'
import firestore from './firestore'
import loadValues from './helpers/load-values'
import { FILTER_OPTIONS } from 'src/domains/Problems/constants'

const getProblemsByUser = (userUid, status, filter) => {
  let query = firestore
    .collection('problems')
    .where('approved', '==', true)
    .where('deleted', '==', false)
    .where('user_uid', '==', userUid)

  if (!isNil(status)) {
    if (status !== FILTER_OPTIONS.NOTHING) {
      query = query.where('problem_status', '==', status)
    }
  }

  if (filter === FILTER_OPTIONS.NOTHING) {
    return query
      .get()
      .then(loadValues)
  }

  if (filter === FILTER_OPTIONS.WITHOUT_SOLUTION) {
    return query
      .where('suggestion', '==', '')
      .get()
      .then(loadValues)
  }

  return query
    .get()
    .then(loadValues)
}

export default getProblemsByUser
