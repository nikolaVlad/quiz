import { createStore } from 'vuex'

export default createStore({
  state: {
    slide: 1
  },
  getters: {
    slide: state => state.slide
  },
  mutations: {
    incrementSlide (state) {
      state.slide++
    },
    decrementSlide (state) {
      state.slide--
    }
  },
  actions: {
    incrementSlide: ({ commit }) => {
      commit('incrementSlide')
    },
    decrementSlide: ({ commit }) => {
      commit('decrementSlide')
    }
  },
  modules: {
  }
})
