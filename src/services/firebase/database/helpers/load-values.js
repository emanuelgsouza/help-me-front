import { isNil } from 'lodash'

/**
 * @method loadValues
 * @param {Function} resolve Promise.resolve function
 */
const loadValues = resolve => data => {
  const val = data.val()
  resolve(isNil(val) ? [] : Object.values(val))
}

export default loadValues
