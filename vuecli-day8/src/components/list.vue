<template>
  <div class="box">
      <li>
        <span>商品名称：<b>{{name}}</b></span>
        <span>商品价格：<b>{{price}}</b></span>
        <p></p>
      </li>
      <myadd :counts=count :id=id></myadd>
      <p></p>
  </div>
</template>
<script>
import myadd from "./add.vue";
export default {
  props:["name","price","count","id","ind"],
  components:{
    myadd
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
<style scoped lang="">
  .box{
    border:1px solid #ccc;
    margin-top:10px;
    text-align: center;
  }
  
</style>