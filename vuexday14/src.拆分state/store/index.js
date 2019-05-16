import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count"
import list from "./modules/list"
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        count,
        list
    }
})