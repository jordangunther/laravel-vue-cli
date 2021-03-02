<template>
  <div class="c-button-screen">
      Testing button screen
      <btn type="primary">test button</btn>
  </div>
</template>

<script>
    import Btn from '@/components/button/Btn'
  export default {
    name: "ButtonScreen",
      components: {
        Btn
      }
  }
</script>


<style lang="scss" scoped>
    .c-button-screen {
        background-color: $black;
    }
</style>
