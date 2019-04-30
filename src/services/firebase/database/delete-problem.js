import moment from 'moment'

import editProblem from './edit-problem'

const deleteProblem = problemUid => {
  const model = {
    deleted: true,
    deleted_date: moment().format('x')
  }

  return editProblem(problemUid, model)
}

export default deleteProblem
