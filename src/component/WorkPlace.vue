<template>
  <v-container width-100>
    <v-layout row wrap>
      <v-flex lg12>
        <v-flex lg6>
          <v-text-field label="ADD A NEW MISSION" background-color="white" color="#FF4384" solo class="text-input">
            <template v-slot:append>
              <i class="fas fa-plus icon" @click="test"></i>
            </template>
          </v-text-field>
        </v-flex>
      </v-flex>
      <v-flex lg12 todo-side>
        <p class="big-title">
          the First thing to do today
        </p>
        <v-flex lg12>
          <p class="clock">
            25:00
          </p>
        </v-flex>
        <v-flex lg8 todo-list-side>
          <v-flex todo-list>
            <v-checkbox value="Google" color="#003164" class="checkbox-h">
              <template v-slot:label>
                <v-flex todo-single>
                  the second thing to do today
                  <span class="start-icon">
                    <i class="far fa-play-circle"></i>
                  </span>
                </v-flex>
              </template>
            </v-checkbox>
          </v-flex>
          <v-flex todo-list>
            <v-checkbox value="Google" color="#003164" class="checkbox-h">
              <template v-slot:label>
                <v-flex todo-single>
                  the second thing to do today
                  <span class="start-icon">
                    <i class="far fa-play-circle"></i>
                  </span>
                </v-flex>
              </template>
            </v-checkbox>
          </v-flex>
          <v-flex todo-list>
            <v-checkbox value="Google" color="#003164" class="checkbox-h">
              <template v-slot:label>
                <v-flex todo-single>
                  the second thing to do today
                  <span class="start-icon">
                    <i class="far fa-play-circle"></i>
                  </span>
                </v-flex>
              </template>
            </v-checkbox>
          </v-flex>
          <span class="more">
            MORE
          </span>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      radios: ''
    }
  },
  mounted () {
  },
  methods: {
    test () {
      // alert('abc')
    }
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
      margin-right: 38px;
      color: #FF4384;
      font-weight: 550;
      cursor: pointer;
    }
  }
}
</style>
