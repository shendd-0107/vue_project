const state={
    count:1
}
const mutations={
    add(state){
        state.count++;
    },
    adds(state){
        state.count++;
    },
    del(state){
        state.count--;
    },
}
const getters={

}
const actions={
    addActive(context){
        setTimeout(()=>{
            context.commit("adds");
        },2000)
    }
}
export default {
    state,
    mutations,
    getters,
    actions
}