<template>
  <div id="app">
    <mylist :arr=arr></mylist>
  </div>
</template>

<script>
import mylist from './components/list'
import axios from "axios";
export default {
  name: 'App',
  data(){
    return {
      arr:[]
    }
  },
  components: {
    mylist
  },
  created(){
    axios.get("/api/data").then(res=>{
      this.arr = res.data;
      console.log(this.arr);
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}
</style>
