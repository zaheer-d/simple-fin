<template>

  <div id="app" class="container">
    <div class="row">
      <h3 class="u-pull-left">Simply Fin</h3>
      <div class="u-pull-right app__buttons">
        <a class="button button-primary"  href="#">About</a>
        <a class="button button-primary"  href="#">Settings</a>
      </div>
    </div>
    <div class="row">
      <div class="twelve columns">
        <router-view>
        </router-view>
      </div>
    </div>
  </div>

</template>

<script>
import Main from './components/Main.vue'
import SideBar from './components/SideBar.vue'
export default {
  name: 'app',
  components : {
  'app-main' : Main,
  'app-sidebar' : SideBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 2rem;
}
.app__buttons{
  margin-right : 5rem;
}
</style>
