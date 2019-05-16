import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//------------------------  注：添加的方法必须在实例之前写入  --------------------------漂亮的分割线----------//

// 1 添加自定义命令 --->  focus  --刷新网页后input自动聚焦
  Vue.directive("focus",{
    inserted(el){
        el.focus();
    }
  })

// 2 添加自定义命令 --->  bg  --给当前元素添加背景色
  Vue.directive("bg",{
    inserted(el,obj){
      console.log(obj)
        el.style.background=obj.value;
    }
  })

// 3 添加自定义命令 --->  img  --在图片没有加载之前显示色块，加载完成之后显示图片
  Vue.directive("img",{
    inserted(el,obj){
      el.style.background="red";
      let img = new Image();
      img.src=obj.value;
      img.onload=()=>{
          el.style.background="url("+obj.value+")"
          el.style.backgroundSize="100% 100%";
      }
    }
  })


//------------------------  注：上为自定义命令，下为添加的方法  --------------------------漂亮的分割线----------//



// 1 在Vue的$options方法上添加 --->  formatDate 函数  --将传过来的value毫秒数值转为秒数并输出
  Vue.filter('formatDate', function(value){
    let date = new Date();
    date.setTime(value);
    let year = date.getFullYear(),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDate().toString().padStart(2, '0'),
        hour = date.getHours().toString().padStart(2, '0'),
        min = date.getMinutes().toString().padStart(2, '0'),
        sec = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
  });

// 2 在Vue的$options方法上添加 --->  toThousandFilter 函数  --将传过来的num数值转为千进制字符串并输出--->例:1000 ==> 1,000
  Vue.filter('toThousandFilter', function(num){
      return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
  });


//------------------------  上-为添加的方法或命令  --------------------------漂亮的分割线----------//
  
  Vue.prototype.$bus=new Vue();
/* eslint-disable no-new */
  new Vue({
    el: '#app',
    render: h => h(App)
  })

