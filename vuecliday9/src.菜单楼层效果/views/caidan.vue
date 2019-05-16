<template>
    <div class="wrapper">
            <div class="left">
                <ul class="leftShop">
                    <li v-for="(item,index) in list" 
                    :key="index" 
                    @click="addFn(index)" 
                    :class="{active:index==ind}">{{item.name}}</li>
                </ul>
            </div>
            <div class="right">
                <div class="right-better" ref="rightUl">
                    <myList v-for="(item,index) in list" 
                    :key="index"
                    :name=item.name
                    :foods=item.foods
                    ></myList>
                </div>
            </div>
    </div>
</template>
<script>
import axios from "axios";
import BScroll from "better-scroll";
import myList from "../components/list.vue"
export default {
    data(){
        return {
            list:[],
            ind:0,
            scrollY:0,
            scrollH:[]
        }
    },
    components:{
        myList
    },
   
    created(){
        axios.get("/api/shop").then(res=>{
            this.list=res.data.goods;
            this.$nextTick(()=>{
                this.init();
                this.scrollHeight();
            })
        })
    },
    methods:{
        addFn(ind){
            this.ind=ind;
            let ulli = this.$refs.rightUl.children;
            this.rightBS.scrollToElement(ulli[ind],1000);
        },
        init(){
            this.leftBS =  new BScroll(".left",{
                click:true,
            })
            this.rightBS = new BScroll(".right",{
                probeType:3
            })
            this.rightBS.on("scroll",(res)=>{
                this.scrollY = Math.abs(res.y);
                this.ind = this.current;
            })
        },
        scrollHeight(){
            let ulli = this.$refs.rightUl.children;
            let height = 0
            this.scrollH.push(height);
            for(let i=0;i<ulli.length;i++){
                height += ulli[i].offsetHeight;
                this.scrollH.push(height);
            }
            
        }
    },
    computed:{
        current(){
            for(let i=0;i<this.scrollH.length;i++){
                if(this.scrollH && (this.scrollY >=this.scrollH[i] && this.scrollY < this.scrollH[i+1])){
                    return i;
                }
            }
            return 0;
        }
    }
}
</script>
<style  lang="scss">


</style>