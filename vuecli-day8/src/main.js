import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
Vue.component("mytags",{
  template:`<div>
    <li>1111</li>
    <li>2222</li>
    <li>3333</li>
  </div>`
})
new Vue({
  el: '#app',
  render: h => h(App)
})

