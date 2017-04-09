<template>
    <div>
        <el-row>
            <el-col :span="1" :offset="2">
                <div>
                    <i :class="dailyMove" aria-hidden="true" style="font-size: 4rem;"></i>
                </div>
            </el-col>
            <el-col :span="18" >
                <h4>{{stock.name}} - ({{stock.ticker}})</h4>

            </el-col>

        </el-row>

        <el-row>
            <el-col :span="11" :offset="2">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">Information</span>
                    </div>
                    <div style="height: 150px; width: 100%; overflow:hidden; overflow-y:scroll;">
                        <table style="width:100%;">
                            <tr>
                                <td><strong>Price</strong></td>
                                <td>{{stock.price}}</td>
                            </tr>
                            <tr>
                                <td><strong>Price Change</strong></td>
                                <td>{{stock.change}} ({{stock.change_percent}}%)</td>
                            </tr>
                            <tr>
                                <td><strong>Yield</strong></td>
                                <td>{{stock.yield}}</td>
                            </tr>
                        </table>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8" :offset="1">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">News Feed</span>
                    </div>
                    <div style="height: 150px; overflow:hidden; overflow-y:scroll;">
                    <div v-for="o in 20">
                        {{'List item ' + o }}
                     </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    <el-row>
        <br>
        <br>
        <el-col :span="20" :offset="2">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">10 Day Price Chart</span>
                </div>
                <div style="width: 100%;">
                    <stock-chart style="max-height:20rem;"></stock-chart>
                </div>
            </el-card>

        </el-col>
    </el-row>

    </div>
</template>

<script>
   import StockChart from './StockChart';

    export default{
        data(){
          return {
              stock : ''
          }
        },
        components:{
            'stock-chart' : StockChart
        },
        computed: {
            dailyMove(){
                return (this.stock.change_percent >= 0) ? 'fa fa-arrow-circle-up' : 'fa fa-arrow-circle-down';
            }
        },
        sockets:{
            connect(){
               // console.log('connected -->');
            },
            data: function(val){
                this.stock = JSON.parse(val)[0];
                console.log('--->'+val);
            }
        },
        created(){
            //console.log(this.$route.params.ticker);
            this.$socket.emit('ticker', this.$route.params.ticker);
        },
        beforeRouteLeave (to, from, next) {
            delete this.$options.sockets.ticker;
            next();
        }

    }
</script>
<style scoped>
    .detail__chart{
        width: 100%;
        border : 0px solid gray;
    }
    .fa-arrow-circle-up {
        color: #1acc41;
        margin-right: 4px;
    }

    .fa-arrow-circle-down {
        color: #ae0001;
        margin-right: 4px;
    }
</style>