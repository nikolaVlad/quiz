import { createStore } from 'vuex'

export default createStore({
  state: {
    slide: 0,
    users: [], // ex. item: {username: 'Marty' , result: 2}
    activeUser: {},
    questions: [
      {
        text: 'Test question',
        answers: [
          { text: 'netacnoo' },
          { text: 'tacnoo', isTrue: true },
          { text: 'test pod c' },
          { text: 'test pod d' }
        ]
      },
      {
        text: 'Test question 222222',
        answers: [
          { text: 'netacnoo' },
          { text: 'tacnoo', isTrue: true },
          { text: 'test pod c' },
          { text: 'test pod d' }
        ]
      },
      {
        text: 'Test question 3333',
        answers: [
          { text: 'netacnoo' },
          { text: 'netacno' },
          { text: 'tacnoo', isTrue: true },
          { text: 'test pod d' }
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
