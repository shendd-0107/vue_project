import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        count:1,
        list:[
            {
                name:"张三",
                age:"15"
            },
            {
                name:"李四",
                age:"21"
            }
        ]
    },
    mutations:{
        add(state){
            state.count++;
        },
        adds(state){
            state.count++;
        },
        del(state){
            state.count--;
        },
        addlist(state,obj){
            console.log(obj);
            state.list.push(obj);
        }
    },
    getters:{
        getlist(state){
            return state.list;
        },
        getAge(state){
            return  state.list.filter(item=>item.age>=20)
        },
        getCount(state,getters){
            return getters.getlist.length;
        }
    },
    actions:{
        addActive(context){
            setTimeout(()=>{
                context.commit("adds");
            },2000)
        }
    }
})
