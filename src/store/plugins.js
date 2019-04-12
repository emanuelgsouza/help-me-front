import { firebase } from 'src/services/firebase'
import {
  checkExistUser,
  setUser,
  getProblemsByUser
} from 'src/services/firebase/database'
import * as TYPES from './auth/mutation-types'
import factoryUser from 'src/domains/User/factory-user'
import { wasLogin, getWasLogin } from 'src/domains/User/support/localforage'

const initializeApp = async store => {
  // Para ter certeza que estou dizendo que vou capturar dados do usuário
  store.commit(`auth/${TYPES.SET_USER_LOADING}`)
  console.log('Get user information')

  const value = await getWasLogin()
  store.commit(`auth/${TYPES.SET_WAS_LOGIN}`, value)

  firebase.auth().onAuthStateChanged(async user => {
    store.commit(`auth/${TYPES.CLEAR_USER_LOADING}`)

    console.log('User information loaded')

    if (!user) {
      store.commit(`auth/${TYPES.CLEAR_USER}`)
      return
    }
    const _user = factoryUser(user)
    store.commit(`auth/${TYPES.SET_USER}`, _user)

    const hasUser = await checkExistUser(_user.uid)

    await wasLogin(false)
    store.commit(`auth/${TYPES.SET_WAS_LOGIN}`, false)

    if (hasUser) {
      console.log('Get problems by user')

      return getProblemsByUser(_user.uid)
        .then(data => {
          console.log('Problems ...')
        })
    }

    await setUser(_user)
  })
}
export default [ initializeApp ]
