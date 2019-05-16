<template>
  <div>
    <mytags></mytags>
    <mylist v-for="(item,index) in arr" :key="index" 
    :name=item.name
    :price=item.price
    :count=item.count
    :id=item.id
    :ind=index
    ></mylist>
    <h3>总价：<b>{{totalPrice}}</b></h3>
  </div>
</template>
<script>
import mylist from "./components/list"
export default {
  
  components:{
    mylist
  },
  data(){
    return {
      arr:[
        {
          name:"苹果",
          price:"10",
          count:0,
          id:1
        },
        {
          name:"橙子",
          price:"5",
          count:0,
          id:2
        }
        ,
        {
          name:"樱桃",
          price:"15",
          count:0,
          id:3
        }
      ],
      total:[]
    }
  },
  computed:{
    totalPrice(){
      return this.total.reduce((p,n)=>{
          return p+n.price*n.count
        },0);
    }
  },
  methods:{

  },
  created(){
    this.$bus.$on("addCount",(num,id)=>{
        let ind = this.arr.findIndex(item=>item.id == id);
        this.arr[ind].count = num;
        let index = this.total.findIndex(item=>item.id == id);
        if(index == -1){
          this.total.push(this.arr[ind]);
        }
    })
  },
  mounted(){

  }
}
</script>
<style scoped lang="">

</style>