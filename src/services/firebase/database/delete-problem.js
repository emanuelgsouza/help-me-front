import { getCreated } from 'src/support/helpers'

import editProblem from './edit-problem'

/**
 * @method deleteProblem
 * @param  {String} problemUid
 * @param  {String} userUid
 * @return {Promise}
 */
const deleteProblem = (problemUid, userUid) => {
  const model = {
    deleted: true,
    deleted_date: getCreated(),
    user_deleted: userUid
  }

  return editProblem(problemUid, model)
}

export default deleteProblem
