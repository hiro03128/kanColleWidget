/**
 * background.js
 * ここはなるべくイベントのバインドしか書かない
 */

var observer = new Observer();

/***** JSがロードされたとき *****/
(function(){
    observer.start();
})();

/***** Main Listener 01 : ウィンドウのフォーカスが変わるとき *****/
chrome.windows.onFocusChanged.addListener(function(windowId){
    ifCurrentIsKCWidgetWindow(function(){
       clearBadge();
    });
});

/***** Main Listener 02 : ブラウザからHTTPRequestが送信される時 *****/
chrome.webRequest.onBeforeRequest.addListener(function(data){
    var dispatcher = new Dispatcher(data);
    var action     = new Action();
    dispatcher.bind(action).execute();
},{'urls':[]},['requestBody']);
