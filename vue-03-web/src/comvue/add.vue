<template>
    <div>
        <ol>{{data}}</ol>
        <ul>{{list1}}</ul>
        <list></list>
    </div>
</template>
<script>
    import list from "./list.vue";
    export default {
        props:["data"],
        data(){
            return {
                list1:"我是list1的默认参数"
            }
        },
        components:{
            list
        }
    }
</script>

