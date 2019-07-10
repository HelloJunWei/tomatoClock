<template>
  <v-app class="width-100">
    <v-container px-0 py-0 style="min-width: 100%; max-width: 100%; padding-bottom: 30px">
      <v-layout row wrap height-100 px-0 py-0>
        <v-flex xs8 left-side height-100>
          <app-work-place></app-work-place>
        </v-flex>
        <v-flex xs4 right-side height-100>
          
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import workPlace from './WorkPlace'
export default {
  components: {
    appWorkPlace: workPlace
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
.left-side{
  padding-top: 48px;
  padding-left: 85px;
  // background-color: #FFEDF7;
}
.right-side{
  // background-color: #003164;
}
.width-100{
  background-color: transparent;
  z-index: 10;
  margin: 0 auto;
  width: 1280px;
  // height: 800px;
}
</style>
