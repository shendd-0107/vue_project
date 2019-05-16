<template>
  <div id="app">
      <router-view>
        
      </router-view>
  </div>
  
</template>
<script>

export default {
  name:"App",
  data() {
    return {
        
    };
  },
  created(){
   
  }
};
</script>
<style  lang="scss">
  html,body,#app{
    width: 100%;
    height: 100%;
    box-sizing:border-box;
    text-decoration: none;
  }
  #app>div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    >div{
      flex:1;
      overflow: auto;
    }
  }
  
  footer,header{
    width: 100%;
    height: 60px;
    background: tomato;
    display: flex;
    >a,>span{
      flex:1;
      color:#fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }
  }
</style>
