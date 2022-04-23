<template>
  <div
    @click="() => {}"
    @touchstart="() => {}"
    @touchmove="() => {}"></div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        msg: '?',
        a: 1,
        b: 2,
        c: 3,
      }
    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
