const state={
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
}
const mutations={
    addlist(state,obj){
        console.log(obj);
        state.list.push(obj);
    }
}
const getters={
    getlist(state){
        return state.list;
    },
    getAge(state){
        return  state.list.filter(item=>item.age>=20)
    },
    getCount(state,getters){
        return getters.getlist.length;
    }
}
const actions={
    
}
export default {
    state,
    mutations,
    getters,
    actions
}