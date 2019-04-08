import database from './database'

/**
 * @method getProblems
 * @return {Promise<Array<Object>>}
 */
const getProblems = () => {
  return new Promise((resolve, reject) => {
    database.ref('problems').on('value', data => {
      resolve(Object.values(data.val()))
    })
  })
}

export default getProblems
