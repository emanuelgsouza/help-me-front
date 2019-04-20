import * as TYPES from './mutation-types'

export default {
  [ TYPES.SET_STATUSES ] (store, status) {
    store.statuses = [ ...status ]
  }
}
