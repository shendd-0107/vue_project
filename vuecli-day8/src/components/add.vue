<template>
    <div>
        <span @click="delFn">-</span>
        <span>{{counts}}</span>
        <span @click="addFn">+</span>
    </div>
</template>
<script>
export default {
    props:["counts","id"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        addFn(){
            let num = this.counts+1;
            this.$bus.$emit("addCount",num,this.id);
        },
        delFn(){
            let num = this.counts-1;
            if(num<0){
                num=0;
            }
            this.$bus.$emit("addCount",num,this.id);
            
            
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
span{
    display: inline-block;
    width: 30px;
    height:30px;
    border:1px solid tomato;
    text-align: center;
    line-height:30px;
  }
</style>