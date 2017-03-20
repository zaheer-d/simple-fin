<template>
    <div class="side-bar">
        <stock-card v-for="item in stocks" class="u-pull-left" :stockData="item"></stock-card>
    </div>
</template>
<script>

import StockCard from './StockCard.vue'
import data from './../assets/data/trades.json'
export default{
    data(){
      return {
           stocks : data
      }
    },
    components : {
        'stock-card' : StockCard
    }
}
</script>
<style scoped>
    .side-bar{
      max-height : 20rem;
    }
</style>