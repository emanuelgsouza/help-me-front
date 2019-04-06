import { firebase } from '../services/firebase'
import * as TYPES from './auth/mutation-types'

const initializeApp = store => {
  firebase.auth().onAuthStateChanged(user => {
    console.log({ user })
    if (!user) return
    store.commit(TYPES.SET_USER, user)
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
