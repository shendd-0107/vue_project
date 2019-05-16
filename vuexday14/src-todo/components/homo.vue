<template>
    <div class="cont">
        <div class="left">
            <h3>todoList</h3>
            <input type="text" v-model="val">
            <button type="button" @click=adddata(val)>添加</button>
            <select v-model="sel" @change="selFn(sel)">
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="20">20</option>
                <option value="10">10</option>
                <option value="5">5</option>
            </select>
        </div>
        <ul class="right">
            <li v-for="(item,index) in getlistArr" 
                :key="index" 
                @dblclick="flagFnobj(item)"
                :class="{active:item.completed}">{{item.title}} 
                <b @click="delFn(item.id)" >删除</b>
            </li>
        </ul>
    </div>
    
</template>
<script>
import {mapActions,mapMutations,mapGetters} from "vuex"
export default {
    data(){
        return {
            val:"",
            sel:200
        }
    },
    computed:{
        ...mapGetters(["getlistArr"])
    },
    methods:{
        ...mapActions(["getdata","adddata","delFn","flagFn","selFn"]),
        flagFnobj(item){ 
            let obj = {
                title:item.title,
                userId:item.userId,
                id:item.id,
                completed:!item.completed
            }
            this.flagFn(obj)
        }
    },
    created(){
        this.getdata()
    }
}
</script>
<style  lang="scss">
*{
    margin:10px;
    padding:0;
    list-style:none;
}
.cont{
    display: flex;
    >.left{
        width: 150px;
        height: 100%;
    }
    >.right{
        flex:1;
        >li{
            display: inline-block;
            padding:10px 10px;
            background: #fcc;
            color:#000;
        }
        >.active{
            background: tomato;
            color:#fff;
        }
    }
}
</style>