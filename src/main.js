import Vue from 'vue'
//noinspection JSUnresolvedVariable
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//import VueSocket from 'vue-socket.io'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'normalize-css'
import 'skeleton-css/css/skeleton.css'
import {routes} from './routes'
import VueChartJS from 'vue-chartjs'


var router = new VueRouter({
  routes
});

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(VueRouter);
//Vue.use(VueSocket, 'https://share-feed.herokuapp.com/goog');
Vue.use(VueChartJS);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
