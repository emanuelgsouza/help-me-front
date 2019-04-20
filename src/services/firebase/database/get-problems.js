import database from './database'
import { FILTER_OPTIONS } from 'src/domains/Problems/constants'
import { loadValues } from './helpers'

/**
 * @method getProblems
 * @return {Promise<Array<Object>>}
 */
const getProblems = ({ filter, userUid }) => {
  if (filter === FILTER_OPTIONS.NOTHING) {
    return new Promise((resolve, reject) => {
      database
        .ref('problems')
        .orderByChild('approved')
        .equalTo(true)
        .on('value', loadValues(resolve))
    })
  }

  // TODO: Não vai funcionar, pensando na possibilidade usar o Firestore
  if (filter === FILTER_OPTIONS.WITHOUT_SOLUTION) {
    return new Promise((resolve, reject) => {
      database
        .ref('problems')
        .orderByChild('suggestion')
        .equalTo('')
        .on('value', loadValues(resolve))
    })
  }

  return new Promise((resolve, reject) => {
    database
      .ref('problems')
      .orderByChild('user_uid')
      .equalTo(userUid)
      .on('value', loadValues(resolve))
  })
}

export default getProblems
