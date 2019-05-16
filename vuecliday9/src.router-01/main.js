import Vue from 'vue'
import App from './App'
import router from  "../src/router";
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


Vue.component("Myfooter",{
  template:`<div>
              <router-link to="/">首页</router-link>
              <router-link to="/person">联系人</router-link>
              <router-link to="/found">发现</router-link>
              <router-link to="/myproject">我的</router-link>
            </div>`
})
Vue.prototype.$bus=new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  
})

