import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        list:[]
    },
    mutations:{
        getlistAxios(state,list){
            state.list = list;
        },
        clickFn(state,val){
            console.log(val);
            state.list.unshift(val);
        },
        delFn(state,id){
            state.list = state.list.filter(item => item.id != id);
        },
        flagFn(state,data){
            let index = state.list.findIndex(item=>item.id==data.id);
            state.list.splice(index,1,data)
        },
        selFn(state,data){
            state.list = data;
        }
    },
    getters:{
        getlistArr(state){
            return state.list
        }
    },
    actions:{
        getdata({commit},list){
            axios.get("http://jsonplaceholder.typicode.com/todos").then(res=>{
                commit('getlistAxios',res.data);
            })
        },
        adddata({commit},val){
            axios.post("http://jsonplaceholder.typicode.com/todos",{title:val,userId:1,completed:false}).then(res=>{
                commit("clickFn",res.data);
            })
        },
        delFn({commit},id){
            axios.delete("http://jsonplaceholder.typicode.com/todos").then(res=>{
                commit("delFn",id)
            })
        },
        flagFn({commit},obj){
            axios.put("http://jsonplaceholder.typicode.com/todos/"+obj.id,obj).then(res=>{
                commit("flagFn",res.data)
            })
        },
        selFn({commit},sel){
            axios.get("http://jsonplaceholder.typicode.com/todos?_limit="+sel).then(res=>{
                commit("selFn",res.data);
            })
        }
    }
})
