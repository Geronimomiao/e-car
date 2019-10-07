import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      flag: 1,
      nearby: {
        center: {
          lng: 117.22452026848885,
          lat: 39.1398957029127,
        },
        radius: 1000
      }
    },
    mutations: {
      updateFlag(state, flag) {
        state.flag = flag
      },
      updateTarget(state, center) {
        state.nearby.center = center
      },
    }
  })
}

