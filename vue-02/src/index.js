import "./css/style.scss";
import Vue from "vue/dist/vue.esm.js";
console.log(Vue);
let vm = new Vue({
    el:"#app",
    // template:"<li>你也是好人</li>",
    data:{
        title:"我是好人",
        page:{
            page1:{
                pages:1,
                price:10
            },
            page2:{
                pages:2,
                price:5
            }
        },
    },
    computed:{
        price(){
            console.log("price");
            return this.page.page1.pages*this.page.page1.price+this.page.page2.pages*this.page.page2.price;
        }
    },
    methods:{
        clickFn(){
            this.page.page1.pages++;
            console.log(this.page.page1.pages);
        },
        sumFn(){
            console.log("sumFn");
            return this.page.page1.pages*this.page.page1.price+this.page.page2.pages*this.page.page2.price;
        }   
    }
})
