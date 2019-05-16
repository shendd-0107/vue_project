<template>
    <div class="mask">
        <div class="cont">
            <myshop 
            :list=list
            :arr=arr></myshop>
        </div>
    </div>
    
</template>
<script>
import myshop from "./shop.vue"
export default {
    props:["list","arr"],
    components:{
        myshop
    }
}
</script>
<style scoped lang="scss">


    
</style>