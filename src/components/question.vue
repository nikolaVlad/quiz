<template>
  <div class="wrapper">
    <div class="question-counter">
      Question: <span>{{store.getters.slide}}</span>/ <span>10</span>
    </div>
    <hr style="width: 100%" />
    <div class="main-place">
      <div class="question-place">
        <h1 class="question-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          velit quisquam, minus, iste rerum veritatis est blanditiis adipisci
          laudantium amet voluptatum eum fuga, officiis similique reiciendis
          aspernatur magni placeat deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          velit quisquam, minus, iste rerum veritatis est blanditiis adipisci
          laudantium amet voluptatum eum fuga, officiis similique reiciendis
          aspernatur magni placeat deserunt.
         </h1>
      </div>
      <div class="answers-place">
        <div class="answer-text selected">Lorem 1</div>
        <div class="answer-text">Lorem 2</div>
        <div class="answer-text">Lorem 3</div>
        <div class="answer-text">Lorem 4</div>
      </div>
    </div>
    <div class="actions">
      <button @click="onPrevious()" class="secondary-button">{{ "< " }}Previous</button>
      <button @click="onNext()" class=" primary-button">Next ></button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'question-component',
  setup () {
    const store = useStore()

    const onNext = () => {
      store.dispatch('incrementSlide')
    }

    const onPrevious = () => {
      store.dispatch('decrementSlide')
    }
    return { store, onNext, onPrevious }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;

  .main-place {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    padding-top: 80px;
    @media screen and (max-width: 800px) {
      padding: 0px 8px;
      margin-top: 10px;
    }

    .question-place{
      margin-bottom: 40px;
      overflow: scroll;
      height: 300px;

      @media screen and (max-width: 800px) {
      height: 200px;

      }
      h1
      {
        font-size: 1.6rem;
        font-weight: 200;
        @media screen and (max-width: 800px) {
          font-size: 1.1rem;
        }
      }
    }
    .answers-place{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 40px;
      gap: 20px 30px;
      @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
        font-size: 0.7rem;

    }
      .answer-text
      {
        border: 1px solid rgba(23, 107, 186, 0.707);
        flex: 1;
        margin: 10px 0px;
        width: 100%;
        padding: 20px;
        border-radius: 10px;
        min-width: 300px;
        text-align: center;
        cursor: pointer;

        &.selected
        {
          background: rgba(23, 107, 186, 0.707);
        }

        @media screen and (max-width: 800px) {
          flex: 0;
          padding: 10px ;
        }
      }
    }
  }
}
</style>
