/**
 * Created by user on 2017/04/07.
 */
// CommitChart.js
import { Line } from 'vue-chartjs'

export default Line.extend({
    mounted () {
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Price Movement',
                    backgroundColor: '#ffe769',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
            ]
        },
            {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: false
                },
                legend : {
                    display : false
                }
            })
    }
})

