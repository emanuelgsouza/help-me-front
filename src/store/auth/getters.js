import { isEmpty, get, first, last } from 'lodash'

export const hasUser = state => !isEmpty(state.user)

export const username = state => {
  const name = get(state, 'user.name', '')
  if (isEmpty(name)) {
    return name
  }

  const firstName = first(name.split(' '))
  const lastName = last(name.split(' '))
  return `${firstName} ${lastName}`
}

export const isUserLoading = state => state.loadingUser

export const isAdmin = state => get(state, 'user.is_admin', false)

export const userUid = state => get(state, 'user.uid', '')
