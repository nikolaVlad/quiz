import { createStore } from 'vuex'

export default createStore({
  state: {
    slide: 0,
    users: [

    ], // ex. item: {username: 'Marty' , result: 2}
    activeUser: {},
    questions: [
      {
        text: 'Tekst pitanja 1',
        answers:
        [
          { text: 'oodgoovoor pod A' },
          { text: 'odgovor pod B ', isTrue: true },
          { text: 'odgovor pod C' },
          { text: 'odgovor pod D' }
        ]
      },
      {
        text: 'Tekst pitanja 1',
        answers:
        [
          { text: 'oodgoovoor pod A' },
          { text: 'odgovor pod B ' },
          { text: 'odgovor pod C' },
          { text: 'odgovor pod D', isTrue: true }
        ]
      }
    ]
  },
  getters: {
    slide: state => state.slide,
    activeUser: state => state.activeUser,
    question: state => state.questions[state.slide - 1], // active question
    questionsLength: state => state.questions.length,
    users: state => state.users
  },
  mutations: {
    incrementSlide (state) {
      state.slide++
    },
    setSlide (state, index) {
      state.slide = index
    },
    startQuiz (state, username) {
      const index = state.users.findIndex(u => u.username === username)
      if (index < 0) {
        state.users.push({ username, result: 0 })
        state.activeUser = state.users[state.users.length - 1]
        return
      }
      state.users[index].result = 0
      state.activeUser = state.users[index]
    },
    incrementResult (state) {
      state.activeUser.result += 1
    }
  },
  actions: {
    incrementSlide: ({ commit }) => {
      commit('incrementSlide')
    },
    startQuiz: ({ commit }, username) => {
      commit('startQuiz', username)
    },
    incrementResult: ({ commit }) => {
      commit('incrementResult')
    },
    setSlide: ({ commit }, index) => {
      commit('setSlide', index)
    }
  }

})
