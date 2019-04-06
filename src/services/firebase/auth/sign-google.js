export default firebase => {
  const provider = new firebase.auth.GoogleAuthProvider()

  return firebase
    .auth()
    .signInWithRedirect(provider)
}
