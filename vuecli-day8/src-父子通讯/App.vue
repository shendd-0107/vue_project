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

export default {
  name: "App",
  data() {
    return {
      arr: [
        {
          title: "真的吗？",
          cont: 2048,
          img: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3967239004,1951414302&fm=27&gp=0.jpg"
          ],
          style: {
            width: "150px",
            height: "150px"
          }
        },
        {
          title: "你是谁",
          cont: 1024,
          img: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3967239004,1951414302&fm=27&gp=0.jpg"
          ],
          style: {
            width: "150px",
            height: "150px"
          }
        }
      ]
    };
  },
  components: {
    list
  },
  methods:{
    add(cont,ind){
      this.arr[ind].cont++;
      console.log(cont,ind);
    }
  }
};
</script>

<style>
</style>
