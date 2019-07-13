<template>
  <v-app class="width-100 app">
    <v-container px-0 py-0 width-100 pb-0>
      <v-layout row height-100 px-0 py-0>
        <v-flex height-100 blue-color></v-flex>
        <v-flex  height-100 d-flex width-1280>
          <v-flex left-side blue-color height-100>
            <app-operation></app-operation>
          </v-flex>
          <v-flex center-side blue-color height-100>
            <router-view></router-view>
          </v-flex>
          <v-flex right-side blue-color height-100>
            <app-back-icon></app-back-icon>
          </v-flex>
        </v-flex>
        <v-flex  height-100 blue-color></v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import appBackIcon from './BackIcon'
import appOperation from './Operation'
export default {
  components: {
    appBackIcon,
    appOperation
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
  width: calc(1280px - 445px - 275px);
  padding-left: 85px;
}
.center-side{
  width: 445px
}
.right-side{
  display: flex;
  justify-content: flex-end;
  width: 275px;
  padding-right: 85px;
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
.blue-color{
  background-color: #003164;
}
</style>
