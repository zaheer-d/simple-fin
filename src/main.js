import Vue from 'vue'
//noinspection JSUnresolvedVariable
import App from './App.vue'
import VueRouter from 'vue-router'

import 'normalize-css'
import 'skeleton-css/css/skeleton.css'
import {routes} from './routes'

var router = new VueRouter({
  routes
});

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
