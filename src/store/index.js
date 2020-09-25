import Vue from 'vue'
import Vuex from 'vuex'

import notes from './notes'
import features from './features'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notes,
    features
  }
})