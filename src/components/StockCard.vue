<template>
    <div style="margin-right: 5rem; margin-left: 5rem;">
        <el-col :span="3" :xs="10" :sm="3" :md="3" :lg="3">
        <div class="card container" :style="cardBorderStyle" @click="ShowMain">
            <div class="row">
                <div class="twelve columns">
                    <div :style="styleClass" style="height: 6px;"></div>
                </div>
                <div class="twelve columns">
                    <div class="u-pull-left card__ticker" style="margin-left: 5px;">{{ stockData.ticker }}</div>
                   <!--<a :href="stockLink" target="_blank" class="u-pull-right">Open</a>-->
               </div>
                <div class="twelve columns">

                    <div class="u-pull-left card__ticker"
                         style="font-size:1.2rem; margin-left:5px;text-overflow:ellipsis; width: 11rem; white-space: nowrap;overflow: hidden;">{{ stockData.name }}</div>
                    <!--<a :href="stockLink" target="_blank" class="u-pull-right">Open</a>-->
                </div>
                <div class="twelve columns">
                    <div class="u-pull-left" style="font-size:1.2rem; margin-left:5px;text-overflow:ellipsis; width: 11rem; white-space: nowrap;overflow: hidden;">{{ stockData.sector_name }}</div>
                    <!--<a :href="stockLink" target="_blank" class="u-pull-right">Open</a>-->
                </div>
                <div class="twelve columns">
                    <div class="card__dailyMove u-pull-right">
                        <i :class="dailyMove" aria-hidden="true"></i>{{ stockData.change_percent }}%
                    </div>
                </div>
                <div class="twelve columns">
                    <div class="card__price u-pull-right">{{stockData.price | displayCurrency}}</div>
                </div>
            </div>
            <!--<div class="tooltiptext container">-->
                <!--<div class="row">-->
                    <!--<div class="twelve columns u-pull-left u-full-width" style="margin-left:5px;text-overflow:ellipsis; width: 130px; white-space: nowrap;overflow: hidden;">-->
                        <!--<b>{{stockData.name}}</b> <br>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="row">-->
                    <!--<div class="seven columns u-pull-left" style="margin-left:5px; padding-top: 5px">-->
                        <!--<b class="tooltip__subdetailtext">Avg. {{stockData.price | displayCurrency}}</b> <br>-->
                        <!--<b class="tooltip__subdetailtext">Shares. {{stockData.id}}</b>-->
                    <!--</div>-->
                    <!--<div class="five columns u-pull-right">-->
                        <!--<div class="tooltip__movement">-->
                            <!--<div style="text-align: center;">-->
                                <!--<i :class="dailyMove" aria-hidden="true"></i>-->
                                <!--<p>{{ stockData.change_percent }}%</p>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->

        </div>
        </el-col>
    </div>
</template>
<script>
    //import sectors from '../assets/data/sharesectors.json';

    export default{
        props: ['stockData'],
        data(){
            return {
                SectorId : -1,
                stockLink : 'http://localhost:8080/#/detail/'+this.stockData.ticker,
                styleClass: {
                    'background-color': this.getRandomColour('')
                },
                cardBorderStyle : {
                    'border' : '2px solid ' + this.getRandomColour('')
                }
            }
        },
        methods: {
            getRandomColour(stock){
                const colours = ['#a8e6cf', '#dcedc1',
                    '#ffd3b6', '#ffaaa5', '#00aedb', '#ff8b94', '#ebef89',
                    '#92eacc', '#8ec127', '#62d7d2', '#abb1e8',
                    '#f47835', '#d0e4b7','#d41243'];

               // console.log(this.stockData.sector_id);
                let sectorId = (this.stockData.sector_id !== undefined) ? this.stockData.sector_id : 13;
                // console.log(sectorId + '---'+success.data.data.length);
                return colours[sectorId];
                //let sectorId = this.getSectorById(this.stockData.id);
                //return colours[sectorId];
                //console.log(stock);
//                let vm = this;
//                this.$http.get('http://45.58.47.239:5000/api/sharesector/id/'+this.stockData.id).then(success => {
//                   // console.log(success);
//
//                    //console.log(vm.styleClass);
//
//                }, error => {
//                    console.log('error getting sectors '+error.message);
//                    vm.styleClass = {'background-color' : colours[13]};
//                });
                // var random = Math.floor(Math.random() * (13 - 0 + 1)) + 0;
                //random = Math.floor(Math.random() * (random - 0 + 1)) + 0;

            },
            getSectorById(shareId){
                let i;
                for (i = 0; sectors.data.length > i; i += 1){
                    if (sectors.data[i].share_id === shareId){
                        return sectors.data[i].sector_id;
                    }
                }
                return 13;
            },

            ShowMain(){
                //console.log('Show details clicked '+this.stockData.ticker);
                this.$router.push({ name : 'detail', params : {ticker: this.stockData.ticker}});
            }
        },
        computed: {

            dailyMove(){
                return (this.stockData.change_percent >= 0) ? 'fa fa-arrow-up' : 'fa fa-arrow-down';
            }

        },
        filters: {
            displayCurrency(val){
                return 'R ' + val;
            }
        },

    }
</script>

<style scoped>
    .card {
        border: 1px solid #2A334F;
        width: 12rem;
        height: 16rem;
        margin: 0.5rem;
        cursor: pointer;
        border-radius: 0px;
        background-color: #536878;
        color: whitesmoke;
        /*background: #607d8b -webkit-linear-gradient(30deg, #607d8b 50%, #03396c 50%);*/
        min-height: 16rem;
    }

    .card:hover {
        border: 3px solid #ffe33d;
        color: #ffe33d;
    }

    .card__ticker {
        margin-left: 2px;
        font-size: 1.8rem;
        font-weight: 500;
    }

    .card__dailyMove {
        font-weight: bold;
        font-size: 1.8rem;
        margin-right: 5px;
    }

    .card__price {
        font-size: 1.4rem;
        margin-right: 5px;
    }

    .tooltip {
        position: relative;
        display: inline-block;
        font-size: 1.1rem;

    }

    .tooltip__movement {
        font-size: 1.6rem;
        text-align: center;
        margin-top: -4.5rem;
        margin-right: 1rem;
    }

    .tooltip__subdetailtext {
        font-size: 1rem;
        font-weight: 500;
        margin-top: 5px;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 150px;
        background-color: black;
        color: #fff;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 9999;
        bottom: 100%;
        left: 50%;
        margin-left: -75px;

        /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
        opacity: 0;
        transition: opacity 0.5s;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
        height: 70px;
    }

    .tooltip .tooltiptext::after {
        content: " ";
        position: absolute;
        top: 100%; /* At the bottom of the tooltip */
        left: 50%;
        margin-left: -5px;
        border: 5px solid transparent;
        border-top-color: black;
    }

    .fa-arrow-up {
        color: #1acc41;
        margin-right: 4px;
    }

    .fa-arrow-down {
        color: #d41243;
        margin-right: 4px;
    }
</style>