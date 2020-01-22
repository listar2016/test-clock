import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    twelveHour: true
  },
  mutations: {
    SET_TYPE: (state, value) => {        
      state.twelveHour = value
    }
  },
  actions: {
    setType(context, value) {
      context.commit('SET_TYPE', value)
    }
  },
  modules: {
  }
})
