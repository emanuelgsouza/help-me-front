import { omit } from 'lodash'

/**
 * @type {Object}
 */
export const FILTER_OPTIONS = {
  NOTHING: 'Nenhum filtro',
  WITHOUT_SOLUTION: 'Problemas sem solução proposta'
}

/**
 * @method getFilterOptions
 * @param {Boolean} hasUser
 * @returns {Object}
 */
export const getFilterOptions = hasUser => {
  if (hasUser) {
    return FILTER_OPTIONS
  }

  return omit(FILTER_OPTIONS, ['MY_PROBLEMS'])
}
