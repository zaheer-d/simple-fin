<template>

  <div id="app" >
    <div class="navbar-fixed-top">
      <div class="navbar__toolbar" style="position: relative">
        <div style="font-size: 3rem; margin-left:5rem;" class="u-pull-left">Simply Fin</div>
        <div class="u-full-width" style="background-color: white; height: 6px; position: absolute; bottom: 0;">
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
          <div style="background-color: orchid;" class="navbar__bottomcolour"></div>
          <div style="background-color: cyan;" class="navbar__bottomcolour"></div>
        </div>
      </div>
      </div>

    <!--<div class="sidemenu u-pull-left">-->
      <!--hfkjhfjkkfjhfjf-->
    <!--</div>-->

    <div class="main__cards">
    <div class="routerview__movedown">
      <div>
        <router-view>
        </router-view>
      </div>
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
 }

.sidemenu{
  position : fixed;
  left:0;
  width:20rem;
  height: 100%;
  background-color: #262626;
}
.routerview__movedown{
  padding-top: 8rem;
}
.navbar-fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 999;
  background-color: white;
  height:50px;
}
.navbar__bottomcolour{
  width: 7.1%;
  height:2px;
  float: left;
}
.app__buttons{
  margin-right : 5rem;
}

.navbar__toolbar {
  height: 70px;
  background-color: white;
  color: #262626;
}

.main__cards {
  margin: auto;
  width: 80%;
}
</style>
