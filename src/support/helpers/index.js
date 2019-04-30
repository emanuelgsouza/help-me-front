import moment from 'moment'
import { toNumber } from 'lodash'

/**
 * @method getCreated
 * @return {Number} a now date in timestamp seconds
 */
export const getCreated = () => toNumber(moment().format('x'))
