<template>
    <div>
        <button @click="clickButton">Get Data </button>
    <div class="side-bar">
        <stock-card v-for="item in stocks" class="u-pull-left" :stockData="item"></stock-card>
    </div>
    </div>
</template>
<script>

import StockCard from './StockCard.vue'
import data from './../assets/data/trades.json'
import liveData from './../assets/data/live-data.json'
export default{
    data(){
      return {
           stocks : {}
      }
    },
    components : {
        'stock-card' : StockCard
    },
    sockets:{
        data: function(val){
            this.stocks = JSON.parse(val);
            //console.log("---"+val);
           // console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
    },
    methods: {
        clickButton: function(val){
            // $socket is socket.io-client instance
            this.$socket.emit('ticker', val);
        }
    }
}
</script>
<style scoped>
    .side-bar{
      max-height : 20rem;
    }
</style>