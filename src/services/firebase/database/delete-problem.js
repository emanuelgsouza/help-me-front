import { getCreated } from 'src/support/helpers'

import editProblem from './edit-problem'

const deleteProblem = problemUid => {
  const model = {
    deleted: true,
    deleted_date: getCreated()
  }

  return editProblem(problemUid, model)
}

export default deleteProblem
