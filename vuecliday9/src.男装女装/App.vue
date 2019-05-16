<template>
  <div id="app">
    <myheader :headerArr=headerArr @clickFn=add :headerInd=ind></myheader>
    <mylist :list=ind></mylist>
  </div>
</template>

<script>
import myheader from "./components/header"
import mylist from "./components/list"
export default {
  name: 'App',
  data(){
    return {
      headerArr:["分类","品牌"],
      ind:0
    }
  },
  components: {
    mylist,
    myheader
  },
  methods:{
    add(ind){
      this.ind=ind;
    }
  }
}
</script>

<style>
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
    width:100%;
    height:100%;
  }
  #app{
    display: flex;
    flex-direction: column;
  }
  .header{
    width:100%;
    height:50px;
    color:#666;
    display: flex;
  }
  .header>span{
    flex:1;
    display: flex;
    justify-content: center;
    align-items:center;
    border:1px solid #ccc;
  }
  .header>span.active{
    background: tomato;
    color:#fff;
  }
  .classify{
    height: 100%;
    width: 100%;
  }
</style>
