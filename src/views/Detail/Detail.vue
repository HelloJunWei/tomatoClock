<template>
  <app-detail></app-detail>
</template>

<script>
import appDetail from '../../component/Detail/Detail'
export default {
  components: {
    appDetail
  },
  mounted () {
    this.$store.dispatch('task/getTodo')
    this.$store.dispatch('task/getDone')
  }
}
</script>

<style scoped lang="scss">
</style>
