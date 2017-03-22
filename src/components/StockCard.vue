<template>
    <div>
        <div class="card container tooltip" :style="styleClass" @click="ShowMain">
            <div class="row">
                <div class="twelve columns">
                    <div class="u-pull-left u-full-width card__ticker">{{ stockData.ticker }}</div>
                </div>
                <div class="twelve columns">
                    <div class="u-pull-right card__dailyMove">
                        <i :class="dailyMove" aria-hidden="true"></i>{{ stockData.change_percent }}%

                    </div>
                </div>
                <div class="twelve columns">
                    <div class="u-pull-right card__price">{{stockData.price | displayCurrency}}</div>
                </div>
            </div>
            <div class="tooltiptext container">
                <div class="row">
                    <div class="twelve columns u-pull-left u-full-width" style="margin-left:5px;">
                        <b>{{stockData.name}}</b> <br>
                    </div>
                </div>
                <div class="row">
                    <div class="seven columns u-pull-left" style="margin-left:5px; padding-top: 5px">
                        <b class="tooltip__subdetailtext">Avg. {{stockData.price | displayCurrency}}</b> <br>
                        <b class="tooltip__subdetailtext">Shares. {{stockData.id}}</b>
                    </div>
                    <div class="five columns u-pull-right">
                        <div class="tooltip__movement">
                            <div style="text-align: center;">
                                <i :class="dailyMove" aria-hidden="true"></i>
                                <p>{{ stockData.change_percent }}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    </div>

</template>
<script>
    export default{
        props: ['stockData'],
        data(){
            return {
                styleClass: {
                    'background-color': this.getRandomColour()
                }
            }
        },
        methods: {
            getRandomColour(){
                var colours = ['#a8e6cf', '#dcedc1',
                    '#ffd3b6', '#ffaaa5', '#00aedb', '#ff8b94', '#ebef89',
                    '#92eacc', '#8ec127', '#62d7d2', '#a200ff', '#abb1e8', '#f47835', '#d0e4b7']
                var random = Math.floor(Math.random() * (13 - 0 + 1)) + 0;
                //random = Math.floor(Math.random() * (random - 0 + 1)) + 0;
                return colours[random];
            },
            ShowMain(){
                console.log('Show details clicked');
                this.$router.push('/detail');
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
        }
    }
</script>

<style scoped>
    .card {
        border: 1px solid gray;
        width: 8rem;
        height: 7rem;
        margin: 1rem;
        cursor: pointer;
    }

    .card:hover {
        border: 1px solid black;
        color: black;
    }

    .card__ticker {
        margin-left: 5px;
        font-size: 2rem;
    }

    .card__dailyMove {
        font-weight: bold;
        font-size: 1.1rem;
        margin-right: 8px;
    }

    .card__price {
        margin-right: 8px;
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
        margin-right: -3rem;
    }

    .tooltip__subdetailtext {
        font-size: 1.2rem;
        margin-top: 5px;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 250px;
        background-color: black;
        color: #fff;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        margin-left: -125px;

        /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
        opacity: 0;
        transition: opacity 1s;
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
        color: #ae0001;
        margin-right: 4px;
    }
</style>