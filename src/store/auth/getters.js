import { isEmpty, get } from 'lodash'

export const hasUser = state => !isEmpty(state.user)

export const username = state => get(state, 'user.name', '')

export const isUserLoading = state => state.loadingUser

export const isAdmin = state => get(state, 'user.is_admin', false)

export const userUid = state => get(state, 'user.uid', '')
