import {
  setUser,
  listenAuthChange,
  getProblemsStatuses
} from 'src/services/firebase/database'
import * as TYPES from './auth/mutation-types'
import * as APPLICATION_TYPES from './application/mutation-types'
import { wasLogin, getWasLogin } from 'src/domains/User/support/localforage'

const initializeApp = async store => {
  // Para ter certeza que estou dizendo que vou capturar dados do usuário
  store.commit(`auth/${TYPES.SET_USER_LOADING}`)
  console.log('Get user information')

  const value = await getWasLogin()
  store.commit(`auth/${TYPES.SET_WAS_LOGIN}`, value)

  console.log('Get problem statuses')
  const status = await getProblemsStatuses()
  store.commit(`application/${APPLICATION_TYPES.SET_STATUSES}`, status)

  const user = await listenAuthChange()

  console.log('User information loaded')
  if (!user) {
    console.log('Not loaded user information')
    store.commit(`auth/${TYPES.CLEAR_USER_LOADING}`)
    store.commit(`auth/${TYPES.CLEAR_USER}`)
    return
  }

  const _user = await setUser(user)

  store.commit(`auth/${TYPES.CLEAR_USER_LOADING}`)

  store.commit(`auth/${TYPES.CLEAR_USER}`)

  store.commit(`auth/${TYPES.SET_USER}`, _user)

  await wasLogin(false)
  store.commit(`auth/${TYPES.SET_WAS_LOGIN}`, false)
}
export default [ initializeApp ]
