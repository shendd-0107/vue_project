<template>
  <div class="container">
    <!-- 基础插槽 -->
      <myheader>
        <template v-slot:ipt>
          <p>我是爱你的</p>
        </template>
      </myheader>
    <!-- 具名插槽 -->
      <myheader>
        <template v-slot:ipt>
          <p><input type="text" ></p>
          <b>你是谁</b>
        </template>
      </myheader>
    <!-- 作用域插槽 -->
      <myheader>
        <template v-slot:ipt="obj">
            <b>{{obj.list}}</b>
            <i v-for="(item,index) in obj.arr" :key="index">{{item}}-></i>
        </template>
      </myheader>
    <!-- 随便的main -->
    <main></main>
  </div>
</template>
<script>
  import myheader from "./components/list"
  export default {
    props:{

    },
    components:{
      myheader
    },
    data(){
      return {

      }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
  }
</script>
<style lang="scss">
  *{
    margin:0;padding:0;box-sizing:box-border;
  }
  html,body,.container{
    width:100%;height:100%;
    }
  .container{
    display:flex;flex-direction: column;
    }
  header{
    width:100%;height:50px;background: tomato;margin-top:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
      >span{
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      >p{
        flex:1;
      }
    }
  main{
    flex:1;overflow: auto
    }
</style>