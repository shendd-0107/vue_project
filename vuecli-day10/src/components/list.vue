<template>
    <div class="list" >
        <div class="item" v-for="(item,index) in newArr" :key="index">
          <dt>{{item.title}}<span>已放弃</span></dt>
          <dd>{{item.address}}</dd>
          <dd>面试时间：{{item.timer}} <span>已提醒</span></dd>
        </div>
    </div>
</template>
<script>
export default {
    props:["newArr"],
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