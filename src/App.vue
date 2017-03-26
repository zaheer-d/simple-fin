<template>

  <div id="app" class="container">
    <div class="navbar-fixed-top">
      <div class="container">
      <div class="row" style="height: 50px;">
        <div style="top: 0;">
          <span style="font-size: 3rem;" class="u-pull-left">Simply Fin</span>
          <div class="u-pull-right app__buttons">

          </div>
        </div>

      </div>
        <div style="background-color: white; height: 6px; vertical-align: top;">
          <div style="background-color: cyan;" class="navbar__bottomcolour"></div>
          <div style="background-color: orangered; " class="navbar__bottomcolour"></div>
          <div style="background-color: orchid;" class="navbar__bottomcolour"></div>
          <div style="background-color: orange;" class="navbar__bottomcolour"></div>
          <div style="background-color: greenyellow;" class="navbar__bottomcolour"></div>
          <div style="background-color: springgreen;" class="navbar__bottomcolour"></div>
          <div style="background-color: cyan; " class="navbar__bottomcolour"></div>
          <div style="background-color: orangered; " class="navbar__bottomcolour"></div>
          <div style="background-color: orchid;" class="navbar__bottomcolour"></div>
          <div style="background-color: orange;" class="navbar__bottomcolour"></div>
          <div style="background-color: greenyellow;" class="navbar__bottomcolour"></div>
          <div style="background-color: springgreen;" class="navbar__bottomcolour"></div>
        </div>
    </div>

      </div>
    <div class="row routerview__movedown">
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
  /*margin-top: 3rem;*/
}
.routerview__movedown{
  padding-top: 7rem;
}
.navbar-fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 999;
  background: white;
  height:50px;
  padding-top: 1rem;
}
.navbar__bottomcolour{
  width: 8%;
  height:1px;
  float: left;
}
.app__buttons{
  margin-right : 5rem;
}
</style>
