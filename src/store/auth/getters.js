import { isEmpty } from 'lodash'

export const hasUser = state => isEmpty(state.user)
