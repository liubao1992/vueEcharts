/* eslint-disable no-unused-vars */
//以下是函数防抖（在用户连续调整窗口大小的时候，只有在调整停止的时候才会执行method（会有一定的延迟性 ），优化性能，避免频繁的调用handlerResize()。)
function debounce(method,params){
    let timer=null;
    return function(){
      clearTimeout(timer);
      timer=setTimeout(function(){
        method(params)  //即调用handlerResize，params即传入的参数eleArr
      },300);
    }
  }
  
  //也可以用函数节流的方式(函数节流跟函数防抖相比，看起来更流畅些)：
  function throttle(method,params){
    let  begin=new Date();
    return function(){
      let current=new Date();
      if(current-begin>=200){
        method(params)  //即调用handlerResize，params即传入的参数eleArr
        begin=current; //重置begin,将current赋值给begin
      }
    }
  }
  
  function handlerResize(eleArr){
    window.console.log('执行了resize方法')
    for(let i=0;i<eleArr.length;i++){
      //里面那层定时器是为了在页面存在多个图时，resize方法的调用时间微微错开，避免明显的卡顿
      setTimeout(() => {
        eleArr[i].resize()
      },50*i)
    }
  }
  
  function chartResize(eleArr){
    //注：此处要用addEventListener,如果用 window.onresize = function(){},在别的组件也用了onresize事件的情况下，就容易覆盖掉此处的函数
    window.addEventListener("resize", debounce(handlerResize,eleArr)) //使用函数防抖的方式
    // window.addEventListener("resize", throttle(handlerResize,eleArr)) //使用函数节流的方式
  }
  export {chartResize}