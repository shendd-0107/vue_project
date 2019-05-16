<template>
    <div class="main">
        <main>
            <div class="left">
                <span v-for="(item,index) in li" 
                :key="index" 
                @click="$emit('clickLi',index,item.type)"
                :class="{active1:index==current}"
                
                >{{item.title}}</span>
            </div>
            <div class="right">
                <myshop 
                :list=list 
                ></myshop>
            </div>
        </main>
    </div>
    
</template>
<script>
import myshop from "./shop.vue";
export default {
    props:["li","list","current"],
    components:{
        myshop
    }
}
</script>
<style scoped lang="">

</style>    