<template>
  <template v-if="store.getters.slide < 1">
    <Welcome />
  </template>
  <template v-else-if="store.getters.slide <= store.getters.questionsLength ">
    <Question />
  </template>
  <template v-else-if="store.getters.slide > store.getters.questionsLength">
    <Finish />
  </template>
</template>

<script>
import { useStore } from 'vuex'
import Question from '@/components/question.vue'
import Welcome from '@/components/welcome.vue'
import Finish from '@/components/finish.vue'
export default {
  name: 'HomeView',
  setup () {
    const store = useStore()
    return { store }
  },
  components: { Question, Welcome, Finish }
}
</script>
