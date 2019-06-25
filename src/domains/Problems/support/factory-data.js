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
    problem_status: PROBLEM_STATUS_CONSTANTS.PENDING_APPROVE,
    deleted: false,
    deleted_date: null,
    approved: false,
    date_approved: null,
    user_approved: null,
    user_deleted: null
  }
}

export default factoryProblem
