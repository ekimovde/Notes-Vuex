export default {
  state: {
    message: ''
  },
  mutations: {
    setMessage (state, payload) {
      state.message = payload
    }
  },
  actions: {
    setMessage ({commit}, payload) {
      let mes = payload
      commit('setMessage', mes)
    }
  },
  getters: {
    getMessage (state) {
      return state.message
    }
  }
}