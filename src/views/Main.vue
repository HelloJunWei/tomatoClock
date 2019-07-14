<template>
  <app-main></app-main>
</template>

<script>
import Main from '../component/Main.vue'
export default {
  components: {
    appMain: Main
  },
  mounted () {
    this.$store.dispatch('task/getTodo')
    this.$store.dispatch('task/getDone')
  }
}
</script>

<style scoped lang="scss">
</style>
