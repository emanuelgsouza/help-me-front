import { PROBLEM_STATUS_CONSTANTS } from 'src/domains/ProblemStatus/constants'
import { getCreated } from 'src/support/helpers'

/**
 * @method factoryProblem
 * @param  {Object} user
 * @param  {Object} model
 * @return {Object}
 */
const factoryProblem = (user, model) => {
  return {
    ...model,
    user_uid: user.uid,
    created: getCreated(),
    approved: false,
    problem_status: PROBLEM_STATUS_CONSTANTS.PENDING_APPROVE,
    deleted: false,
    deleted_date: null
  }
}

export default factoryProblem
