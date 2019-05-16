<template>
    <div>
        <li>
            <b>{{title}}</b>
            <span>{{cont}}</span>
            <p><img :src="item" v-for="(item,index) in img" :key="index" :style="styles"></p>
            <button @click="$emit('clickFn')">点击cont+1</button>
        </li>
    </div>
</template>
<script>
export default {
    // props:["title","cont","img","styles"],
    props:{
        title:{
            type:String,
            required:false,
            default:"我爱你",
            vallidator(val){
                return val == "的吗"
            }
        },
        cont:{
            type:Number,
            required:false,
            default:1024,
            vallidator(val){
                return val > 5000
            }
        },
        img:{
            type:Array,
            default(){
                return ["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3967239004,1951414302&fm=27&gp=0.jpg"
                ]          
            }
        },
        styles:{
            type:Object,
            required:false,
            default(){
                return {
                    width:"150px",
                    height:"150px"
                }
            }
        }
    },
    data(){
        return {
            
        }
    },
    
}
</script>