<template>
    <div>
        <el-row>
        <stock-card v-for="item in stocks" :stockData="item" :key="item.id"></stock-card>
        </el-row>
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
    created(){
        this.$socket.emit('ticker', '');
    }
}
</script>
<style scoped>

</style>