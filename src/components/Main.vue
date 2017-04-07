<template>
    <div>
        <el-row>
            <el-col :span="20" :offset="2">
                <h4>{{stock.name}} - ({{stock.ticker}})</h4>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="20" :offset="2">
                <div class="detail__chart">
                </div>
            </el-col>
        </el-row>
    <el-row>
        <el-col :span="20" :offset="2">
            <div>
            <h5>Description</h5>
            <p>Naspers Limited is a global Internet and entertainment company, and a technology investor. The Company operates platforms in Internet, video entertainment and media sectors. The Company's segments include Internet, Video entertainment, Media and Corporate services. The Company has built various products and services, such as OLX, Avito, letgo, Allegro, eMAG, Flipkart, PayU, MultiChoice, ShowMax, Movile, SimilarWeb and Media24. The Company operates platforms that offer environments to communicate, entertain and shop to customers. Its e-commerce services span general and vertical classifieds; business to consumer (B2C); specialized online services, such as travel and food delivery, and payments platforms. The Company operates in approximately 130 countries. It offers e-commerce platforms, including consumer to consumer (C2C), B2C, Payments and Naspers Ventures, and Listed investments, including Tencent and Mail.ru.</p>
            </div>
        </el-col>
    </el-row>

    </div>
</template>

<script>

    export default{
        data(){
          return {
              stock : ''
          }
        },
        sockets:{
            connect(){
                console.log('connected -->');
            },
            data: function(val){
                this.stock = JSON.parse(val)[0];
                console.log('--->'+val);
            }
        },
        created(){
            console.log(this.$route.params.ticker);
            this.$socket.emit('ticker', this.$route.params.ticker);
        }

    }
</script>
<style scoped>
    .detail__chart{
        height : 20rem;
        border : 1px solid gray;
    }

</style>