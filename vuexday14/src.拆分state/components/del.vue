<template>
    <div>
        <button @click="del">减减</button>
        <span>{{$store.state.count}}</span>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        del(){
            this.$store.commit("del");
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>