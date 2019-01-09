<template>
  <div class="main">
    <div class="main-top" style="width:100%;padding-bottom: 15px;padding-top:15px;">
      <button-tab class ="vux-tab" style="padding-right:30px;padding-left:30px;">
        <button-tab-item class ="vux-tab-item" @on-item-click="choose(1)" :selected='true'>Today</button-tab-item>
        <button-tab-item class ="vux-tab-item" @on-item-click="choose(2)">This Week</button-tab-item>
        <button-tab-item class ="vux-tab-item" @on-item-click="choose(3)">This Month</button-tab-item>
      </button-tab>
    </div>

    <!--渲染区域-->
    <router-view></router-view>
  </div>
</template>

<script>
import  { ButtonTab, ButtonTabItem }  from 'vux'
export default {
  methods:{
     choose(arg){
      if(arg ==1){
        this.$router.push({
                        name: 'SleepDay'
                    })
      }else if(arg == 2){
        this.$router.push({
                        name: 'SleepWeek'
                    })
      }else if(arg == 3){
        this.$router.push({
                        name: 'SleepMonth'
                    })
      }
    }
  },
   //注册组件
  components: {
         ButtonTab,
         ButtonTabItem
      }
}
</script>
<style lang = 'less'>
.main{
   padding-bottom: rem-calc(100);
   width: 100%;
   height: 100%;
    .main-top{
       background-color: #0d3ded;
       width: 100%;
       .vux-tab .vux-tab-item{
        border-bottom:3px solid blueviolet;
    }

    }
}



</style>
