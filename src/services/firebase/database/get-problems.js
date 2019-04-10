import { isNil } from 'lodash'
import database from './database'

/**
 * @method getProblems
 * @return {Promise<Array<Object>>}
 */
const getProblems = () => {
  return new Promise((resolve, reject) => {
    database.ref('problems').on('value', data => {
      const val = data.val()
      resolve(isNil(val) ? [] : Object.values(val))
    })
  })
}

export default getProblems
