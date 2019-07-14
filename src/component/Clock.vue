<template>
  <div class="clock-block">
    <div class="big-clock">
      <div class="little-clock">
        <i class="fas fa-play-circle start-icon" @click="start"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {

  },
  data () {
    return {
      right: '174px'
    }
  },
  mounted () {
    const that = this
    // that.calcRight()
    // window.onresize = function tmp () {
    //   that.calcRight()
    // }
  },
  methods: {
    calcRight () {
      let width = window.innerWidth
      console.log(width)
      if (width > 1280) {
        this.right = '174px'
      } else {
        this.right = '174px'
      }
    },
    start () {
      helper().error('尚未實作')
    }
  }
}
</script>

<style lang="sass" scoped>
  .clock-block
    position: absolute
    top: 180px
    right: 174px
    width: 540px
    height: 540px
    .big-clock
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      height: 100%
      border-radius: 50%
      border: 4px solid #FF4384
    .little-clock
      width: 95%
      height: 95%
      border-radius: 50%
      background-color: #FF4384
      display: flex
      justify-content: center
      align-items: center
      .start-icon
        color: white
        font-size: 100px
        cursor: pointer
        transition: .2s
        &:hover
          transform: scale(1.2)
        &:active
          transform: scale(.9)
</style>
