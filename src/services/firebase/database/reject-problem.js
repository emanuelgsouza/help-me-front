import { PROBLEM_STATUS_CONSTANTS } from 'src/domains/ProblemStatus/constants'

import editProblem from './edit-problem'

/**
 * @method rejectProblem
 * @param  {String} problemUid
 * @return {Promise}
 */
const rejectProblem = problemUid => {
  const model = {
    approved: false,
    problem_status: PROBLEM_STATUS_CONSTANTS.REJECTED
  }

  return editProblem(problemUid, model)
}

export default rejectProblem
