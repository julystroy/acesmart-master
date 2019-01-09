export  default {

  initJsBridge:function (readyCallback) {

    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    // 注册jsbridge
    function connectWebViewJavascriptBridge(callback) {
      if (isAndroid) {

        if (window.WebViewJavascriptBridge) {

          callback(WebViewJavascriptBridge)
        } else {

          document.addEventListener(

            'WebViewJavascriptBridgeReady'
            , function () {

              callback(WebViewJavascriptBridge)

            },
            false
          );
        }
        return;
      }
      if (isiOS) {

        if (window.WebViewJavascriptBridge) {


          return callback(WebViewJavascriptBridge);
        }
        if (window.WVJBCallbacks) {

          return window.WVJBCallbacks.push(callback);
        }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function () {
          document.documentElement.removeChild(WVJBIframe)
        }, 0)
      }
    }
    // 调用注册方法
    connectWebViewJavascriptBridge(function (bridge) {
      if (isAndroid) {
        bridge.init(function (message, responseCallback) {
          console.log('JS got a message', message);
          responseCallback(data);
        });
      }

      // // 只有在这里注册过的方法，在原声代码里才能用callHandler的方式调用
      // bridge.registerHandler('jsbridge_showMessage', function (data, responseCallback) {
      //   showResponse(data);
      // });
      // bridge.registerHandler('jsbridge_getJsMessage', function (data, responseCallback) {
      //   showResponse(data);
      //   responseCallback('native 传过来的是：' + data);
      // });

      //function
      // toast(arg){
      //   let parm = {
      //     message:arg,
      //     type: false
      //   }
      //   window.WebViewJavascriptBridge.callHandler('toast',parm,function(response){});
      // }

      readyCallback();
    });



     }


}

