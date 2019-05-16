<template>
    <div>
        
        <router-link to="/search">去搜索</router-link>
        <p @click="clickFn">点击搜索</p>
        <li v-for="(item,index) in shop" :key="index" @click="clickFn(item.id,item.title)">{{item.title}}</li>
        
        <p></p>
        <Myfooter></Myfooter>
    </div>
</template>
<script>
export default {
    data(){
        return {
            shop:[
                {
                    "title":"外婆肴",
                    id:1
                },
                {
                    "title":"东北小炒",
                    id:2
                },
                {
                    "title":"巫山烤鱼",
                    id:3
                },
                {
                    "title":"疯狂的烤肉",
                    id:4
                }
            ]
        }
    },
    methods:{
        clickFn(id,title){
            console.log(id)
            // this.$router.push({path:"/shop",query:{id:id,name:title}})
           
            this.$router.push({name:"shop",params:{id,title}})
        },

    },
    
}
</script>
<style scoped lang="">

</style>