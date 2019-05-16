import Vue from "vue";
import vueRouter from "vue-router";
import Home from "../views/home"
import List from "../views/list"
import Newset from "../views/newset"
import Vedio from "../views/vedio"
import Frums from "../views/frums"
import Live from "../views/live"
import News from "../views/news"
import Hots from "../views/hots"
import NBA from "../views/NBA"
import CCTV from "../views/CCTV"

Vue.use(vueRouter);

let routes=[
        {
            path:"/",
            name:"home",
            component:Home,
            
        },
        {
            path:"/list",
            name:"list",
            component:List
        },
        {
            path:"/newset",
            name:"newset",
            component:Newset,
            children:[
                {
                    path:"live",
                    name:"live",
                    component:Live,
                },
                {
                    path:"news",
                    name:"news",
                    component:News,
                },
                {
                    path:"hots",
                    name:"hots",
                    component:Hots,
                },
                {
                    path:"NBA",
                    name:"NBA",
                    component:NBA,
                },
                {
                    path:"CCTV",
                    name:"CCTV",
                    component:CCTV,
                },
            ]
        },
        {
            path:"/frums",
            name:"frums",
            component:Frums
        },
        {
            path:"/vedio",
            name:"vedio",
            component:Vedio
        }
    ]
const router = new vueRouter({
    routes,
})
export default router;