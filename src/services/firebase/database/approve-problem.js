import { getCreated } from 'src/support/helpers'
import { PROBLEM_STATUS_CONSTANTS } from 'src/domains/ProblemStatus/constants'

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
    problem_status: PROBLEM_STATUS_CONSTANTS.PENDING,
    date_approved: getCreated(),
    user_approved: userUid
  }

  return editProblem(problemUid, model)
}

export default approveProblem
