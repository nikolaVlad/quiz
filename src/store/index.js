import { createStore } from 'vuex'

export default createStore({
  state: {
    slide: 0,
    users: [
    ], // ex. item: {username: 'Marty' , result: 2}
    activeUser: {},
    questions: [
      {
        text: 'What is the capital of Malta?',
        answers:
          [
            { text: 'Mdina' },
            { text: 'Valletta', isTrue: true },
            { text: 'Birgu' },
            { text: 'Senglea' }
          ]
      },

      {
        text: 'Malta is a country in the Mediterranean Sea. Which country is north of the Maltese Archipelago?',
        answers:
          [
            { text: 'Italy', isTrue: true },
            { text: 'Tunisia' },
            { text: 'Libya' },
            { text: 'Serbia' }
          ]
      },

      {
        text: 'How many inhabited islands make up the Republic of Malta?',
        answers:
          [
            { text: '1' },
            { text: '2' },
            { text: '3', isTrue: true },
            { text: '4' }
          ]
      },

      {
        text: 'What are the colours of Malta national flag?',
        answers:
          [
            { text: 'Red and Blue' },
            { text: 'White and Blue' },
            { text: 'Green and White' },
            { text: 'Red and White', isTrue: true }
          ]
      },

      {
        text: 'On which year did Malta gain its independence?',
        answers:
          [
            { text: '1979' },
            { text: '1968' },
            { text: '1974' },
            { text: '1964', isTrue: true }
          ]
      },

      {
        text: 'Which Maltese town is the most populated?',
        answers:
          [
            { text: 'Birkirkara', isTrue: true },
            { text: 'Silema' },
            { text: 'Valletta' },
            { text: 'Qormi' }
          ]
      },

      {
        text: 'To which year does Malta history date back?',
        answers:
          [
            { text: '800 BC' },
            { text: '3800 BC', isTrue: true },
            { text: '50 BC' },
            { text: '400 AD' }
          ]
      },

      {
        text: 'What was the old capital of Malta?',
        answers:
          [
            { text: 'Mdina', isTrue: true },
            { text: 'Valletta' },
            { text: 'Dingli' },
            { text: 'Silema' }
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
