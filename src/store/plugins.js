import { firebase } from 'src/services/firebase'
import {
  checkExistUser,
  setUser,
  getProblemsByUser
} from 'src/services/firebase/database'
import * as TYPES from './auth/mutation-types'
import factoryUser from 'src/domains/User/factory-user'

const initializeApp = store => {
  // Para ter certeza que estou dizendo que vou capturar dados do usuário
  store.commit(`auth/${TYPES.SET_USER_LOADING}`)
  console.log('Get user information')

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

    if (hasUser) {
      console.log('Get problems by user')

      return getProblemsByUser(_user.uid)
        .then(data => {
          console.log('Problems ...')
          console.log({ data })
        })
    }

    await setUser(_user)
  })
}
export default [ initializeApp ]
