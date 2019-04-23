import { pick, omit } from 'lodash'
import { editUser } from 'src/services/firebase/database'

import { PROPS_TO_OMIT } from '../support/constants'

/**
 * @method getKeysToUpdate
 * @param  {Object} userData
 * @param  {Object} model
 * @return {Array<String>}
 */
const getKeysToUpdate = (userData, model) => {
  return Object.keys(userData).filter(key => {
    return userData[key] !== model[key]
  })
}

/**
 * @method edit
 * @param  {String} userUid
 * @param  {Object} userData
 * @param  {Object} model
 * @return {Promise<Object>}
 */
const edit = (userUid, userData, model) => {
  const _userData = omit(userData, PROPS_TO_OMIT)
  const _model = omit(model, PROPS_TO_OMIT)
  const keysToUpdate = getKeysToUpdate(_userData, _model)
  const data = pick(_model, keysToUpdate)

  return editUser(userUid, data)
}

export default edit
