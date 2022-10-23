<template>
  <div class="wrapper">
    <div class="title">Quiz Game</div>
    <div>
      <h1>
        {{ result }}
      </h1>
    </div>
    <div class="actions-place replay">
      <button style="background-color: green; color: white">
        Try one more time
      </button>
      <button class="secondary-button">Exit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'finish-component',

  setup () {
    const result = 'You were better then 60% of all quizer!'

    return { result }
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
