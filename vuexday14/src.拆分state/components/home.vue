<template>
 <div>
   <h3>home</h3>
   <p>count------>{{$store.state.count}}</p>
   <p>stateList------>{{$store.state.list}}</p>
   <p>getterList------->{{$store.getters.getlist}}</p>
   <p>getAge=---------->{{$store.getters.getAge}}</p>
   <!-- <button type="button" @click='addlist'>添加</button> -->
   
   <li>-----------------------分割线-------------------------></li>

   <p>{{count}}</p>
   <p>{{list}}</p>
   <p>年纪大于20的人有{{getCount}}个</p>
   <p>getterList------->{{getlist}}</p>
   <p>getAge=---------->{{getAge}}</p>
   <button type="button" @click='addlist({name:"王五",age:26})'>添加</button>
   <button @click="addActive">延时加1</button>
   <myadd></myadd>
   <mydel></mydel>
 </div>
</template>

<script>
import myadd from "./add"
import mydel from "./del"
import {mapState,mapMutations, mapGetters, mapActions} from "vuex";
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components:{
    myadd,
    mydel
  },
  computed:{
    ...mapState(["count","list"]),
    ...mapGetters(["getCount","getlist","getAge"])
  },
  methods:{
    ...mapMutations(["addlist"]),
    ...mapActions(["addActive"])
    // addlist(){
    //   console.log(111);
    //   this.$store.commit("addlist",{name:"王五",age:26});
    // },
    
  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
