<template>
  <div class="operation">
    <div class="operation-icon">
      <div class="icon-list" :class="{now: todo}" @click="changeColor('/detail/todo')">
        <i class="fas fa-list icon-size"></i>
        <p class="icon-text">TO-DO LIST</p>
      </div>
      <div class="icon-list" :class="{now: analytics}" @click="changeColor('/detail/analytics')">
        <i class="fas fa-chart-bar icon-size"></i>
        <p class="icon-text">ANALYTICS</p>
      </div>
      <div class="icon-list"  :class="{now: ringtones}" @click="changeColor('/detail/ringtones')">
        <i class="fas fa-music icon-size"></i>
        <p class="icon-text">RINGTONES</p>
      </div>
    </div>
    <div class="operation-clock">
      <div class="big-clock">
        <div class="little-clock">
          <i class="fas fa-play start-icon" @click="$router.push('/')"></i>
        </div>
      </div>
      <p class="time">
        25 : 00
      </p>
      <p class="todo">
        the First thing to do today
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      todo: true,
      analytics: false,
      ringtones: false
    }
  },
  mounted () {
    this.changeColor(this.$route.name)
  },
  methods: {
    changeColor (name) {
      this.$router.push(name)
      let routerName = this.$route.name
      switch (routerName) {
        case 'todo':
          this.todo = true
          this.analytics = false
          this.ringtones = false
          break
        case 'analytics':
          this.todo = false
          this.analytics = true
          this.ringtones = false
          break
        case 'ringtones':
          this.todo = false
          this.analytics = false
          this.ringtones = true
          break
      }
    }
  }
}
</script>

<style scoped lang="sass">
.operation
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between
  .operation-icon
    margin-top: 48px
    .icon-list
      display: flex
      align-items: center
      color: rgba(255, 255, 255, .2)
      cursor: pointer
      .icon-size
        font-size: 24px
      .icon-text
        font-weight: 550
        font-size: 36px
        margin: 0
        margin-left: 12px
      &.icon-list
        margin-top: 42px
    .now
      color: #FF4384
  .operation-clock
    position: relative
    background-color: #FFEDF7
    border-radius: 200px 200px 0 0
    width: 350px
    height: 175px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    z-index: 0
    .big-clock
      position: absolute
      display: flex
      justify-content: center
      align-items: center
      top: -25%
      z-index: 2
      left: 50%
      transform: translateX(-50%)
      width: 120px
      height: 120px
      border-radius: 50%
      background-color: #FF4384
      border: 7px solid #003164
      .little-clock
        z-index: 2
        width: 96px
        height: 96px
        border-radius: 50%
        display: flex
        justify-content: center
        align-items: center
        background-color: #FF4384
        border: 7px solid #003164
        .start-icon
          color: white
          font-size: 30px
          cursor: pointer
          transition: .2s
          transform: translateX(15%)
          &:hover
            transform: scale(1.2) translateX(2px)
          &:active
            transform: scale(.9) translateX(2px)
    .time
      font-size: 55px
      margin: 0
      margin-top: 55px
      color: #FF4384
      font-weight: 550
    .todo
      color: #003164
      margin: 0
      font-size: 16px
      font-weight: 550
</style>
