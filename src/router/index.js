import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/dist',
    },
    //{
      // path:'/index',
      // component:resolve => require(['base/main'],resolve),
      // children:[
      //   {
      //     path:'/',
      //     name:'SleepDay',
      //     component:resolve => require(['base/sleepday'],resolve),
      //   },
      //   {
      //     path:'/sleepweek',
      //     name:'SleepWeek',
      //     component:resolve => require(['base/sleepweek'],resolve),
      //   },
      //   {
      //     path:'/sleepmonth',
      //     name:'SleepMonth',
      //     component:resolve => require(['base/sleepmonth'],resolve),
      //   }
      // ]
    //},
    {
      path: '/dist',
      redirect: '/dist/sleepDay',
      component: resolve => require(['base/main'], resolve),
      children: [
        {
          path:'sleepDay',
          name:'SleepDay',
          component: resolve => require(['base/sleepday'], resolve),
        },
        {
          path:'sleepweek',
          name:'SleepWeek',
          component: resolve => require(['base/sleepweek'], resolve),
        },
        {
          path:'sleepmonth',
          name:'SleepMonth',
          component: resolve => require(['base/sleepmonth'], resolve),
        }
      ]
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
