import { getCreated } from 'src/support/helpers'

import editProblem from './edit-problem'

/**
 * @method approveProblem
 * @param  {String} problemUid
 * @param  {String} userUid
 * @return {Promise}
 */
const approveProblem = (problemUid, userUid) => {
  const model = {
    approved: true,
    date_approved: getCreated(),
    user_approved: userUid
  }

  return editProblem(problemUid, model)
}

export default approveProblem
