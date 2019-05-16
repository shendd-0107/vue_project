<template>
    <div>
        <p >
            <span v-if="count">
                <span @click='delFn'>-</span>
                <span>{{count}}</span>
            </span>
                <span @click='addFn'>+</span>
        </p>
    </div>
</template>
<script>
export default {
    props:["count","id","type"],
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
            let num = this.count+1;
            this.$bus.$emit('addFn',num,this.id,this.type);
        },
        delFn(){
            let num = this.count-1;
            this.$bus.$emit('addFn',num,this.id,this.type);
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