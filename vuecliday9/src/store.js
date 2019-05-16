import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        li:[],
        list:[]
    },
    getters:{
        getli(state){
            console.log(state.li)
            return state.li
        },
        getlist(){
            return state.list
        }
    },
    mutations:{
        getlidatas(state,data){
            state.li=data;
        },
        getlistdatas(state,data){
            state.list=data;
        }
    },
    actions:{
        getlidata({commit}){
            axios.get("/api/li").then(res=>{
                commit("getlidatas",res.data);
            })
        },
        getlistdata({commit}){
            axios.get("/api/list").then(res=>{
                commit("getlistdatas",res.data);
            })
        }   
    }
})