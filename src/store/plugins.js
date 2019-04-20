import { firebase } from 'src/services/firebase'
import {
  setUser,
  getProblemsStatuses
} from 'src/services/firebase/database'
import * as TYPES from './auth/mutation-types'
import * as APPLICATION_TYPES from './application/mutation-types'
import factoryUser from 'src/domains/User/factory-user'
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

  firebase.auth().onAuthStateChanged(async user => {
    store.commit(`auth/${TYPES.CLEAR_USER_LOADING}`)

    console.log('User information loaded')

    if (!user) {
      store.commit(`auth/${TYPES.CLEAR_USER}`)
      return
    }
    const _user = factoryUser(user)
    store.commit(`auth/${TYPES.SET_USER}`, _user)

    await wasLogin(false)
    store.commit(`auth/${TYPES.SET_WAS_LOGIN}`, false)

    await setUser(_user)
  })
}
export default [ initializeApp ]
