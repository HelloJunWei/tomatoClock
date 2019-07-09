<template>
  <v-app class="width-100">
    <v-container padding-0 style="min-width: 100%; max-width: 100%">
      <v-layout row wrap height-100 padding-0>
        <v-flex xs8 left-side height-100>
        </v-flex>
        <v-flex xs4 right-side height-100>
          
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
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
  background-color: #FFEDF7;
}
.right-side{
  background-color: #003164;
}
.width-100{
  width: 100%;
}
.padding-0{
  padding: 0;
}
</style>
