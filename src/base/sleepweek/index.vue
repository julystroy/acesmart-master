<template>
   <div class="week-data-container">
        <div ref="echartsContainer" class="echartsContainer"></div>
        <div ref="echartsContainerTwo" class="echartsContainer"></div>
        <div class="row justify-content-center" style="margin-top: 2rem">
                <div class="col-sm-12">
                    <table border="1" style="border:1px solid #cdcdcd;width: 100%; text-align: center;">

                            <tr>
                                <th>
                                    平均睡眠时长：
                                </th>
                                <td>
                                    <span class="number">8</span>
                                    <span>时</span>
                                    <span class="number">21</span>
                                    <span>分</span>
                                </td>
                                <th>
                                    平均翻身次数：
                                </th>
                                <td>
                                    <span class="number">3</span>
                                    <span>次</span>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    仰卧枕头平均高度：
                                </th>
                                <td>
                                    <span class="number">100</span>
                                    <span>mm</span>
                                </td>
                                <th>
                                    侧卧枕头平均高度：
                                </th>
                                <td>
                                    <span class="number">120</span>
                                    <span>mm</span>
                                </td>
                            </tr>
                    </table>
                </div>
        </div>
  </div>
</template>

<script>
import api from 'api/api.js'
 export default {
    data() {
        return {
        }
    },
    methods: {
       //请求数据
        getSleepWeekData(){
          let option = {
            custBindEquipId : "equipId",
            beginDate       : "2018-12-28 09:01",
            endDate         : "2018-12-28 24:02",
            userNo          : "ben di qu",
            range           : {
              length:0,
              start :0
            }
          }

          api.getWeekSleepPost(option).then(res=>{
            if(res.status==200){


              }

        })},

        //枕高
        draw_pic_one(arg) {
            let dayDom = this.$refs.echartsContainer
            let myChart = this.$echarts.init(dayDom)
            myChart.setOption(arg)
        },
        //睡眠时常
        draw_pic_two(arg) {
            let dayDom = this.$refs.echartsContainerTwo
            let myChart = this.$echarts.init(dayDom)
            myChart.setOption(arg)
        },
        user_draw() {
            let option = {
                color: ['#007bff'],

                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['周日', '周一 ', '周二 ', '周三 ', '周四 ','周五 ','周六'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                grid:{// 屏幕位置
//                     x:70,
//                     y:50,
//                     x2:15,
//                     y2:20,
//                     borderWidth:1
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true     
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '仰卧枕头高度',
                        nameLocation:'center',
                        nameGap: 50,//与轴线间距
                    },
                ],
                series : [
                    {
                        name:'当日',
                        type:'bar',
                        data:[80, 90, 100, 86, 120,110,100]
                    }

                ],
                // dataZoom: {
                //     show: true,
                //     realtime: true,
                //     y: 36,
                //     height: 20,
                //     start:0,
                //     end: 30
                // }
            }

             let option2 = {
                color: ['#ecac99'],

                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['周日', '周一 ', '周二 ', '周三 ', '周四 ','周五 ','周六'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                grid:{// 屏幕位置
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true                 
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '睡眠时长',
                        nameLocation:'center',
                        nameGap: 50,//与轴线间距
                    },
                ],
                series : [
                    {
                        name:'cccccc',
                        type:'bar',
                        data:[7, 6, 8, 6, 10,5,12]
                    }

                ],
                // dataZoom: {
                //     show: true,
                //     realtime: true,
                //     y: 36,
                //     height: 20,
                //     start:0,
                //     end: 30
                // }
            }
            this.draw_pic_one(option)
            this.draw_pic_two(option2)
        }
    },
    mounted() {
        // 初始化执行
        this.user_draw()
        this.getSleepWeekData();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ='less'>
.week-data-container{
  padding-left: 20px;
  padding-right: 20px
}
 table td{
                padding:10px 5px;
            }
            body{
                font-size: 12px;
                margin-bottom: 30rem
            }
            .number{
                font-size:18px;
                color: #37d6b7;
            }

    .echartsContainer {
        width: 100%;
        height: 300px;
    }

</style>

