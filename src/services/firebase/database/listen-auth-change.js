import firebase from '../firebase'

const listenAuthChanged = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => resolve(user))
  })
}

export default listenAuthChanged
