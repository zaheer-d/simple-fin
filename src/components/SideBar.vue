<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="u-pull-right" style="margin-right: 70px; width: 450px;">
                    <el-input placeholder="Search for tickers">
                    </el-input>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <stock-card v-for="item in stocks" :stockData="item" :key="item.id"></stock-card>
        </el-row>
    </div>
</template>

<script>
    import StockCard from './StockCard.vue'
    //import data from './../assets/data/trades.json'
    //import liveData from './../assets/data/live-data.json'
    export default{
        data(){
            return {
                stocks: {},
                input2: ''
            }
        },
        methods: {
            handleIconClick(ev) {
                console.log(ev);
            },

            getStockData(){
               // console.log('getStockData---->');

                const url = 'https://share-feed.herokuapp.com/goog';
//                var url = 'http://45.58.47.239:5000/shareprice/code/' + ticker;

                this.$http.get(url).then(response => {
                    //console.log(response.body);
                    this.stocks = response.body;
//                    response.body.data.map(function (d) {
//
//                        console.log(this.stocks);
//                    });

            });
        }
        },
        components: {
            'stock-card': StockCard
        },
//        sockets: {
//            data: function (val) {
//                this.stocks = JSON.parse(val);
//                console.log(val);
//                // console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
//            }
//        },
        mounted(){
            this.getStockData();
        }
            //this.$socket.emit('ticker', '');

    }
</script>

<style scoped>

</style>