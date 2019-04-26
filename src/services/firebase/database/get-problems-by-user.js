import { isNil } from 'lodash'
import firestore from './firestore'
import loadValues from './helpers/load-values'
import { FILTER_OPTIONS } from 'src/domains/Problems/constants'

const getProblemsByUser = (userUid, status) => {
  let query = firestore.collection('problems')

  if (!isNil(status)) {
    if (status !== FILTER_OPTIONS.NOTHING) {
      query = query.where('problem_status', '==', status)
    }
  }

  return query
    .where('user_uid', '==', userUid)
    .get()
    .then(loadValues)
}

export default getProblemsByUser
