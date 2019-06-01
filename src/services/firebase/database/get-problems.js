import { isEmpty } from 'lodash'
import { loadValues } from './helpers'
import firestore from './firestore'
import getProblemsByUser from './get-problems-by-user'
import { PROBLEM_STATUS_CONSTANTS } from 'src/domains/ProblemStatus/constants'
import { FILTER_OPTIONS } from 'src/domains/Problems/constants'

/**
 * @method getProblems
 * @return {Promise<Array<Object>>}
 */
const getProblems = ({ filter, userUid, status, recently, admin }) => {
  let query = firestore.collection('problems').where('deleted', '==', false)

  if (admin) {
    if (filter === FILTER_OPTIONS.WITHOUT_SOLUTION) {
      query = query.where('suggestion', '==', '')
    }

    return query
      .get()
      .then(loadValues)
  }

  if (recently) {
    return query
      .where('approved', '==', false)
      .get()
      .then(loadValues)
  }

  // Se não há usuário, só é possível visualizar problemas apreciados pela equipe de TI
  if (isEmpty(userUid)) {
    return query
      .where('problem_status', '==', PROBLEM_STATUS_CONSTANTS.APPRECIATED)
      .get()
      .then(loadValues)
  }

  return getProblemsByUser(userUid, status, filter)
}

export default getProblems
