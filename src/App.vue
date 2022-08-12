<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view :key="this.$route.fullPath"></router-view>
  </div>
</template>

<script>
import home from './components/home.vue'
import moviedetail from './components/moviedetail.vue'


export default {
  name: 'App',
  components: {
    home,
    moviedetail
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
