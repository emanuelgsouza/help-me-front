import database from './database'
import { FILTER_OPTIONS } from 'src/domains/Problems/constants'
import { loadValues } from './helpers'

/**
 * @method getProblems
 * @return {Promise<Array<Object>>}
 */
const getProblems = ({ filter, userUid, recently }) => {
  if (recently) {
    return new Promise((resolve, reject) => {
      database
        .ref('problems')
        .orderByChild('approved')
        .equalTo(false)
        .once('value')
        .then(loadValues(resolve))
    })
  }

  if (filter === FILTER_OPTIONS.NOTHING) {
    return new Promise((resolve, reject) => {
      database
        .ref('problems')
        .orderByChild('approved')
        .equalTo(true)
        .once('value')
        .then(loadValues(resolve))
    })
  }

  // TODO: Não vai funcionar, pensando na possibilidade usar o Firestore
  if (filter === FILTER_OPTIONS.WITHOUT_SOLUTION) {
    return new Promise((resolve, reject) => {
      database
        .ref('problems')
        .orderByChild('suggestion')
        .equalTo('')
        .once('value')
        .then(loadValues(resolve))
    })
  }

  return new Promise((resolve, reject) => {
    database
      .ref('problems')
      .orderByChild('user_uid')
      .equalTo(userUid)
      .once('value')
      .then(loadValues(resolve))
  })
}

export default getProblems
