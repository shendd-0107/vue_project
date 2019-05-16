<template>
  <div id="app">
    <mydiolog 
    :list=total
    :arr=arr
    v-show="isShow"
    ></mydiolog>
      <myheader></myheader>
      <mymain 
      :li=li 
      :list=arr 
      @clickLi=clickLi 
      :current=current

      ></mymain>
      <div class="footer" @click="isShowFn">
        <span>总数：<b>{{totalCount}}</b></span>
        <span>总价：<b>{{totalPrice}}</b></span>
        <span>去结算</span>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import myheader from "./components/header"
import mymain from "./components/list";
import mydiolog from "./components/diolog";
export default {
  name: 'App',
  data(){
    return {
      li:[],//左边的列表
      list:[],//获取到的所有右边的列表
      arr:[],//筛选完成之后的列表，并向组件传参
      current:0,
      total:[],
      isShow:false,
    }
  },
  components: {
    myheader,
    mymain,
    mydiolog,
  },
  methods:{
    clickLi(ind,type){
      this.current = ind;
      this.arr = this.getType(this.list,type);
    },
    getType(list11,type){
      return list11.filter(item=>item.type == type);
    },
    isShowFn(){
      this.isShow = !this.isShow;
    }
  },
  created(){

    axios.get("/api/li").then(res=>{
      this.li=res.data;
    })
    axios.get("/api/list").then(res=>{
      this.list = res.data;
      this.arr=this.getType(this.list,this.li[0].type);
    })

    this.$bus.$on("addFn",(count,id,type)=>{
      this.arr = this.getType(this.list,type);

      let index = this.arr.findIndex(item=>item.id == id)
      this.arr[index].count=count;

      let ind = this.total.findIndex(item=>item.id == id);
      if(ind==-1){
        this.total.push(this.arr[index])
      }
      
      let curs = this.li.findIndex(item=>item.type == type);

      this.current = curs;
    })
  },
  computed:{
    totalPrice(){
      return this.total.reduce((p,n)=>p+n.price*n.count,0);
    },
    totalCount(){
      return this.total.reduce((p,n)=>p+n.count,0);
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html,body,#app{
    width: 100%;
    height: 100%;
    
  }
  #app{
    display: flex;
    flex-direction: column;
    border:1px solid #ccc;
    .mask{
        width:100%;
        height:100%;
        background: rgba(0, 0, 0, .3);
        position: fixed;
        left:0;
        bottom:56px;
        // display: none;
        >.cont{
            width:100%;
            height:50%;
            background: #fff;
            position: fixed;
            bottom:56px;
            left:0;
            overflow-y: auto;
        }
    }
    .header{
      width: 100%;
      height: 50px;
      display: flex;
      border-bottom:1px solid #ccc;
      >span{
        flex:1;
        display: flex;
        justify-content: center;
        align-items:center;
        color:#444;
        font-size: 18px;
      }
      .active{
        border-bottom:2px solid #f90;
      }
    }
    .main{
      flex:1;
      overflow: auto;
      >main{
        width: 100%;
        height: 100%;
        display: flex;
        >.left{
          width: 100px;
          height: 100%;
          border-right:1px solid #ccc;
          >span{
            display: flex;
            width: 100%;
            height: 60px;
            justify-content: center;
            align-items: center;
            border-bottom:2px dotted #ccc;
            color:#666;
            // font-size: 18px;
          }
          >.active1{
            color:tomato;
          }
        }
        >.right{
          flex:1;
        }
      }
      
    }
    .footer{
      width: 100%;
      height: 55px;
      background: #666;
      display: flex;
      >span{
        flex:1;
        color:#fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      >span:last-child{
        color: #000000;background: #f90;

      }
    }
  }
</style>
