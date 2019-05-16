<template>
    <footer>
        <router-link ref="footers" to="/">首页</router-link>
        <router-link ref="footers" to="/vedio">视频</router-link>
        <router-link ref="footers" to="/newset">新闻</router-link>
        <router-link ref="footers" to="/frums">论坛</router-link>
        <router-link ref="footers" to="/list">数据</router-link>
    </footer>
</template>
<script>
export default {
   created(){
       console.log(this.$refs.footers)
   }
}
</script>
<style  lang="scss">

</style>