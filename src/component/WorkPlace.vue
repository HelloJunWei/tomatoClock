<template>
  <v-container width-100 px-0 py-0>
    <v-layout row wrap>
      <v-flex lg12>
        <v-flex lg6>
          <v-text-field v-model="new_mission" label="ADD A NEW MISSION" background-color="white" color="#FF4384" solo class="text-input">
            <template v-slot:append>
              <i class="fas fa-plus icon" @click="addTodoList"></i>
            </template>
          </v-text-field>
        </v-flex>
      </v-flex>
      <v-flex lg12 todo-side>
        <p class="big-title" @click="delTodo(todo_list[0], 0)">
          {{ checkTodo }}
        </p>
        <v-flex lg12>
          <p class="clock">
            25:00
          </p>
        </v-flex>
        <v-flex lg6 todo-list-side>
          <v-flex todo-list v-for="(obj, index) in todo_list.slice(1)" :key="index">
            <v-checkbox color="#003164" class="checkbox-h">
              <template v-slot:label>
                <v-flex todo-single>
                  {{ obj.title }}
                  <span class="start-icon">
                    <i class="far fa-play-circle"></i>
                  </span>
                </v-flex>
              </template>
            </v-checkbox>
          </v-flex>
          <span class="more hover-line" @click="$router.push('/detail/todo')">
            MORE
          </span>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import mixin from './mixins'
export default {
  mixins: [mixin],
  data () {
    return {
      new_mission: '',
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.height-100{
  height: 100%;
}
.width-100{
  max-width: 100%;
  min-width: 100%;
}
.text-input{
  label{
    font-weight: 550;
  }
  input, label{
    color: #FF4384 !important;
  }
}
.icon{
  cursor: pointer;
  transition: .2s;
  color: #FF4384;
  &:active{
  transform: rotate(145deg);
  }
}
.todo-side{
  margin-top: 145px;
  .big-title{
    cursor: pointer;
    &::before{
      display: inline-block;
      position: relative;
      top: 25px;
      right: 5px;
      content: '';
      width: 48px;
      height: 48px;
      border: 2px solid;
      border-radius: 50%;
      border-color: #003164;
    }
    font-weight: 550;
    font-size: 24px;
    color: #003164;
  }
  .clock{
    font-size: 176px;
    color: #FF4384;
    font-weight: 550;
  }
  .todo-list-side{
    margin-top: 110px;
    margin-bottom: 50px;
    .todo-list{
      border-bottom: 1px solid;
      width: 445px;
      .todo-single{
        width: 400px;
        font-size: 16px;
        color: #003164;
        font-weight: 550
      }
      .checkbox-h{
        height: 30px;
      }
      .start-icon{
        float: right;
      }
    }
    .more{
      margin-top: 5px;
      float: right;
      color: #FF4384;
      font-weight: 550;
      cursor: pointer;
    }
  }
}
.hover-line {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  &::before{
    content: '';
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: #FF4384;
    height: 2px;
    transition-property: left, right;
    transition-duration: .1s;
    transition-timing-function: ease-out;
  }
  &:hover:before, &:focus:before, &:active:before{
    left: 0;
    right: 0;
  }
}
</style>
