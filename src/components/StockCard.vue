<template>
    <div>
        <div class="card container" :style="styleClass" @click="ShowMain">
            <div class="row">
                <div class="tweleve columns"><div class="u-pull-left u-full-width card__ticker">{{ stockData.ticker }}</div></div>
                <div class="tweleve columns"><div class="u-pull-right card__dailyMove">
                    <i :class="dailyMove" aria-hidden="true"></i>1.2%</div></div>
                <div class="tweleve columns"><div class="u-pull-right card__price">{{stockData.price}}</div></div>
            </div>

        </div>
    </div>

</template>
<script>
    export default{
     props : ['stockData'],
      data(){
        return {
          styleClass : {
            'background-color' : this.getRandomColour()
          }
        }
      },
       methods:{
            getRandomColour(){
                var colours = ['#a8e6cf','#dcedc1',
                '#ffd3b6', '#ffaaa5', '#00aedb','#ff8b94', '#ebef89',
                '#92eacc','#8ec127','#62d7d2','#a200ff','#abb1e8','#f47835','#d0e4b7']
                var random = Math.floor(Math.random() * (13 - 0 + 1)) + 0;
                random = Math.floor(Math.random() * (random - 0 + 1)) + 0;
                return colours[random];
               // this.colours[1];
            },
            ShowMain(){
              console.log('Show details clicked');
              this.$router.push('/detail');
            }

       },
       computed : {
              dailyMove(){
                var random = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
                return (random % 2 == 1) ? 'fa fa-arrow-up' : 'fa fa-arrow-down';
              }
            }
    }
</script>

<style scoped>
  .detail-card{
     width : 50rem;
     height : 30rem;
  }
   .card{
       border : 1px solid gray;
       width : 8rem;
       height : 7rem;
       margin : 1rem;
       cursor : pointer;
   }
    .card:hover {
       border : 1px solid black;
       color : black;
   }
   .card__ticker{
      margin-left: 5px;
      font-size: 2rem;
   }
  .card__dailyMove{
  font-weight : bold;
    font-size : 1.1rem;
    margin-right : 8px;
  }
   .card__price{
     margin-right : 8px;
   }

   .fa-arrow-up{
     color : #1acc41;
     margin-right : 4px;
   }

   .fa-arrow-down{
     color : #ae0001;
     margin-right : 4px;
   }
</style>