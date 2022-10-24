<template>
  <div class="wrapper">
    <div class="title">Quiz Game</div>

    <h1>
      <span style="color: aqua">{{store.getters.activeUser.username}}</span> {{ resultText }}
    </h1>

    <div>
      Number of correct answers is: <span style="color: aqua; font-weight:800">{{store.getters.activeUser.result}} </span></div>
    <div>
    </div>
    <div class="actions-place">
      <button @click="onStart" style="background-color: green; color: white">
        Try one more time
      </button>
      <button @click="onExit" class="secondary-button">Exit</button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'finish-component',

  setup () {
    const store = useStore()
    const resultText = ref('')
    const onExit = () => {
      store.commit('setSlide', 0) // Exit
      console.log(store.getters.users)
    }

    const onStart = () => {
      store.commit('startQuiz', store.getters.activeUser.username)
      store.commit('setSlide', 1) // Try again
    }

    const calculateResult = () => {
      const otherUsers = store.getters.users.filter(u => u.username !== store.getters.activeUser.username)

      const worseUsers = otherUsers.filter(u =>
        u.result <= store.getters.activeUser.result)

      const betterInPercent = (worseUsers.length / otherUsers.length) * 100

      resultText.value = `you were better then  ${isNaN(Math.floor(betterInPercent)) ? 100 : Math.floor(betterInPercent)}% of all quizer`
    }

    onMounted(() => {
      calculateResult()
    })

    return { resultText, store, onExit, onStart }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 25px;

  .actions-place {
    padding: 20px;

    * {
      margin: 1px 20px;
      font-size: 1.1rem;
      padding: 10px;

    }

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 0.8rem;
      padding: 0px;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 1rem;
      font-weight: 100;
      text-align: center;
    }
  }

}
</style>
