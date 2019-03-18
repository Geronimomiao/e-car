import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
      state: {
        flag: 1,
      },
      mutations: {
        updateFlag(state, flag) {
          state.flag = flag
        }
      }
    })
}

