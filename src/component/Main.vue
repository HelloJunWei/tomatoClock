<template>
  <v-app class="width-100 app">
    <v-container px-0 py-0 width-100 pb-0>
      <v-layout row height-100 px-0 py-0>
        <v-flex height-100 pink-color></v-flex>
        <v-flex  height-100 d-flex width-1280>
          <v-flex lg8 left-side pink-color height-100>
            <app-work-place></app-work-place>
          </v-flex>
          <v-flex right-side blue-color height-100>
            <app-icon-place></app-icon-place>
          </v-flex>
          <app-clock></app-clock>
        </v-flex>
        <v-flex  height-100 blue-color></v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import appWorkPlace from './WorkPlace'
import appIconPlace from './IconPlace'
import appClock from './Clock'
export default {
  components: {
    appWorkPlace,
    appIconPlace,
    appClock
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

<style scoped lang="scss">
.height-100{
  height: 100%;
}
.app{
  background-color: transparent;
  margin: 0 auto;
  height: 800px;
}
.left-side{
  width: calc(1280px - 450px);
  padding-top: 48px;
  padding-left: 85px;
}
.right-side{
  width: 450px
}
.width-100{
  max-width: 100%;
  min-width: 100%;
}
.width-1280{
  position: relative;
  width: 1280px;
  border: 1px solid;
}
.pink-color{
  background-color: #FFEDF7;
}
.blue-color{
  background-color: #003164;
}
</style>
