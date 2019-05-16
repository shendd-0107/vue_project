<template>
  <div id="app">
    <list v-for="(item,index) in arr" 
    :key="index" 
    :title="item.title" 
    :cont="item.cont" 
    :img="item.img" 
    :ind="index"
    :styles ="item.style" @clickFn="add"></list>
  </div>
</template>

<script>
import list from "./components/list";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
        arr:[]
    };
  },
  components: {
    list
  },
  methods:{
    add(cont,ind){
      this.arr[ind].cont++;
      console.log(cont,ind);
    },
    
  },
  created(){
      axios.get("/api/list").then(res=>{
        res.data.forEach(item=>{
          this.arr.push(item);
        })
        console.log(this.arr);
      })
    }
};
</script>

<style>
</style>
