import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import application from './application'
import plugins from './plugins'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins,
    modules: {
      auth,
      application
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
