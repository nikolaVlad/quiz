<template>
  <div v-show="mirrorIsShow" ref="mirrorRef" ></div>
  <div ref="questionRef" class="wrapper">
    <div class="question-counter">
      Question: <span style="color: aqua">{{store.getters.slide}}</span>/ <span>{{store.getters.questionsLength}}</span>
    </div>
    <hr style="width: 100%" />
    <div style="color: aqua">{{store.getters.activeUser.username}}</div>
    <div class="main-place">
      <div class="question-place">
        <h1 class="question-text">
          {{store.getters.question.text}}
         </h1>
      </div>
      <div class="answers-place" >
        <div v-for="(answerObj, index) of store.getters.question.answers" :key="index" @click="setAnswerAndIndex(answerObj, index )" :class="
          ['answer-text', {selected: index == answerIndex } ]">{{answerObj.text}}</div>
      </div>
    </div>
    <div class="actions">
      <button :disabled="answerIndex < 0" @click="onNext()" class=" primary-button">Next</button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  name: 'question-component',
  setup (props, ctx) {
    const store = useStore()

    const answerIndex = ref(-1) // index of curreent answer
    const answer = ref(null) // Answer data of current question

    // template reft
    const questionRef = ref(null)
    const mirrorRef = ref(null)

    const mirrorIsShow = ref(false)

    const setAnswerIndex = (index) => {
      answerIndex.value = index
    }

    const setAnswer = (answerObj) => {
      answer.value = answerObj
    }

    const setAnswerAndIndex = (answerObj, index) => {
      setAnswer(answerObj)
      setAnswerIndex(index)
    }

    const animate = () => {
      mirrorRef.value.style.display = 'block'
      mirrorRef.value.innerHTML = questionRef.value.outerHTML
      window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
      })

      setTimeout(() => {
        mirrorRef.value.style.display = 'none'
        mirrorIsShow.value = false
      }, 1000)
    }

    const onNext = () => {
      if (store.getters.slide < store.getters.questionsLength) {
        animate()
      }
      if (answer?.value?.isTrue) {
        store.dispatch('incrementResult')
      }
      setAnswerIndex(-1)
      store.dispatch('incrementSlide')
    }

    return { store, onNext, answerIndex, setAnswerIndex, setAnswer, setAnswerAndIndex, mirrorRef, questionRef, mirrorIsShow }
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
      height: 200px;
      overflow: hidden;

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
      margin-bottom: 5px;
      gap: 10px 20px;
      @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
      margin-bottom: 25px;
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
