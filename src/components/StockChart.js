/**
 * Created by user on 2017/04/07.
 */
const options =
{
    responsive: false,
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
                    maxTicksLimit : 3
                }
        }],
    }

}

import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;

export default Line.extend({
    mixins: [reactiveProp],
    props: ['chartData', 'options'],
    mounted () {
        // this.chartData is created in the mixin
        this.renderChart(this.chartData, this.options)
    }
})
