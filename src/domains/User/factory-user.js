import { get } from 'lodash'

/**
 * @method factoryUser
 * @param  {Object} userFromGoogle
 * @return {Object}
 */
const factoryUser = userFromGoogle => {
  const _get = path => get(userFromGoogle, path)

  return {
    name: _get('displayName'),
    email: _get('email'),
    phoneNumber: _get('phoneNumber'),
    photoURL: _get('photoURL'),
    uid: _get('uid')
  }
}

export default factoryUser
