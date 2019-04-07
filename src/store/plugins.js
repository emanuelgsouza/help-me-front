import { firebase } from '../services/firebase'
import * as TYPES from './auth/mutation-types'
import factoryUser from 'src/domains/User/factory-user'

const initializeApp = store => {
  // Para ter certeza que estou dizendo que vou capturar dados do usuário
  store.commit(`auth/${TYPES.SET_USER_LOADING}`)
  console.log('Get user information')

  firebase.auth().onAuthStateChanged(user => {
    store.commit(`auth/${TYPES.CLEAR_USER_LOADING}`)

    console.log('User information loaded')
    if (!user) {
      store.commit(`auth/${TYPES.CLEAR_USER}`)
      return
    }
    const _user = factoryUser(user)
    store.commit(`auth/${TYPES.SET_USER}`, _user)
    // const referenceUser = database.ref('users').child(user.uid)
    // Get user problems here
    // referenceUser
    // .child('chats')
    // .on('value', function addArgument (data) {
    // dispatchAction(data, 'addChats')
    // })
  })
}
export default [ initializeApp ]
