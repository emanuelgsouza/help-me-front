export default firebase => {
  return firebase
    .auth()
    .signOut()
}
