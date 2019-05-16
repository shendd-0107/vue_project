<template>
  <div id="app">
    <div class="nav">
        <span :class="{active:index==cur}" v-for="(item,index) in arr" :key="index" @click="clickFn(index)">{{item.title}}</span>
    </div>
    <div class="main">
      <!-- 渲染newArr的数据 -->
      <div class="list"  v-if="newArr.length==0">
        您的选择没有面试
      </div>
      <div v-else>
        <mylist :newArr=newArr></mylist>
      </div>
      
    </div>
  </div>
</template>
<script>

import Mock from "mockjs";//引入mockjs
import axios from "axios"//引入axios
import mylist from "./components/list";
export default {
  name: 'App',
  components: {
    mylist,//注册头部组件
  },
  data(){
    return {
      header:["未开始","已打卡","已放弃","全部"],//头部的数据
      cur:0,//改变样式
      arr:[],//Ajax请求完成的整体数据
      newArr:[]//点击过后的一条数据
    }
  },
  methods:{
    clickFn(index){//点击切换央视
      this.cur = index;
      this.newArr = this.arr[this.cur].children;//将点击的下标的所对应的面试选出来
    }
  },
  created(){
    //mock模拟数据
    Mock.mock("/api/data",{
      "list|4":[
        {
          "title|1":this.header,
          "children|0-2":[
            {
                "title|1":["瓜子二手车","二手车","车"],
                "address":"@ctitle",
                "timer":"@time",
            }
          ]
        }
      ]
    })
    //ajax请求数据
    axios.get("/api/data").then(res=>{
      this.arr = res.data.list;
      this.newArr = this.arr[this.cur].children
    })
  }
}
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html,body,#app{
  width:100%;
  height:100%;
  background: #eee;
}
#app{
  display: flex;
  flex-direction: column;
}
.header{
  width:100%;
  height: 55px;
  border-bottom:1px solid #ccc;
  display: flex;
  background: #fff;
  >div{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
}
.nav{
  width: 100%;
  height: 50px;
  margin-bottom:10px;
  display: flex;
  background: #fff;
  >span{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  >.active{
    border-bottom:1px solid #05f;
    color:#05f;
  }
}
.main{
  flex:1;
  overflow: auto;
  .list{
    width: 100%;
    height: 100%;
    >.item{
      width: 100% ;
      height: 130px;
      margin-bottom:10px;
      background: #fff;
      display: flex;
      flex-direction: column;
      >dt,>dd{
        flex:1;
        display: flex;
        align-items: center;
        >span{
          color:red;        
        }
      }
      >dd{
        color:#666;
      }
    }
  }
}



</style>
