<template>
    <div>
        <button class="order" @click="addFn">点菜</button>
        <Myfooter></Myfooter>
    </div>
</template>
<script>
export default {
    methods:{
        addFn(){
            alert('不好意思，没有菜~~')
        }
    }
}
</script>
<style scoped lang="">

</style>