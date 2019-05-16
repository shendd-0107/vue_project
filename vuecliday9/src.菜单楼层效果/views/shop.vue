<template>
    <div class="shop">
        <dl>
            <h3>{{title+":"+id}}</h3>
            <dd class="clickThree">
                <span @click="caiFn">菜单</span>
                <span @click="pingFn">评价</span>
                <span @click="xiangFn">详情</span>
            </dd>
        </dl>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            id:"",
            title:""
        }
    },
    methods:{
        pingFn(){
            this.$router.push({name:"pingjia"})
        },
        caiFn(){
            this.$router.push({name:"caidan"})
        },
        xiangFn(){
            this.$router.push({name:"xiangqing"})
        }
    },
    created(){
        this.id=this.$route.params.id;
        this.title=this.$route.params.title;
        
    },
    beforeRouteEnter(to,from,next){
        
        if(to.params.id<=4){
            next();
        }
        else{
            alert("您输入了访问不到的id")
            next("/")
        }
    },
    beforeRouteUpdate(to,from,next){
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log("leave");
        next();
    }
}
</script>
<style  lang="scss">
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html,body,.shop{
        width: 100%;
        height:100%;
    }
    .shop{
        display: flex;
        flex-direction: column;
        >dl{
            width: 100%;
            height: 100px;
            >h3{
                width: 100%;
                height: 40px;
            }
            >.clickThree{
                width: 100%;
                height: 40px;
                display: flex;
                >span{
                    flex:1;
                    border:1px solid tomato;
                    display: flex;
                    justify-content: center;;
                    align-items: center;
                }
            }
        }
        .wrapper{
            flex:1;
            display: flex;
            overflow: auto;
            .left{
                width: 120px;
                height: 100%;
                >.leftShop{
                    width: 100%;
                    >li{
                        width: 100%;
                        height:60px;
                        border:1px solid #ccc;
                        color:#666;
                        font-weight: 400;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    >li.active{
                        background: tomato;
                        color:#fff;
                    }
                }
                
            }
            >.right{
                flex:1;

            }
        }
    }
</style>