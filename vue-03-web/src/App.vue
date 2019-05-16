<template>
    <div>
        <list :title="title" :cont="cont" @clickFn="addFn"></list>
        <add :data="addData"></add>
    </div>
</template>
<script>
    import list from "./comvue/list.vue";
    import add from "./comvue/add.vue";

    export default {
        data(){
            return {
                title:"真的吗？",
                cont:2048,
                img:["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3967239004,1951414302&fm=27&gp=0.jpg"
                ],
                style:{
                    width:"150px",
                    height:"150px"
                },
                addData:"我是传过来的实参"
            }
        },
        methods:{
            addFn(){
                console.log(this.cont);
                this.cont++;
            }
        },
        components:{
            list,
            add
        }
    }
</script>
