<template>
  <template v-if="store.getters.slide < 1">
    <Welcome />
  </template>
  <template v-else>
    <Question />
  </template>
</template>

<script>
import { useStore } from 'vuex'
import Question from '@/components/question.vue'
import Welcome from '@/components/welcome.vue'
export default {
  name: 'HomeView',
  setup () {
    const store = useStore()
    return { store }
  },
  components: { Question, Welcome }
}
</script>
