import Vue from 'vue'
//noinspection JSUnresolvedVariable
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSocket from 'vue-socket.io'

import 'normalize-css'
import 'skeleton-css/css/skeleton.css'
import {routes} from './routes'

var router = new VueRouter({
  routes
});

Vue.use(VueRouter);
Vue.use(VueSocket, 'http://45.58.47.239:9000');

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
