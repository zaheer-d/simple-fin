<template>

  <div id="app">

    <div class="navbar-fixed-top">
    <div class="navbar__toolbar" style="position: relative">
      <el-menu  class="el-menu-demo" mode="horizontal" theme="dark">
        <div class="header__home-title u-pull-left">Portfolio Tracker</div>
        <el-submenu index="2">
          <template slot="title">Manage</template>
          <el-menu-item index="2-1">My Portfolio</el-menu-item>
          <el-menu-item index="2-2">Tickers</el-menu-item>
          <el-menu-item index="2-3">Reports</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">Import</el-menu-item>
      </el-menu>
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

        <router-view class="main__cards routerview__movedown">
        </router-view>

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

.navbar__toolbar {
  height: 70px;
  background-color: white;
  color: #262626;
}

.main__cards {
  width: 100%;
}

.header__home-title {
  font-size: 2rem;
  color: white;
  margin-top: 1.2rem;
  margin-left: 2rem;
}
.header__home-title :hover {
  border : none;
}
</style>
