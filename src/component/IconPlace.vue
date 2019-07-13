<template>
  <v-layout row justify-end height-100>
    <div class="icon-side">
      <div class="icon-list">
        <i class="fas fa-list icon-margin" @click="$router.push('/detail/todo')"></i>
        <i class="fas fa-chart-bar icon-margin" @click="$router.push('/detail/analytics')"></i>
        <i class="fas fa-music icon-margin" @click="$router.push('/detail/ringtones')"></i>
      </div>
      <p class="logo">POMODORO</p>
    </div>
  </v-layout>
</template>
<script>
export default {
  components: {

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

<style lang="scss">
.icon-side{
  display: flex;
  flex-direction: column;
  margin-right: 85px;
  font-size: 35px;
  align-items: flex-end;
  justify-content: space-between;
  .icon-list{
    color: white;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    .icon-margin{
      margin: 10px 0;
      cursor: pointer;
    }
  }
}
.logo{
  color: white;
  writing-mode: vertical-lr;
  font-size: 24px;
  font-weight: 550;
}
.height-100{
  height: 100%;
}
</style>
