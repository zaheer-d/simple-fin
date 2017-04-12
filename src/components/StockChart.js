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
    }

}
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default Line.extend({
    mixins: [reactiveProp],
    props: ['chartData'],
    mounted () {
        // this.chartData is created in the mixin
        this.renderChart(this.chartData, options)
    }
})
