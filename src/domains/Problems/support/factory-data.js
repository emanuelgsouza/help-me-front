import moment from 'moment'
import { PROBLEM_STATUS } from 'src/domains/ProblemStatus/constants'

/**
 * @method factoryProblem
 * @param  {Object} user
 * @param  {Object} model
 * @return {Object}
 */
const factoryProblem = (user, model) => {
  const created = moment().format('x')

  return {
    ...model,
    user_uid: user.uid,
    created,
    approved: false,
    problem_status: PROBLEM_STATUS.PENDING
  }
}

export default factoryProblem
