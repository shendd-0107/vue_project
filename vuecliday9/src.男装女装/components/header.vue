<template>
    <div class="header">
        <span :class="{active:index==headerInd}" v-for="(item,index) in headerArr" :key="index" @click="$emit('clickFn',index)">{{item}}</span>
    </div>
</template>
<script>
export default {
    props:["headerArr","headerInd"],
    components:{

    },
    data(){
        return {
           
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>