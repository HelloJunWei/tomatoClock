<template>
  <div class="back-icon">
    <i class="fas fa-times icon-cross" @click="$router.push('/')"></i>
    <p class="logo">POMODORO</p>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="sass">
.back-icon
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  color: white
  width: 48px
  .icon-cross
    cursor: pointer
    font-size: 30px
    margin-top: 48px
    transition: .3s
    &:hover
      transform: rotate(90deg)
  .logo
    writing-mode: vertical-lr
    font-size: 24px
    margin-bottom: 48px
    font-weight: 550

</style>
