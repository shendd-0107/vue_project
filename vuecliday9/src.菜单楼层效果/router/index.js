import Vue from "vue";
import route from "vue-router";
import Admin from "../views/admin"
import Order from "../views/order"
import Search from "../views/search";
import Shop from "../views/shop";
import Pingjia from "../views/pingjia";
import Caidan from "../views/caidan";
import Xiangqing from "../views/xiangqing";

Vue.use(route);
let router = new route({
    routes:[
        {
            path:"/",
            name:"admin:id",
            component:Admin,
        },
        {
            path:"/order",
            name:"order",
            component:Order,
        },
        {
            path:"/search",
            name:"search",
            component:Search,
        },
        {
            path:"/shop",
            component:Shop,
            beforeEnter:(to,from,next)=>{
                next("/");

            }
        },
        {

            path:"/shop/:id",
            name:"shop",
            component:Shop,
            redirect:{name:"caidan"},
            children:[
                {
                    path:"pingjia",
                    name:"pingjia",
                    component:Pingjia,
                },
                {
                    path:"caidan",
                    name:"caidan",
                    component:Caidan,
                },
                {
                    path:"xiangqing",
                    name:"xiangqing",
                    component:Xiangqing,
                }
            ]
        }
    ]
})
export default router;
const arr = ["order","admin"];
router.beforeEach((to,from,next)=>{
    if(arr.includes(to.name)){
        const item = window.localStorage.getItem("one");
        if(item){
            next();
        }
        else{
            next("/");
        }
    }
    else{
        next();
    }
    
})