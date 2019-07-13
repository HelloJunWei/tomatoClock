<template>
  <div class="todo-list">
    <div>
      <v-text-field label="ADD A NEW MISSION" background-color="white" color="#FF4384" solo class="text-input">
        <template v-slot:append>
          <i class="fas fa-plus icon"></i>
        </template>
      </v-text-field>
    </div>
    <div class="todo">
      <div class="todo-bar" @click="is_open = !is_open">
        <span>TO-DO</span>
        <i class="fas fa-sort-up open-icon" :class="{ 'is-open': is_open }"></i>
      </div>
      <div class="list">
        <div class="list-detail">
          a
        </div>
        <div class="list-detail">
          a
        </div>
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
      is_open: false
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="sass">
.todo-list
  padding-top: 48px
.text-input
  label
    font-weight: 550
    color: #FF4384 !important
  input
    color: #FF4384 !important
.todo
  margin-top: 48px
  .todo-bar
    height: 44px
    cursor: pointer
    background-color: #335A83
    display: flex
    justify-content: space-between
    align-items: center
    span
      margin-left: 16px
      color: white
      font-weight: 550
      font-size: 24px
    .open-icon
      display: flex
      margin-top: 7px
      margin-right: 16px
      color: white
      font-weight: 550
      font-size: 24px
      transition: .3s
    .is-open
      transform: rotate(180deg) translateY(10px)
  .list
    height: 190px
    overflow: scroll
    .list-detail
      &.list-detail
        color: white
        margin-top: 5px
        border-bottom: 3px solid rgba(0, 0, 0, .2)
</style>
