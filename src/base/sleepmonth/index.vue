<template>
   <div class="month-data-container">
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

          api.getMonthSleepPost(option).then(res=>{
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

             let option2 = {
                color: ['#ecac99'],

                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                title: {
                left: 'center',
                text: '',
            },
            xAxis: {
                type: 'category',
                data: ['2018/11/11','2018/11/12','2018/11/13','2018/11/14','2018/11/15','2018/11/16','2018/11/17','2018/11/18','2018/11/19','2018/11/20',
                '2018/11/21','2018/11/22','2018/11/23','2018/11/24','2018/11/25','2018/11/26','2018/11/27','2018/11/28','2018/11/29']
            },
             grid:{// 屏幕位置
                    
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true ,    
                    borderWidth:1
                },

            yAxis: [
                    {
                        type: 'value',
                        name: '睡眠时长',
                        nameLocation:'center',
                        nameGap: 30,//与轴线间距
                    },
                ],
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 100
            }, {
                start: 0,
                end: 100,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name:'',
                    type:'line',
                    smooth:false,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        color: 'rgb(244, 206, 174)'
                    },
                    areaStyle: {
                        color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(244, 206, 174)'
                        }, {
                            offset: 1,
                            color: 'rgb(244, 206, 174)'
                        }])
                    },
                    data: [100,120,112,113,78,79,89,80,98,86,65,87,90,99,88,77,123,112,113]
                }
            ]
            }

            this.draw_pic_one(option2)
            this.draw_pic_two(option2)
        }
    },
    mounted() {
        // 初始化执行
        this.user_draw()
        this.pageChange(1);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ='less'>
.month-data-container{
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

