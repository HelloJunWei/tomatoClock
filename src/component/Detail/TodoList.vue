<template>
  <div class="todo-list">
    <div>
      <v-text-field v-model="new_mission" label="ADD A NEW MISSION" background-color="white" color="#FF4384" solo class="text-input">
        <template v-slot:append>
          <i class="fas fa-plus icon" @click="addTodoList"></i>
        </template>
      </v-text-field>
    </div>
    <div class="todo">
      <div class="list-bar" @click="is_open = !is_open">
        <span>TO-DO</span>
        <i class="fas fa-sort-up open-icon" :class="{ 'is-open': is_open }"></i>
      </div>
      <div class="list">
        <div class="list-detail" v-for="(obj, index) in todo_list" :key="index">
          <i class="far fa-circle circle-icon" @click="delTodo(obj, index)"></i>
          <span>{{ obj.title }}</span>
          <i class="far fa-play-circle play-circle"></i>
        </div>
      </div>
    </div>
    <div class="done">
      <div class="list-bar" @click="is_open_done = !is_open_done">
        <span>DONE</span>
        <i class="fas fa-sort-up open-icon" :class="{ 'is-open': is_open_done }"></i>
      </div>
      <div class="list">
        <div class="list-detail" v-for="(obj, index) in done_list" :key="index">
          <i class="far fa-check-circle circle-icon"></i>
          <span class="done-text">{{ obj.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mixin from '../mixins'
export default {
  mixins: [mixin],
  data () {
    return {
      is_open: true,
      is_open_done: true
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
.list-bar
  height: 44px
  cursor: pointer
  background-color: rgba(255, 255, 255, .2)
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
    margin-top: 15px
    .circle-icon
      font-size: 20px
      cursor: pointer
    span
      margin-left: 5px
      font-size: 16px
      font-weight: 550
    .done-text
      text-decoration: line-through  
    .play-circle
      cursor: pointer
      font-size: 20px
      color: white
      float: right  
    &.list-detail
      color: white
      border-bottom: 1px solid rgba(255, 255, 255, .2)
.done
  margin-top: 100px
</style>
