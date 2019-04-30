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
    uid: _get('uid'),
    is_admin: false,
    phone: '',
    is_employer: '',
    professional: '',
    registration: '',
    university_link: 'student',
    is_course_coordinator: false,
    employee_observations: '',
    employee_register: '',
    city: '',
    company_activity: '',
    company_name: '',
    company_phone: '',
    is_first_login: true,
    deleted: false,
    deleted_date: null
  }
}

export default factoryUser
