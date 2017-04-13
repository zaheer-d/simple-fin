<template>
    <div>
        <el-row>
            <el-col :span="1" :offset="2">
                <div>
                 <i :class="dailyMove" aria-hidden="true" style="font-size: 4rem;"></i>
                </div>
            </el-col>
            <el-col :span="10">
                <!--<el-badge :value="100" class="item">-->
                <h4 style="margin-left: 1rem;">{{stock.name}} - ({{stock.ticker}})</h4>
                <!--</el-badge>-->
            </el-col>
            <el-col :span="9">
                <el-button-group class="u-pull-right">
                    <el-button type="primary" icon="edit"></el-button>
                    <el-button type="primary" icon="share"></el-button>
                    <el-button type="primary" icon="delete"></el-button>
                </el-button-group>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="11" :offset="2">
                <el-card class="box-card">
                    <!--<div slot="header" class="clearfix">-->
                        <!--<span style="line-height: 36px;">Information</span>-->
                    <!--</div>-->
                    <el-tabs v-model="activeTab">
                        <el-tab-pane label="Basic" name="first">
                            <div style="height: 180px; width: 100%; overflow:hidden; overflow-y:scroll;">
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
                        </el-tab-pane>
                        <el-tab-pane label="More" name="second">
                            <div style="height: 180px; width: 100%; overflow:hidden; overflow-y:scroll;">
                                <table style="width:100%;">
                                    <tr>
                                        <td><strong>PE Ratio</strong></td>
                                        <td>{{stock.pe}}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Dividends</strong></td>
                                        <td>{{stock.divyield}}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Volume</strong></td>
                                        <td>{{stock.volume}}</td>
                                    </tr>
                                </table>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Settings" name="third">Role</el-tab-pane>
                        <el-tab-pane label="Notes" name="fourth">Task</el-tab-pane>
                    </el-tabs>

                </el-card>
            </el-col>
            <el-col :span="8" :offset="1">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">News Feed</span>
                    </div>
                    <div style="height: 165px; overflow:hidden; overflow-y:scroll;">
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
                        <span style="line-height: 36px;">Month to Date</span>
                    </div>
                    <div style="width: 100%;">
                        <stock-chart :chartData="chartData" :options="options"  style="max-height:30rem; padding: 2rem;"></stock-chart>
                    </div>
                </el-card>

            </el-col>
        </el-row>

    </div>
</template>

<script>
    import StockChart from './StockChart';
    import moment from 'moment';

    export default{
        data(){
            return {
                stock: '',
                chartData : {},
                options : {},
                activeTab: 'first'
            }
        },
        methods: {
            getData(ticker){
                var vm = this;

                var url = 'http://45.58.47.239:5000/api/shareprice/code/' + ticker;

                this.$http.get(url).then(response => {
                    var serverData = response.body.data.map(function (d) {
                        return d.share_price;
                    });
                    console.log(serverData);
                    // get body data

                    var sortedList = response.body.data.sort(function(a,b) {
                        return  new Date(a.pricing_date) - new Date(b.pricing_date);
                    })
                    var serverlabels = sortedList.map(function (d) {
                        return moment(d.pricing_date).format('DD-MMM');
                    });

                    console.log(sortedList);

                    vm.options =
                        {
                            responsive: true,
                            maintainAspectRatio: false,
                            title: {
                                display: false
                            },
                            legend : {
                                display : false
                            },
                            scales: {
                                yAxes: [{
                                    display : true,
                                    ticks: {
                                        maxTicksLimit : 10
                                    }
                                }]

                            },
                            gridLines : {
                                display:true
                            }


                        }

                    vm.chartData = {
                         labels : serverlabels,
                         datasets: [
                             {
                                 label: 'Price',
                                 fill: true,
                                 lineTension: 0,
                                 backgroundColor: '#ffe769',
                                 borderJoinStyle: 'miter',
                                 data: serverData,
                                 spanGaps: false,
                             }

                         ]
                    };

                }, response => {
                    // error callback
                });
            }
        },
        components: {
            'stock-chart': StockChart
        },
        computed: {
            dailyMove(){
                return (this.stock.change_percent >= 0) ? 'fa fa-arrow-circle-up' : 'fa fa-arrow-circle-down';
            }

        },
        sockets: {
            connect(){
                // console.log('connected -->');
            },
            data: function (val) {
                this.stock = JSON.parse(val)[0];
                console.log(val);
            }
        },
        created(){
            //console.log("created");
            //this.chartStock = this.$route.params.ticker;
            this.$socket.emit('ticker', this.$route.params.ticker);
            //this.getChartData();
        },
        mounted(){
            this.getData(this.$route.params.ticker);
        },
        beforeRouteLeave(to, from, next){
            delete this.$options.sockets.ticker;
            next();
        }

    }
</script>
<style scoped>
    .item {
        /*margin-top: 10px;*/
        /*margin-right: 50px;*/
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