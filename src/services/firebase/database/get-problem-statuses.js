import database from './database'
import { loadValues } from './helpers'

const getProblemStatuses = () => {
  return new Promise((resolve, reject) => {
    database
      .ref('problem_statuses')
      .on('value', loadValues(resolve))
  })
}

export default getProblemStatuses
