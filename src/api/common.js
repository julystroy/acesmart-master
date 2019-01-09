/**
 * 该文件放置的公共的方法
 *
 */
export default {
  isdev: function(env) {
      var env = process.env.NODE_ENV;
      return env === 'development' ? '/cxb/api' : '/api';
  },
  /* 设置cookie函数 */
  setCookie: (key, value, day) => {
      var date = new Date();
      date.setDate(date.getDate() + day);
      document.cookie = key + '=' + escape(value) + ';expires=' + date;
  },
  /* 获取cookie函数 */
  getCookie: (key) => {
      var coo = unescape(document.cookie); //解码
      var arr1 = coo.split('; '); //第一次分解后是数组
      for (var i = 0; i < arr1.length; i++) { //第二次循环拆分数组
          var arr2 = arr1[i].split('=');
          if (arr2[0] == key) {
              return arr2[1];
          }
      }
  },
  /* 删除cookie */
  removeCookie: (key) => {
      setCookie(key, '', -1);
  },
  /* 获取session storage**/
  getSession: (key) => {
      return sessionStorage.getItem(key)
  },
  /* 设置session storage值**/
  setSession: (key, value) => {
      sessionStorage.setItem(key, value)
  },
  /* 清空session storage 数据项**/
  removeSessionItem: (key) => {
      sessionStorage.removeItem(key)
  },
  /**清空session storage**/
  clearSession: () => {
      sessionStorage.clear()
  },
  /*数据序列化*/
  parseData: function(data) {
      var _data;
      if (!data) return data;
      try {
          _data = JSON.parse(data);
      } catch (e) {
          _data = data;
      }
      return _data;
  },
  // 浮点型小数放大处理问题
  dealNumberWithPoint: function(num1,num2) {
      // debugger
      let tempMax = (num1 - 0) + ''
      let arrMax = tempMax.split('.')
      let maxLain
      if(arrMax.length === 1){
          maxLain = (arrMax.join('') - 0) * 100
      }else {
          let maxAgain =arrMax[1].split('')
          if(maxAgain.length === 1) {
              maxAgain.push('0')
          }
          maxAgain.splice(2, 0, '.')
          maxLain = (arrMax[0] + maxAgain.join('')) - 0
      }
      if(num2) {
          maxLain = maxLain.toFixed(num2)
      }
      return maxLain
  },
  // 浮点型小数缩小处理问题
  dealNumberWithSmall: function(num1, num2) {
      let tempMin = (num1 - 0) + ''
      let minMain = tempMin.split('.')
      let arrOne = ['0', '.']
      let arrTwo = ['0', '0', '.']
      let minArr = minMain[0].split('')
      if(minMain.length === 1) {
          if(minArr.length > 2) {
              minArr.splice(minArr.length-3, 0, '.')
          }else if(minArr.length === 2) {
              minArr = arrOne.concat(...minArr)
          }else {
              minArr = arrTwo.concat(...minArr)
          }
      }else {
          if(minArr.length > 2) {
              minArr.splice(minArr.length-3, 0, '.')
              minArr = minArr.concat(minMain[1])
          }else if(minArr.length === 2) {
              minArr = arrOne.concat(...minArr).concat(minMain[1])
          }else {
              minArr = arrTwo.concat(...minArr).concat(minMain[1])
          }
      }
      let importValue = minArr.join('') - 0
      if(num2) {
          importValue = importValue.toFixed(num2)
      }
      return importValue
  },
// 格式化element时间的组件  转成 YYYY-MM-DD格式的
  formattingTime(arg) {
      let judge = Array.isArray(arg)
      if(judge) {
      let startDate = new Date(arg[0])
      let endDate = new Date(arg[1])
      let startYear = startDate.getFullYear()
      let startMonth = startDate.getMonth() + 1
      let startDay = startDate.getDate()

      let endYear = endDate.getFullYear()
      let endMonth = endDate.getMonth() + 1
      let endDay = endDate.getDate()

      let startTime = startYear + '-' + (startMonth > 9 ? startMonth : ('0' + startMonth)) + '-' + (startDay > 9 ? startDay : ('0' + startDay))
      let endTime = endYear + '-' + (endMonth > 9 ? endMonth : ('0' + endMonth)) + '-' + (endDay > 9 ? endDay : ('0' + endDay))
      return {
          startTime,
          endTime
      }
      }else {
          return
      }
  },
  //获取当前系统时间
getTime(){
    var obj = new Date(),
        y = obj.getFullYear(),
        m = obj.getMonth()+1,
        d = obj.getDate(),
        h = obj.getHours(),
        min = obj.getMinutes(),
        sec = obj.getSeconds();
        m = m <10?'0' + m:m;
        d = d <10?'0' + d:d;
        h = h <10?'0' + h:h;
        min = min <10?'0' + min:min;
        sec = sec <10?'0' + sec:sec;
    return y + '-' + m + '-' + d + ' ' + h +':'+min+':'+sec;
  },
    // 比较两个数组是指是否相同
  compareArr(a,b) {
      if(a.length != b.length) {
          return false;
      }else {
          let num = 0;
          for (let [i, val] of a.entries()) {
          let tt =  b.findIndex((v) => {
                  return JSON.stringify(v) === JSON.stringify(val)
              })
              if(tt > -1) {
                  num++;
              }else {
                  return false;
              }
          }
          if(num == a.length) {
              return true;
          }
      }
  },
  // 去除前后空格
  removeBlank(arg) {
      return arg.replace(/(^\s*)|(\s*$)/g, "")
  },

// 截取url中的数据
getUrlData() {
  /**
  * tempStr 格式是http://域名/路由?key=value&key=value...
  */
  let tempStr = window.location.href
  /**
  * tempArr 是一个字符串数组 格式是["key=value", "key=value", ...]
  */
  let tempArr = tempStr.split('?')[1] ? tempStr.split('?')[1].split('&') : []
  /**
  * returnArr 是要返回出去的数据对象 格式是 { key: value, key: value, ... }
  */
  let returnArr = {}
  tempArr.forEach(element => {
  returnArr[element.split('=')[0]] = element.split('=')[1]
  })

  console.log(returnArr);
  return returnArr
  },

  setStorage (key, value){
    if(arguments.length === 2){
        var v = value;
        if(typeof v == 'object'){
            v = JSON.stringify(v);
            v = 'obj-'+ v;
        }else{
            v = 'str-'+ v;
        }
        var ls = uzStorage();
        if(ls){
            ls.setItem(key, v);
        }
    }
},
    getStorage(key){
     var ls = uzStorage();
     if(ls){
        var v = ls.getItem(key);
        if(!v){return;}
        if(v.indexOf('obj-') === 0){
            v = v.slice(4);
            return JSON.parse(v);
        }else if(v.indexOf('str-') === 0){
            return v.slice(4);
        }
    }
}

}
