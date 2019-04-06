import { firebase } from '../../services/firebase'
import * as TYPES from './mutation-types'

export const getUser = ({ commit }) => {
  return firebase
    .auth()
    .getRedirectResult()
    .then(result => {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken
        commit(TYPES.SET_TOKEN, token)
      }
      // The signed-in user info.
      const user = result.user
      commit(TYPES.SET_USER, user)

      commit(TYPES.CLEAR_ERROR)
    }).catch(error => {
      // Handle Errors here.
      const errorMessage = error.message
      commit(TYPES.SET_ERROR, true)
      commit(TYPES.SET_ERROR_MESSAGE, errorMessage)
    })
}
