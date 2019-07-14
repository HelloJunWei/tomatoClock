<template>
  <div class="ringtones">
    <div class="work">
      <div class="list-bar">
        <span>WORK</span>
      </div>
      <div class="menu">
        <v-radio-group v-model="work_m" row>
          <v-radio value="none" color="#FF4384" dark>
            <template v-slot:label>
              <span style="color: white">NONE</span>
            </template>
          </v-radio>
          <v-radio value="default" color="#FF4384" dark>
            <template v-slot:label>
              <span style="color: white">DEFAULT</span>
            </template>
          </v-radio>
        </v-radio-group>
      </div>
    </div>
    <div class="break">
      <div class="list-bar">
        <span>BREAK</span>
      </div>
      <div class="menu">
        <v-radio-group v-model="break_m" row>
          <v-radio value="none" color="#FF4384" dark>
            <template v-slot:label>
              <span style="color: white">NONE</span>
            </template>
          </v-radio>
          <v-radio value="default" color="#FF4384" dark>
            <template v-slot:label>
              <span style="color: white">DEFAULT</span>
            </template>
          </v-radio>
        </v-radio-group>
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
      work_m: 'none',
      break_m: 'default'
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="sass">
.ringtones
  margin-top: 45px
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
.break
  margin-top: 150px
</style>
