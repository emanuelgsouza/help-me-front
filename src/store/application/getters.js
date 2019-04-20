import { get } from 'lodash'

export const problemsStatuses = state => get(state, 'statuses', [])
