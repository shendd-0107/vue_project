<template>
    <div>
        <button @click="add">加加</button>
        <button @click="addActive">延时加加</button>
        <span>{{$store.state.count}}</span>
    </div>
</template>
<script>
export default {
    props:{

    },
    methods:{
        add(){
            console.log(this.$store)
            this.$store.commit("add");
        },
        addActive(){
            this.$store.dispatch("addActive",5);
        }
    },
    created(){
        
    }
}
</script>
<style scoped lang="">

</style>