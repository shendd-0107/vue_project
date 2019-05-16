<template>
    <div class="classify">
        <div class="left">
            <li v-for="(item,index) in list" :key="index" @click="clickFn(index)" :class="{active:index==ind}">{{item.title}} </li>
        </div>
        <div class="right">
            <li v-for="(items,index1) in list[ind].res" :key="index1">{{items.title}} </li>
        </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return {
            ind:0,
            list:[
                {
                    title:"男装",
                    res:[
                        {
                            title:"男男1"
                        },
                        {
                            title:"男男2"
                        }
                    ]
                },
                {
                    title:"女装",
                    res:[
                        {
                            title:"女女1"
                        },
                        {
                            title:"女女2"
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        clickFn(ind){
            this.ind=ind;
        }
    },
}
</script>
<style scoped lang="">
    .classify{
        display: flex;
        height: 100%;
        width: 100%;
    }
    .left{
        width:100px;
        height: 100%;
        border-right:1px solid #ccc;
    }
    .right{
        flex:1;
    }
    .active{
        color:tomato;
    }
</style>