<template>
   <div>
    <button-tab class="vux-tab">
      <button-tab-item @click="choose(1)">Today</button-tab-item>
      <button-tab-item @click="choose(2)">This Week</button-tab-item>
      <button-tab-item @click="choose(3)">This Month</button-tab-item>
    </button-tab>

     <router-view></router-view>
  </div>
</template>

<script>
    import ChenScroll from 'base/scroll/Scroll.vue'
    import  { ButtonTab, ButtonTabItem }  from 'vux'
 //   import test from 'base/test'
 //   import scroll from 'base/scroll'
    export default {
      data () {
          return {
      value:''
    }
  },
  methods: {
    choose(arg){
      alert(arg);
      if(arg ==1){
        this.$router.push({
                        path: '/SleepDay'
                    })
      }else if(arg == 2){
        this.$router.push({
                        path: '/SleepWeek'
                    })
      }else if(arg == 3){
        this.$router.push({
                        path: '/SleepMonth'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    ul>li {
      display: block;
    }

     .vux-tab .vux-tab-item.vux-tab-selected{
        color: blueviolet;
        border-bottom:3px solid blueviolet;
    }
</style>
