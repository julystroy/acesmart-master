/**
 * @see 该文件主要是接口配置文件
 * 注意: 接口的的配置请注意写明接口的用途注释
 */
import axios from 'axios'
import common from "api/common.js"

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8' //请求头
axios.defaults.headers.Accept = 'application/json' //请求头



//axios.defaults.baseURL = process.env.API_ROOT
axios.defaults.withCredentials = true
axios.defaults.timeout = 20000

// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })
// 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})

// 可以不使用
var setParams = function (params, type) {
    var params = common.parseData(params);
    var pm = common.parseData(params.body) || params;
    var type = type == 'GET' ? 'GET' : 'POST';
    return pm;
}

export default {
    // 测试接口1
    testgive: function(params) {
        return new Promise((resolve, reject) => {
            axios.post('/test/give', params)
            .then((r) => {
                resolve(r)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
    // 测试接口2
    testget: function(params) {
        return new Promise((resolve, reject) => {
            axios.post('/test/get', params)
            .then((r) => {
                resolve(r)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },

    getTableData: function(params){
        return new Promise((resolve,reject) => {
            axios.post('/test/getTable', params)
            .then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        })
    },
    //新闻列表界面
    getNewsList: function(arg){
      return new Promise((resolve,reject)=>{
        axios.get("/api/book/api/news/list?version=1.0&pageSize=10&pageNo=1")
        .then((res) => {
          resolve(res);
       }).catch((err) => {
          reject(err);
      })
      })
    },

     //日睡眠流水
     getDaySleepList: function(arg){
      return new Promise((resolve,reject)=>{
        axios.get("/app/hcDataSum/currSleepingData/"+arg)
        .then((res) => {
          resolve(res);
       }).catch((err) => {
          reject(err);
      })
      })
    },

    // //指定日内的睡眠统计数据流水  /app/hcDataSum/sleepingDataDuration/hcDataFilter
    getDaySleepPost: function(arg){
      return new Promise((resolve,reject)=>{
        axios.post("/app/hcDataSum/sleepingDataDuration/hcDataFilter",arg)
        .then((res) => {
          resolve(res);
       })
       .catch((err) => {
          reject(err);
      })
      })
    },

   //指定周内的睡眠统计数据 /app/hcDataSum/sleepingDataWeekly/hcDataFilter
   getWeekSleepPost: function(arg){
    return new Promise((resolve,reject)=>{
      axios.post("/app/hcDataSum/sleepingDataWeekly/hcDataFilter",arg)
      .then((res) => {
        resolve(res);
     })
     .catch((err) => {
        reject(err);
    })
    })
  },

    //指定月内的睡眠统计数据   /hcDataSum/sleepingDataMonthly/hcDataFilter
    getMonthSleepPost: function(arg){
      return new Promise((resolve,reject)=>{
        axios.post("/hcDataSum/sleepingDataMonthly/hcDataFilter",arg)
        .then((res) => {
          resolve(res);
       })
       .catch((err) => {
          reject(err);
      })
      })
    },

}
