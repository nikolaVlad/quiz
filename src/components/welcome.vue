<template>
  <div class="wrapper">
    <div class="title">Quiz Game</div>
    <p class="description">Welcome to the Quiz game. Answer the questions and enjoy. :) </p>
    <div class="input-place">
      <input v-model="username" class="input-text" type="text" placeholder="Your username" />
    </div>
    <div class="start-place">
      <button :disabled="username.length === 0" @click="onStart()" class="start-button primary-button">
      Start
    </button>

    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  name: 'welcome-component',
  setup () {
    const store = useStore()
    const username = ref('')

    const onStart = () => {
      store.dispatch('startQuiz', username.value)
      store.dispatch('incrementSlide')
    }

    return { onStart, username }
  }
}
</script>

<style lang='scss' scopped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 90vh;

  .title {
    margin: 50px auto;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    font-weight: 600;

    @media screen and (max-width: 800px) {
      font-size: 1.8rem;
    }

  }

  p
  {
    text-align: center;
    margin-bottom: 60px;
  }

  .input-place
  {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .start-place
  {
    display: flex;
    justify-content: center;

    button{
      width: 150px;
    }
  }
}
</style>
