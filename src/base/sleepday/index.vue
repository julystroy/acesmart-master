<template>
   <div class="day-data-container">
     <top></top>
            <!-- 睡眠条 -->
            <div id="one" ref="myBox" v-html="divList" >

            </div>
             <div class="row" style="clear:both;color: gray">
                <div class="col-6">
                    <div class="start">{{start}}</div>
                </div>
                <div class="col-7 text-right">
                    <div class="end">{{end}}</div>
                </div>
            </div>
            <!-- 深浅睡眠条 -->
            <div class="row">
                <div class="col-1 offset-2">
                    <div class="qian"></div>
                </div>
                <div>浅睡眠</div>

                <div class="col-1 offset-3">
                    <div class="shen"></div>
                </div>
                <div>深睡眠</div>

            </div>
            <hr />
            <div style="margin-top: 2rem">
                <div class="col-sm-12">
                    <table border="1" style="border:1px solid #cdcdcd;width: 100%">
                        <tr>
                            <td>睡眠时长：
                                <span class="number">8</span>
                                <span>时</span>
                                <span class="number">21</span>
                                <span>分</span>
                            </td>
                            <td>深睡时长：
                                <span class="number">3</span>
                                <span>时</span>
                                <span class="number">19</span>
                                <span>分</span>
                            </td>
                        </tr>
                        <tr>
                            <td>浅睡时长：
                                <span class="number">5</span>
                                <span>时</span>
                                <span class="number">02</span>
                                <span>分</span>
                            </td>
                            <td>仰卧次数：
                                <span class="number">5</span>
                                <span>次</span>
                            </td>
                        </tr>
                        <tr>
                            <td>仰卧时长：
                                <span class="number">4</span>
                                <span>时</span>
                                <span class="number">02</span>
                                <span>分</span>
                            </td>
                            <td>仰卧枕头高度：
                                <span class="number">100</span>
                                <span>mm</span>
                            </td>
                        </tr>
                        <tr>
                            <td>侧卧次数：
                                <span class="number">4</span>
                                <span>次</span>
                            </td>
                            <td>侧卧时长：
                                <span class="number">4</span>
                                <span>时</span>
                                <span class="number">19</span>
                                <span>分</span>
                            </td>
                        </tr>
                        <tr>
                            <td>侧卧枕头高度：
                                <span class="number">120</span>
                                <span>mm</span>
                            </td>
                            <td>翻身次数：
                                <span class="number">10</span>
                                <span>次</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
</template>

<script>
import api from 'api/api.js'
import top from 'base/commontop/index.vue'

 export default {
    data() {
        return {
          start: "22:35",
          end: "06:30",
          divList:'',
          jsonStr : [
            {id:"1","value":"5"},{"id":"2","value":"7"},{"id":"3","value":"3"},
            {"id":"4","value":"8"},{"id":"5","value":"5"},{"id":"6","value":"5"},
            {"id":"7","value":"4"},{"id":"8","value":"6"},{"id":"9","value":"4"},
            {"id":"10","value":"10"},{"id":"11","value":"3"},{"id":"12","value":"8"},
            {"id":"13","value":"15"}
            ],
        }
    },
    methods: {
       //获取当天数据
        getToadySleepData(userNo){
          api.getDaySleepList(userNo).then(res=>{
            if(res.status==200){
                //  this.tokeList = res.data.data.data;
                //  this.page.total = res.data.data.totalPages;
              }

        })},

        //添加睡眠条

        addOption(){
         var  sum =0;
          this.jsonStr.forEach((item,index,arr) =>{
             sum += parseInt(item.value);
          });

          this.jsonStr.forEach((item,index,arr) =>{
             if(item.id%2==0){
                this.divList += "<div class='floatTwo' style='width:"+(item.value*( 100/sum))+"%'></div>";
              //  document.getElementById("one").append( app.data.cc)
                }
             if(item.id%2>0){
              this.divList += "<div class='float' style='width:"+(item.value*( 100/sum))+"%'></div>"
              //      this.$refs.myBox.append();

                }
          });


        }


    },
    mounted() {
        // 初始化执行
        this.getToadySleepData();
        this.addOption();

    }
    ,components:{
      top
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ='less'>
.day-data-container{
  padding-left: 20px;
  padding-right: 20px
}
 #one{
                width: 100%;
                height: 200px;
                padding-top: 1rem
            }
            .float{
                height:100%;
                float: left;
                background-color: #88d4e2;
            }
            .floatTwo{
                height:100%;
                float: left;
                background-color: #02a1b2;
            }

            .shen{
                background-color:#02a1b2;
                width: 20px;
                height: 20px;
                margin-right: 5px;
            }
            table td{
                padding:10px 15px;
            }
            body{
                font-size: 12px;
                margin-bottom: 30rem
            }
            .number{
                font-size:18px;
                color: #37d6b7;
            }
            .row{
              display:-webkit-box;
              display:-ms-flexbox;
              display:flex;
              -ms-flex-wrap:wrap;
              flex-wrap:wrap;
              margin-right:-15px;
              margin-left:-15px;
              margin-top: 10px
           }

           .col-1{
                -webkit-box-flex:0;
                -ms-flex:0 0 8.333333%;flex:0 0 8.333333%;
                max-width:8.333333%;

              }
          .qian{
                  background-color:#88d4e2;
                  width: 20px;
                  height: 20px;

                 }
           .offset-2{margin-left:30%}
           .offset-3{margin-left:10%}
           .col-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}
           .col-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 20%;max-width:15%}
           .col-7{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 80%;max-width:85%}
           .col-5{-webkit-box-flex:0;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}
           .text-right{text-align:right!important}
</style>

