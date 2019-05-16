<template>
    <div>
        <div class="list-dl" v-for="(item,index) in list" :key="index">
            <dt>11</dt>
            
            <dd>{{item.title}}
                <p>￥{{item.price}}元</p>
                <myadd 
                :count=item.count 
                :id=item.id 
                :type=item.type
                ></myadd>
            </dd>
            
            <!-- 加减的组件 -->
            
        </div>

    </div>
    
</template>
<script>
import myadd from "./add.vue";
export default {
    props:["list","arr"],
    components:{
        myadd
    }
}
</script>
<style scoped lang="scss">
    .list-dl{
        width: 100%;
        height: 120px;
        border-bottom:1px solid #ccc;
        display: flex;
        margin-top:10px;
        >dt{
            width: 100px;
            height: 100%;
            background: #fcc;
        }
        >dd{
            flex:1
        }>p{
            width: 80px;
            height: 100%;
        }
    }
</style>