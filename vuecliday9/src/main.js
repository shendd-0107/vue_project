import Vue from 'vue'
import App from './App'
import store from "./store"
Vue.config.productionTip = false

Vue.directive("focus",{
  inserted(el){
      el.focus();
  }
})

Vue.directive("img",{
  inserted(el,obj){
    console.log(el,obj.value)
    el.style.background="red";
    let img = new Image();
    img.src=obj.value;
    img.onload=()=>{
        el.style.background="url("+obj.value+")"
        el.style.backgroundSize="100% 100%";
    }
  }
})
Vue.prototype.$bus=new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

