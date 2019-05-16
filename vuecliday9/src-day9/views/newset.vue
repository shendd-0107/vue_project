<template>
    <div>
        <myheader></myheader>
        <div class="ulli"> 
            <ul class="list">
                <li @click='$router.push({name:"live"})'>直播</li>
                <li @click='$router.push({name:"news"})'>最新</li>
                <li @click='$router.push({name:"hots"})'>最热</li>
                <li @click='$router.push({name:"NBA"})'> NBA</li>
                <li @click='$router.push({name:"CCTV"})'>CCTV</li>
            </ul>
            <router-view></router-view>
        </div>
        <myfooter></myfooter>
    </div>
</template>
<script>
import Mock from "mockjs";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            arr:[]
        }
    },
    created(){
        let data = Mock.mock({
            "list|5":[
                {
                    "title":"@ctitle",
                    "cont":"@title(10,20)",
                    "img":"@image",
                    "id|+1":1,
                    "timer":"@now()"
                }
            ]
        })
        console.log(data.list);
    }
}
</script>
<style  lang="scss">
*{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style: none;
    }
    .ulli>.list{
        width: 100%;
        height: 50px;
        background: #fcc;
        display: flex;
        justify-content: center;
        align-items: center;
        >li{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            color:#fff;
        }
    }
</style>